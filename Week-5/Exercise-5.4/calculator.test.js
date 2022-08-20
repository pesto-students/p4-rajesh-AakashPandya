const mathOperations = require("./calculator");

describe("Calculator tests", () => {
  test("adding 4 and 5 should return 9", () => {
    const result = mathOperations.sum(4, 5);
    expect(result).toBe(9);
  });

  test("adding -4 and 5 should return 1", () => {
    const result = mathOperations.sum(-4, 5);
    expect(result).toBe(1);
  });

  test("subtracting 2 from 10 should return 8", () => {
    const result = mathOperations.diff(10, 2);

    expect(result).toBe(8);
  });

  test("subtracting -2 from 10 should return 12", () => {
    const result = mathOperations.diff(10, -2);

    expect(result).toBe(12);
  });

  test("multiplying 2 and 8 should return 16", () => {
    const result = mathOperations.product(2, 8);

    expect(result).toBe(16);
  });
});
