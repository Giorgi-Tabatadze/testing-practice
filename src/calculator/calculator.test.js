import calculator from "./calculator";

it("add numbers", () => {
  expect(calculator.add(3.3, 4.5)).toBeCloseTo(7.8);
});

it("Check for non-numbers", () => {
  expect(() => calculator.add("3", 4)).toThrow("You must provide a number");
});

it("check for undefined", () => {
  expect(() => calculator.add()).toThrow("You must provide a number");
});

it("Substract numbers", () => {
  expect(calculator.substract(7, 3)).toBeCloseTo(4);
});

it("Substract string and number", () => {
  expect(() => calculator.substract("3", 4)).toThrow(
    "You must provide a number"
  );
});

it("Subscract undifined", () => {
  expect(() => calculator.substract()).toThrow("You must provide a number");
});

it("multiply numbers", () => {
  expect(calculator.multiply(7, 3)).toBeCloseTo(21);
});

it("miltiply string and number", () => {
  expect(() => calculator.multiply("3", 4)).toThrow(
    "You must provide a number"
  );
});

it("multiply undifined", () => {
  expect(() => calculator.multiply()).toThrow("You must provide a number");
});

it("divide numbers", () => {
  expect(calculator.divide(15, 3)).toBeCloseTo(5);
});

it("divide string and number", () => {
  expect(() => calculator.divide("3", 4)).toThrow("You must provide a number");
});

it("divide undifined", () => {
  expect(() => calculator.divide()).toThrow("You must provide a number");
});
