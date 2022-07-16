const calculator = {
  add: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("You must provide a number");
    }
    return a + b;
  },
  substract: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("You must provide a number");
    }
    return a - b;
  },
  divide: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("You must provide a number");
    }
    return a / b;
  },
  multiply: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("You must provide a number");
    }
    return a * b;
  },
};

export default calculator;
