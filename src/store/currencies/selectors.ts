import { CurrenciesStore } from "../../types";

export const getErrorSelector = (state: CurrenciesStore) => state.isError;

export const setErrorSelector = (state: CurrenciesStore) => state.setError;

export const getCurrenciesSelector = (state: CurrenciesStore) =>
  state.currencies;

export const setCurrenciesSelector = (state: CurrenciesStore) =>
  state.setCurrencies;
