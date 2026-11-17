const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const DAY = 864e5;
const months = Array.from({ length: 12 }, (_, i) => `M${i + 1}`);
const context = {
  DAY,
  SEASON: { amp: 0.1, peak: 4.5 },
  pd: (date) => Date.parse(`${date}T00:00:00Z`),
  mean: (values) => (values.length ? values.reduce((total, value) => total + value, 0) / values.length : 0),
  sum: (values) => values.reduce((total, value) => total + value, 0),
  sd: (values) => {
    const average = values.reduce((total, value) => total + value, 0) / values.length;
    return Math.sqrt(values.reduce((total, value) => total + (value - average) ** 2, 0) / (values.length - 1));
  },
  ewma: (values, alpha) => values.reduce((level, value, i) => (i ? alpha * value + (1 - alpha) * level : value), 0),
  state: { shares: 2, transRate: 0 },
  CATS: ["transport"],
  customDedTotal: () => 0,
  todayMs: () => Date.UTC(2026, 10, 17),
  MONS: { en: months },
  MONLS: { en: months },
  lang: "en",
};
const source = fs.readFileSync(path.join(__dirname, "..", "web", "app.js"), "utf8");
const start = source.indexOf("/* ---------- forecast models ----------");
const end = source.indexOf("/* ---------- charts ----------", start);
assert.ok(start >= 0 && end > start, "forecast model section is available");
vm.createContext(context);
vm.runInContext(
  source.slice(start, end) + "\nthis.forecastModels = { yieldModel, priceModel, forecast };",
  context,
);
const { yieldModel, priceModel, forecast } = context.forecastModels;

function harvestsWithIrregularGaps(gaps, startDate) {
  let date = startDate;
  const rows = [
    {
      date: new Date(date).toISOString().slice(0, 10),
      gap: null,
      total: 0,
      loaded: 0,
      price: 1000,
      dv: { transport: 0 },
      shareDeds: [0, 0],
      shareAdds: [0, 0],
    },
  ];
  for (const gap of gaps) {
    date += gap * DAY;
    const total = gap * 100,
      elapsedDays = (date - startDate) / DAY;
    rows.push({
      date: new Date(date).toISOString().slice(0, 10),
      gap,
      total,
      loaded: total * 0.8,
      price: 1000 + elapsedDays * 0.5,
      dv: { transport: 0 },
      shareDeds: [0, 0],
      shareAdds: [0, 0],
    });
  }
  return rows;
}

const gaps = [30, 60, 120, 45, 90, 30, 150, 60, 75];

test("yield forecasts use elapsed days across irregular and missing-month records", () => {
  const rows = harvestsWithIrregularGaps(gaps, Date.UTC(2025, 0, 1)),
    last = context.pd(rows[rows.length - 1].date),
    dailyYield = yieldModel(rows).at(last, last + 90 * DAY) / 90;
  assert.ok(Math.abs(dailyYield - 100) < 10, `expected about 100 coconuts/day, got ${dailyYield}`);
});

test("price ranges stay finite across longer calendar horizons", () => {
  const rows = harvestsWithIrregularGaps(gaps, Date.UTC(2025, 0, 1)),
    last = context.pd(rows[rows.length - 1].date),
    estimate = priceModel(rows).at(last + 120 * DAY);
  assert.ok(Number.isFinite(estimate.p) && estimate.p > 0);
  assert.ok(estimate.lo <= estimate.p && estimate.p <= estimate.hi);
});

test("stale records forecast the next date after today and flag long gaps", () => {
  const rows = harvestsWithIrregularGaps(gaps, Date.UTC(2024, 0, 1)),
    result = forecast(rows);
  assert.ok(result.steps[0].date > context.todayMs());
  assert.equal(result.longGap, true);
});
