import { create } from "zustand";

import { CurrenciesStore } from "../../types";

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
}));
