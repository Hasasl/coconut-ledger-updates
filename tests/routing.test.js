const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "web", "app.js"), "utf8");
const defaultRouteSource = source.match(/function defaultEstateRoute\(\) \{[\s\S]*?\n\}/)?.[0];
const deviceMergeSources = [
  source.match(/function canonicalValue\(value\) \{[\s\S]*?\n\}/)?.[0],
  source.match(/const stableJson = .*?;/)?.[0],
  source.match(/function estatePayload\(row\) \{[\s\S]*?\n\}/)?.[0],
  source.match(/function planDeviceLedgerMerge\(deviceRecords, remoteRows, existingConflicts\) \{[\s\S]*?\n\}/)?.[0],
];

function defaultRoute(activeEstateId, accessReady, role) {
  const context = {
    activeEstateId,
    accessReady,
    estateSyncState: { active: role ? { role } : null },
  };
  vm.runInNewContext(`${defaultRouteSource}; this.defaultEstateRoute = defaultEstateRoute;`, context);
  return context.defaultEstateRoute();
}

function planDeviceMerge(deviceRecords, remoteRows, existingConflicts) {
  const context = {};
  vm.runInNewContext(
    `${deviceMergeSources.join("\n")}; this.planDeviceLedgerMerge = planDeviceLedgerMerge;`,
    context,
  );
  return JSON.parse(
    JSON.stringify(context.planDeviceLedgerMerge(deviceRecords, remoteRows, existingConflicts)),
  );
}

test("estate landing route is role-aware and cold start defaults to Overview", () => {
  assert.equal(defaultRoute("", true, null), "overview");
  assert.equal(defaultRoute("estate-1", false, null), "months");
  assert.equal(defaultRoute("estate-1", true, "owner"), "overview");
  assert.equal(defaultRoute("estate-1", true, "manager"), "overview");
  assert.equal(defaultRoute("estate-1", true, "member_1"), "months");
  assert.match(source, /route = "overview";\s*if \(location\.hash !== "#overview"\)/);

  const activation = source.match(/async function activateEstate[\s\S]*?\n\}/)?.[0];
  assert.ok(activation);
  assert.doesNotMatch(activation, /go\("months"\)/);
  assert.match(activation, /await refreshEstatePanel\(\);\s*go\(defaultEstateRoute\(\)\);/);
});

test("device ledger merge stages only changed local records and preserves cloud conflicts", () => {
  const plan = planDeviceMerge(
    new Map([
      ["harvest:new", { payload: { id: "new", total: 8 } }],
      ["harvest:shared", { payload: { id: "shared", total: 5 } }],
      ["harvest:unchanged", { payload: { id: "unchanged", total: 3 } }],
      ["harvest:pending", { payload: { id: "pending", total: 9 } }],
    ]),
    [
      { record_type: "harvest", record_id: "shared", payload: { id: "shared", total: 4 }, revision: 5 },
      { record_type: "harvest", record_id: "unchanged", payload: { id: "unchanged", total: 3 }, revision: 2 },
      { record_type: "harvest", record_id: "cloud-only", payload: { id: "cloud-only", total: 6 }, revision: 1 },
    ],
    [
      {
        key: "harvest:pending",
        recordType: "harvest",
        recordId: "pending",
        localPayload: { id: "pending", total: 7 },
        remotePayload: { id: "pending", total: 6 },
        remoteRevision: 3,
      },
    ],
  );
  assert.deepEqual(
    plan.staged.map(({ recordId }) => recordId),
    ["new", "shared"],
  );
  assert.deepEqual(
    plan.conflicts.map(({ key, localPayload, remotePayload }) => ({
      key,
      localTotal: localPayload.total,
      remoteTotal: remotePayload.total,
    })),
    [
      { key: "harvest:pending", localTotal: 7, remoteTotal: 6 },
      { key: "harvest:shared", localTotal: 5, remoteTotal: 4 },
    ],
  );
});
