export type CurrencyExchangeRate = {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
};

export type CounterStore = {
  counter: number;
  increaseCounter: () => void;
  resetCounter: () => void;
};

export type CurrenciesStore = {
  currencies: CurrencyExchangeRate[];
  isLoading: boolean;
  isError: boolean;
  setCurrencies: (currencies: CurrencyExchangeRate[]) => void;
  setError: () => void;
};
