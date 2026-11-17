const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "web", "app.js"), "utf8");
const defaultRouteSource = source.match(/function defaultEstateRoute\(\) \{[\s\S]*?\n\}/)?.[0];

function defaultRoute(activeEstateId, accessReady, role) {
  const context = {
    activeEstateId,
    accessReady,
    estateSyncState: { active: role ? { role } : null },
  };
  vm.runInNewContext(`${defaultRouteSource}; this.defaultEstateRoute = defaultEstateRoute;`, context);
  return context.defaultEstateRoute();
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
