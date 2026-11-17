"use strict";
(() => {
  const CONFIG_KEY = "coconut-ledger-sync-config-v1",
    SESSION_KEY = "coconut-ledger-sync-session-v1",
    STORE_KEY = "coconut-ledger-sync-store-v1",
    DEFAULT_CONFIG = Object.freeze({
      url: "https://ukmyztfewlklzitmpccc.supabase.co",
      anonKey: "sb_publishable_Y2p8MJP4de_Lqz1TZGfl0w_YFGXzxh6",
    });

  function read(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch (error) {
      return fallback;
    }
  }
  function write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  let config = read(CONFIG_KEY, DEFAULT_CONFIG),
    session = read(SESSION_KEY, null),
    syncStore = read(STORE_KEY, {});

  function normalizeConfig(input) {
    const url = String(input.url || "").trim().replace(/\/+$/, ""),
      anonKey = String(input.anonKey || "").trim();
    if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(url))
      throw new Error("Enter the HTTPS project URL shown in Supabase settings.");
    if (!anonKey || anonKey.length > 4096) throw new Error("Enter the Supabase publishable (anon) key.");
    if (/^sb_secret_/i.test(anonKey) || isServiceRoleJwt(anonKey))
      throw new Error("Do not enter a Supabase secret or service_role key. Use the public publishable (anon) key.");
    return { url, anonKey };
  }
  function isServiceRoleJwt(key) {
    const payload = key.split(".")[1];
    if (!payload) return false;
    try {
      return JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/"))).role === "service_role";
    } catch (error) {
      return false;
    }
  }
  function setConfig(input) {
    const next = normalizeConfig(input);
    if (!config || config.url !== next.url || config.anonKey !== next.anonKey) {
      session = null;
      localStorage.removeItem(SESSION_KEY);
    }
    config = next;
    write(CONFIG_KEY, config);
    return publicStatus();
  }
  function resetConfig() {
    const next = { ...DEFAULT_CONFIG };
    if (!config || config.url !== next.url || config.anonKey !== next.anonKey) {
      session = null;
      localStorage.removeItem(SESSION_KEY);
    }
    config = next;
    localStorage.removeItem(CONFIG_KEY);
    return publicStatus();
  }
  function publicStatus() {
    return {
      configured: !!config,
      signedIn: !!(session && session.access_token),
      user: session && session.user ? { id: session.user.id, email: session.user.email || "" } : null,
    };
  }
  function authHeaders(token) {
    if (!config) throw new Error("Configure the estate sync connection first.");
    return {
      apikey: config.anonKey,
      Authorization: "Bearer " + (token || config.anonKey),
      "Content-Type": "application/json",
    };
  }
  async function responseJson(response) {
    const text = await response.text();
    let data = null;
    if (text) {
      try {
        data = JSON.parse(text);
      } catch (error) {
        throw new Error("The sync service returned an unreadable response.");
      }
    }
    if (!response.ok) {
      const message = data && (data.msg || data.message || data.error_description || data.error);
      throw new Error(message || `Sync request failed (${response.status}).`);
    }
    return data;
  }
  async function authRequest(path, body) {
    if (!config) throw new Error("Configure the estate sync connection first.");
    const response = await fetch(config.url + "/auth/v1/" + path, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify(body),
    });
    return responseJson(response);
  }
  async function saveSession(next) {
    session = next && next.access_token ? next : null;
    if (session) {
      session.expires_at =
        session.expires_at || Math.floor(Date.now() / 1000) + Number(session.expires_in || 3600);
      write(SESSION_KEY, session);
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  }
  async function currentSession() {
    if (!session || !session.refresh_token) return null;
    if (Number(session.expires_at || 0) > Math.floor(Date.now() / 1000) + 60) return session;
    try {
      const refreshed = await authRequest("token?grant_type=refresh_token", { refresh_token: session.refresh_token });
      await saveSession(refreshed);
      return session;
    } catch (error) {
      await saveSession(null);
      throw error;
    }
  }
  async function api(path, options, includeResponse) {
    const active = await currentSession();
    if (!active) throw new Error("Sign in to sync this estate.");
    const response = await fetch(config.url + path, {
      ...options,
      headers: {
        ...authHeaders(active.access_token),
        ...(options && options.headers ? options.headers : {}),
      },
    });
    if (response.status === 401 && session && session.refresh_token) {
      session.expires_at = 0;
      const renewed = await currentSession();
      if (!renewed) throw new Error("Your session expired. Sign in again to sync this estate.");
      const retry = await fetch(config.url + path, {
        ...options,
        headers: {
          ...authHeaders(renewed.access_token),
          ...(options && options.headers ? options.headers : {}),
        },
      });
      const data = await responseJson(retry);
      return includeResponse ? { data, response: retry } : data;
    }
    const data = await responseJson(response);
    return includeResponse ? { data, response } : data;
  }
  async function rpc(name, args) {
    return api("/rest/v1/rpc/" + name, { method: "POST", body: JSON.stringify(args || {}) });
  }
  async function signUp(email, password) {
    const result = await authRequest("signup", { email: String(email).trim(), password });
    if (result && result.access_token) await saveSession(result);
    return result;
  }
  async function signIn(email, password) {
    const next = await authRequest("token?grant_type=password", {
      email: String(email).trim(),
      password,
    });
    await saveSession(next);
    return publicStatus();
  }
  async function signOut() {
    let logoutError;
    try {
      if (session && session.access_token && config) {
        const response = await fetch(config.url + "/auth/v1/logout", {
          method: "POST",
          headers: authHeaders(session.access_token),
        });
        if (!response.ok && response.status !== 401) await responseJson(response);
      }
    } catch (error) {
      logoutError = error;
    } finally {
      await saveSession(null);
    }
    if (logoutError) throw logoutError;
    return publicStatus();
  }
  function storeFor(estateId) {
    return syncStore[estateId] || { base: {}, conflicts: [] };
  }
  function saveStore(estateId, value) {
    syncStore[estateId] = value;
    write(STORE_KEY, syncStore);
  }
  async function listEstates() {
    return api("/rest/v1/estate_members?select=estate_id,user_id,role,approved_at,estates(id,name)&order=approved_at.asc");
  }
  function restoreEstateSelection(estateId, savedUserId, memberships) {
    const user = publicStatus().user,
      userId = user && user.id;
    if (!userId || !estateId || (savedUserId && savedUserId !== userId)) return "";
    return memberships.some((membership) => membership.estate_id === estateId) ? estateId : "";
  }
  async function createEstate(name) {
    return rpc("create_estate", { p_name: name });
  }
  async function createInvite(estateId) {
    const rows = await rpc("create_estate_invite", { p_estate_id: estateId });
    const invite = Array.isArray(rows) ? rows[0] : null;
    if (
      !invite ||
      !invite.invite_id ||
      !/^[0-9a-f]{64}$/i.test(invite.invite_code || "") ||
      !invite.expires_at
    )
      throw new Error("The estate service did not return a valid invitation.");
    return invite;
  }
  async function listInvites(estateId) {
    return rpc("list_estate_invites", { p_estate_id: estateId });
  }
  async function revokeInvite(inviteId) {
    return rpc("revoke_estate_invite", { p_invite_id: inviteId });
  }
  async function requestAccess(code, displayName) {
    const rows = await rpc("request_estate_access", { p_invite_code: code, p_display_name: displayName });
    const request = Array.isArray(rows) ? rows[0] : null;
    if (!request || !request.estate_id || !request.estate_name || request.request_status !== "pending")
      throw new Error("The server did not confirm the join request.");
    return request;
  }
  async function listRequests(estateId) {
    const rows = await rpc("list_estate_join_requests", { p_estate_id: estateId });
    return rows.map((request) => ({ ...request, id: request.request_id }));
  }
  async function reviewRequest(requestId, approve, role) {
    return rpc("review_estate_request", {
      p_request_id: requestId,
      p_approve: !!approve,
      p_role: role || "member_1",
    });
  }
  async function changeRole(estateId, userId, role) {
    return rpc("change_estate_member_role", {
      p_estate_id: estateId,
      p_user_id: userId,
      p_role: role,
    });
  }
  async function removeMember(estateId, userId) {
    return rpc("remove_estate_member", { p_estate_id: estateId, p_user_id: userId });
  }
  async function setMemberStatus(estateId, userId, status) {
    return rpc("set_estate_member_status", {
      p_estate_id: estateId,
      p_user_id: userId,
      p_status: status,
    });
  }
  async function listMembers(estateId) {
    return rpc("list_estate_members", { p_estate_id: estateId });
  }
  async function getFeatures(estateId) {
    return rpc("get_estate_features", { p_estate_id: estateId });
  }
  async function listRoleFeatures(estateId) {
    return rpc("list_estate_role_features", { p_estate_id: estateId });
  }
  async function setRoleFeatures(estateId, role, features) {
    return rpc("set_estate_role_features", {
      p_estate_id: estateId,
      p_role: role,
      p_features: features,
    });
  }
  async function manageAccount(action, estateId, userId) {
    return api("/functions/v1/manage-account", {
      method: "POST",
      body: JSON.stringify({ action, estate_id: estateId, user_id: userId }),
    });
  }
  async function listRecords(estateId) {
    const path = "/rest/v1/rpc/list_estate_records",
      pageSize = 500;
    for (let attempt = 0; attempt < 3; attempt++) {
      const records = new Map();
      let offset = 0,
        total = null,
        emptyPage = false;
      while (!emptyPage) {
        const page = await api(
          path,
          {
            method: "POST",
            body: JSON.stringify({ p_estate_id: estateId }),
            headers: {
              Range: `${offset}-${offset + pageSize - 1}`,
              Prefer: "count=exact",
            },
          },
          true,
        );
        const rows = page.data || [],
          contentRange = page.response.headers && page.response.headers.get("content-range"),
          match = contentRange && /\/(\d+)$/.exec(contentRange);
        if (!match) throw new Error("Could not verify that all estate records were downloaded.");
        total = Number(match[1]);
        if (!rows.length) {
          emptyPage = true;
          break;
        }
        rows.forEach((row) => records.set(row.record_type + ":" + row.record_id, row));
        offset += rows.length;
        if (total !== null && records.size === total) return Array.from(records.values());
      }
      if (records.size === total) return Array.from(records.values());
    }
    throw new Error("Estate records changed while downloading. Try syncing again.");
  }
  async function submitChanges(estateId, changes) {
    if (!changes.length) return { ok: true, records: [] };
    const batches = [];
    let batch = [],
      batchBytes = 2;
    for (const change of changes) {
      const changeBytes = new Blob([JSON.stringify(change)]).size + (batch.length ? 1 : 0);
      if (changeBytes + 2 > 1800000) throw new Error("sync_change_too_large");
      if (batch.length >= 200 || batchBytes + changeBytes > 1800000) {
        batches.push(batch);
        batch = [];
        batchBytes = 2;
      }
      batch.push(change);
      batchBytes += changeBytes;
    }
    if (batch.length) batches.push(batch);

    const records = [],
      conflicts = [];
    for (const changesInBatch of batches) {
      const result = await rpc("sync_estate_records", {
        p_estate_id: estateId,
        p_changes: changesInBatch,
      });
      if (!result || typeof result.ok !== "boolean")
        throw new Error("The sync service returned an invalid record response.");
      if (result.ok && Array.isArray(result.records)) records.push(...result.records);
      else if (!result.ok && Array.isArray(result.conflicts) && result.conflicts.length)
        conflicts.push(...result.conflicts);
      else if (result.ok) throw new Error("The sync service returned an invalid record response.");
      else throw new Error("The sync service returned an invalid conflict response.");
    }
    return conflicts.length ? { ok: false, records, conflicts } : { ok: true, records };
  }
  return (window.EstateSync = {
    setConfig,
    resetConfig,
    getConfig: () => (config ? { ...config } : { url: "", anonKey: "" }),
    publicStatus,
    signUp,
    signIn,
    signOut,
    listEstates,
    restoreEstateSelection,
    createEstate,
    createInvite,
    listInvites,
    revokeInvite,
    requestAccess,
    listRequests,
    reviewRequest,
    changeRole,
    removeMember,
    setMemberStatus,
    listMembers,
    getFeatures,
    listRoleFeatures,
    setRoleFeatures,
    manageAccount,
    listRecords,
    submitChanges,
    storeFor,
    saveStore,
    currentSession,
  });
})();
