import { COUNTER_LOCAL_STORAGE_KEY } from "../constants";

type CheckIsDataValid = {
  initialNumber: string;
  newNumber: string;
};

type GetExchangeRate = {
  firstCurrencyRate: string;
  secondCurrencyRate: string;
};

type ConvertCurrency = {
  amount: string;
  exchangeRate: number;
};

const resetLocalStore = () => {
  localStorage.removeItem(COUNTER_LOCAL_STORAGE_KEY);
};

export const checkError = (counter: number): boolean => {
  if (counter === 5) {
    resetLocalStore();
    return true;
  }

  return false;
};

export const checkIsDataValid = ({
  initialNumber,
  newNumber,
}: CheckIsDataValid): boolean => {
  const numericalNewNumber = Number(newNumber);

  const diffPercentage =
    Math.abs(
      (Number(newNumber) - Number(initialNumber)) / Number(initialNumber)
    ) * 100;

  if (diffPercentage > 10 || Number.isNaN(numericalNewNumber)) {
    return false;
  }

  return true;
};

export const getExchangeRate = ({
  firstCurrencyRate,
  secondCurrencyRate,
}: GetExchangeRate): number => {
  const exchangeRate = Number(firstCurrencyRate) / Number(secondCurrencyRate);

  return exchangeRate;
};

export const convertCurrency = ({
  amount,
  exchangeRate,
}: ConvertCurrency): string | null => {
  const numericAmount = Number(amount);

  if (
    Number.isNaN(numericAmount) ||
    Number.isNaN(exchangeRate) ||
    numericAmount < 0 ||
    exchangeRate <= 0
  ) {
    return null;
  }

  const convertedAmount = numericAmount * exchangeRate;

  return convertedAmount.toFixed(2);
};
