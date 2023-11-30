import { checkIsDataValid } from "..";

describe("checkIsDataValid function", () => {
  test("returns true for valid data", () => {
    const result = checkIsDataValid({
      initialNumber: "10",
      newNumber: "11",
    });

    expect(result).toBe(true);
  });

  test("returns false for data exceeding 10% difference", () => {
    const result = checkIsDataValid({
      initialNumber: "10",
      newNumber: "13",
    });

    expect(result).toBe(false);
  });

  test("returns false for NaN in newNumber", () => {
    const result = checkIsDataValid({
      initialNumber: "10",
      newNumber: "invalid",
    });

    expect(result).toBe(false);
  });

  test("returns false for both NaN", () => {
    const result = checkIsDataValid({
      initialNumber: "invalid",
      newNumber: "invalid",
    });

    expect(result).toBe(false);
  });

  test("returns true for valid data with zero diffPercentage", () => {
    const result = checkIsDataValid({
      initialNumber: "10",
      newNumber: "10",
    });

    expect(result).toBe(true);
  });
});
