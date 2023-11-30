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

export type UpdateCurrency = {
  ccy: string;
  valueToEdit: string;
  newData: string;
};

export type CurrenciesStore = {
  currencies: CurrencyExchangeRate[];
  isLoading: boolean;
  isError: boolean;
  setCurrencies: (currencies: CurrencyExchangeRate[]) => void;
  setError: () => void;
  updateCurrency: (dataToUpdate: UpdateCurrency) => void;
};

export type DataToEdit = {
  ccy: string;
  valueToEdit: string;
};

export enum BUTTON_TYPE {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}
