import analyzeArray from "./analyzeArray";

it("analyze average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBeCloseTo(4);
});

it("analyze min", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

it("analyze max", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

it("analyze length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveLength(6);
});
