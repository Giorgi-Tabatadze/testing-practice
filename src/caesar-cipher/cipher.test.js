import caesarCipher from "./cipher";

it("check cypher for normal flow", () => {
  expect(caesarCipher.encript("Attack Paris", 2)).toBe("Cvvcem Rctku");
});

it("check cypher for Z to A and non letter", () => {
  expect(caesarCipher.encript("Attack this Zone 2", 6)).toBe(
    "Gzzgiq znoy Futk 2"
  );
});
