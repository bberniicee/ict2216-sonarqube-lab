const calculator = require("../src/calculator");

describe("Calculator", () => {
  test("addition", () => {
    expect(calculator(2, 3, "add")).toBe(5);
  });

  test("subtraction", () => {
    expect(calculator(5, 3, "subtract")).toBe(2);
  });

  test("multiplication", () => {
    expect(calculator(4, 3, "multiply")).toBe(12);
  });

  test("division", () => {
    expect(calculator(15, 3, "divide")).toBe(5);
  });

  test("division by zero", () => {
    expect(() => calculator(5, 0, "divide")).toThrow("Division by zero");
  });

  test("invalid operation", () => {
    expect(() => calculator(5, 3, "invalid")).toThrow("Invalid operation");
  });
});
