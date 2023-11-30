import { getExchangeRate, convertCurrency } from "..";

describe("getExchangeRate function", () => {
  test("calculates exchange rate correctly", () => {
    const result = getExchangeRate({
      firstCurrencyRate: "1.2",
      secondCurrencyRate: "0.8",
    });

    expect(result).toBe(1.4999999999999998);
  });

  test("handles invalid input", () => {
    const result = getExchangeRate({
      firstCurrencyRate: "invalid",
      secondCurrencyRate: "0.8",
    });

    expect(result).toBe(NaN);
  });
});

describe("convertCurrency function", () => {
  test("converts currency correctly", () => {
    const result = convertCurrency({
      amount: "100",
      exchangeRate: 1.5,
    });

    expect(result).toBe("150.00");
  });

  test("handles invalid input", () => {
    const result = convertCurrency({
      amount: "invalid",
      exchangeRate: 1.5,
    });

    expect(result).toBe(null);
  });

  test("handles negative amount", () => {
    const result = convertCurrency({
      amount: "-100",
      exchangeRate: 1.5,
    });

    expect(result).toBe(null);
  });

  test("handles zero amount or exchange rate", () => {
    const result1 = convertCurrency({
      amount: "0",
      exchangeRate: 1.5,
    });

    const result2 = convertCurrency({
      amount: "100",
      exchangeRate: 0,
    });

    expect(result1).toBe("0.00");
    expect(result2).toBe(null);
  });
});
