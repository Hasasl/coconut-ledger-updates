const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "web", "app.js"), "utf8");
const start = source.indexOf("function validIsoDate(date) {");
const end = source.indexOf("function splitRow(line) {", start);
assert.ok(start >= 0 && end > start, "backup validation functions are available");

let nextId = 0;
const context = {
  CATS: ["harvest", "cart", "transport"],
  blank: (value) => value == null || value === "",
  t: (key) => key,
  uid: () => `preset-${++nextId}`,
};
vm.createContext(context);
vm.runInContext(source.slice(start, end) + "\nthis.validateFullBackup = validateFullBackup;", context);

function validBackup() {
  return {
    harvests: [{ date: "2026-11-17", total: 10, price: 5, ded: {} }],
    otherIncome: [],
    monthPayouts: { "2026-11": [0, 1] },
    reviewedMonths: ["2026-11"],
    deductionPresets: [{ name: "Basic", ded: {}, customDeds: [], shareDeds: [], roundingAdjustment: 0 }],
  };
}

test("validates month payouts even when harvests omit payments", () => {
  const backup = validBackup();
  backup.monthPayouts["2026-11"] = [-1];
  assert.throws(() => context.validateFullBackup(backup), /i_bad/);
});

test("validates reviewed months and deduction presets without harvest payments", () => {
  const invalidMonth = validBackup();
  invalidMonth.reviewedMonths = ["not-a-month"];
  assert.throws(() => context.validateFullBackup(invalidMonth), /i_bad/);

  const invalidPreset = validBackup();
  invalidPreset.deductionPresets[0].name = " ";
  assert.throws(() => context.validateFullBackup(invalidPreset), /i_bad/);
});

test("valid backup without harvest payments still receives preset IDs", () => {
  const backup = validBackup();
  const result = context.validateFullBackup(backup);
  assert.equal(result.count, 1);
  assert.equal(result.replace.deductionPresets[0].id, "preset-1");
});
