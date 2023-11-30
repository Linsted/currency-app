import { create } from "zustand";

import { CurrenciesStore, UpdateCurrency } from "../../types";

export const useCurrenciesStore = create<CurrenciesStore>()((set) => ({
  currencies: [],
  isLoading: false,
  isError: false,

  setCurrencies: (currencies) => {
    set((state) => ({
      ...state,
      currencies: currencies,
      isError: false,
      isLoading: false,
    }));
  },

  setError: () => {
    set((state) => ({ ...state, isError: true, isLoading: false }));
  },

  updateCurrency: (dataToUpdate: UpdateCurrency) => {
    set((state) => ({
      ...state,
      currencies: state.currencies.map((item) => {
        if (dataToUpdate.ccy === item.ccy) {
          return { ...item, [dataToUpdate.valueToEdit]: dataToUpdate.newData };
        }
        return item;
      }),
    }));
  },
}));
