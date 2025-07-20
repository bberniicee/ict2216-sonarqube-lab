function calculator(a, b, operation) {
  if (operation === "add") {
    return a + b;
  } else if (operation === "subtract") {
    return a - b;
  } else if (operation === "multiply") {
    return a * b;
  } else if (operation === "divide") {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  } else {
    throw new Error("Invalid operation");
  }
}

module.exports = calculator;
