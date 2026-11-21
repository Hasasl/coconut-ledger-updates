"use strict";
(() => {
  const LOG_KEY = "coconut-ledger-error-log-v1",
    SCOPE_KEY = "coconut-ledger-error-log-user-v1",
    MAX_LOGS = 20;
  let motionHandler = null,
    previousMotion = null,
    shakePeaks = [],
    lastShakeAt = 0,
    onShake = () => {},
    canShake = () => true,
    permissionGestureHandler = null;

  function getStorage(storageName) {
    try {
      return window[storageName];
    } catch (error) {
      return null;
    }
  }
  function redact(text) {
    return String(text || "")
      .slice(0, 4000)
      .replace(/Bearer\s+[A-Za-z0-9._~+/-]+=*/gi, "Bearer [redacted]")
      .replace(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, "[email redacted]")
      .replace(/([?&](?:access_token|refresh_token|token|password|key)=)[^&\s]*/gi, "$1[redacted]")
      .replace(
        /(password|passwd|token|secret|authorization|cookie)(["'\s:=]+)[^,\s;]+/gi,
        "$1$2[redacted]",
      );
  }
  function recentErrors() {
    const storage = getStorage("sessionStorage");
    if (!storage) return [];
    try {
      const entries = JSON.parse(storage.getItem(LOG_KEY) || "[]");
      return Array.isArray(entries) ? entries.slice(-MAX_LOGS) : [];
    } catch (error) {
      return [];
    }
  }
  function clearRecentErrors() {
    const storage = getStorage("sessionStorage");
    if (storage) storage.removeItem(LOG_KEY);
  }
  function setUserScope(userId) {
    const storage = getStorage("sessionStorage"),
      nextScope = String(userId || "");
    if (!storage) return;
    try {
      if (storage.getItem(SCOPE_KEY) !== nextScope) clearRecentErrors();
      storage.setItem(SCOPE_KEY, nextScope);
    } catch (error) {}
  }
  function logError(type, message, stack, extra = {}) {
    const storage = getStorage("sessionStorage");
    if (!storage) return;
    const entry = {
      type: String(type || "Error").slice(0, 40),
      message: redact(message).slice(0, 1000),
      stack: redact(stack).slice(0, 2000),
      at: new Date().toISOString(),
    };
    if (Number.isInteger(extra.status) && extra.status >= 100 && extra.status <= 599)
      entry.status = extra.status;
    if (typeof extra.path === "string" && /^\/[A-Za-z0-9/_-]{0,200}$/.test(extra.path))
      entry.path = extra.path;
    const entries = recentErrors();
    entries.push(entry);
    try {
      storage.setItem(LOG_KEY, JSON.stringify(entries.slice(-MAX_LOGS)));
    } catch (error) {}
  }
  function logRuntimeError(event) {
    const error = event && event.error,
      message = (error && error.message) || (event && event.message) || "Uncaught application error";
    logError((error && error.name) || "JavaScriptError", message, error && error.stack);
  }
  function logUnhandledRejection(event) {
    const reason = event && event.reason,
      message = reason && reason.message ? reason.message : typeof reason === "string" ? reason : "Unhandled promise rejection";
    logError((reason && reason.name) || "UnhandledRejection", message, reason && reason.stack);
  }
  function logApiError(event) {
    const detail = event && event.detail;
    if (!detail) return;
    logError("ApiError", "Request failed", "", {
      status: Number(detail.status),
      path: typeof detail.path === "string" ? detail.path.split(/[?#]/, 1)[0] : "",
    });
  }
  window.addEventListener("error", logRuntimeError);
  window.addEventListener("unhandledrejection", logUnhandledRejection);
  window.addEventListener("coconut-api-error", logApiError);

  function motionSupported() {
    return typeof window.DeviceMotionEvent !== "undefined";
  }
  function detachMotion() {
    if (motionHandler) window.removeEventListener("devicemotion", motionHandler);
    motionHandler = null;
    previousMotion = null;
    shakePeaks = [];
  }
  function attachMotion(onDetected, canTrigger) {
    onShake = typeof onDetected === "function" ? onDetected : () => {};
    canShake = typeof canTrigger === "function" ? canTrigger : () => true;
    if (motionHandler || !motionSupported()) return;
    motionHandler = (event) => {
      const motion = event.accelerationIncludingGravity || event.acceleration;
      if (!motion || ![motion.x, motion.y, motion.z].every(Number.isFinite)) return;
      const current = [motion.x, motion.y, motion.z],
        now = Date.now();
      if (previousMotion) {
        const change = Math.hypot(
          current[0] - previousMotion[0],
          current[1] - previousMotion[1],
          current[2] - previousMotion[2],
        );
        if (change >= 13 && (!shakePeaks.length || now - shakePeaks[shakePeaks.length - 1] >= 100)) {
          shakePeaks = shakePeaks.filter((time) => now - time <= 1000);
          shakePeaks.push(now);
          if (shakePeaks.length >= 3) {
            if (now - lastShakeAt >= 30000 && canShake()) {
              lastShakeAt = now;
              onShake();
            }
            shakePeaks = [];
          }
        } else {
          shakePeaks = shakePeaks.filter((time) => now - time <= 1000);
        }
      }
      previousMotion = current;
    };
    window.addEventListener("devicemotion", motionHandler);
  }
  function startShake(onDetected, canTrigger) {
    onShake = typeof onDetected === "function" ? onDetected : () => {};
    canShake = typeof canTrigger === "function" ? canTrigger : () => true;
    if (!motionSupported()) return false;
    const eventType = window.DeviceMotionEvent;
    if (typeof eventType.requestPermission !== "function") {
      attachMotion(onShake, canShake);
      return true;
    }
    if (permissionGestureHandler) return false;
    permissionGestureHandler = () => {
      permissionGestureHandler = null;
      void eventType.requestPermission()
        .then((permission) => {
          if (permission === "granted") attachMotion(onShake, canShake);
        })
        .catch(() => {});
    };
    window.addEventListener("pointerdown", permissionGestureHandler, { once: true, passive: true });
    return false;
  }
  function deviceInfo() {
    const ua = navigator.userAgent || "",
      browserMatch =
        /(SamsungBrowser|EdgiOS|Edg|OPiOS|OPR|FxiOS|Firefox|CriOS|Chrome|Version)\/([\d.]+)/i.exec(ua),
      browserName =
        /SamsungBrowser/i.test(ua) ? "Samsung Internet" :
            /EdgiOS|Edg\//i.test(ua) ? "Edge" :
              /OPiOS|OPR\//i.test(ua) ? "Opera" :
                /FxiOS|Firefox\//i.test(ua) ? "Firefox" :
                  /CriOS|Chrome\//i.test(ua) ? "Chrome" :
                  /Safari\//i.test(ua) ? "Safari" : "Unknown browser",
      browserVersion = browserMatch ? browserMatch[2] : "",
      isIPad = /iPad/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1),
      operatingSystem =
        /Android/i.test(ua) ? "Android" :
            /iPhone|iPad|iPod/i.test(ua) || isIPad ? "iOS" :
            /Windows/i.test(ua) ? "Windows" :
              /Mac OS X|Macintosh/i.test(ua) ? "macOS" :
                /Linux/i.test(ua) ? "Linux" : "Unknown",
      deviceType = isIPad || /Tablet/i.test(ua) ? "tablet" : /Mobi|Android/i.test(ua) ? "mobile" : "desktop";
    return {
      browser: browserName + (browserVersion ? " " + browserVersion : ""),
      operating_system: operatingSystem,
      device_type: deviceType,
    };
  }

  window.CoconutBugReports = {
    deviceInfo,
    clearRecentErrors,
    isMotionSupported: motionSupported,
    recentErrors,
    startShake,
    setUserScope,
  };
})();
