import capitalize from "./capitalize";

it("check all lowercase", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});
it("check for random cased", () => {
  expect(capitalize("it Is just A teSt")).toBe("It is just a test");
});
