import useSWR from "swr";

import { CURRENCIES_KEY } from "./constants";

import { useCurrenciesStore } from "../../store/currencies/useCurrenciesStore";

import { CurrencyExchangeRate } from "../../types";
import { fetchCurrencies } from "../../utils/facade/fetchCurrencies";
import { useCounterStore } from "../../store/counter/useCounterStore";
import {
  getCounterSelector,
  increaseCounterSelector,
  resetCounterSelector,
} from "../../store/counter/selectors";
import {
  getErrorSelector,
  setErrorSelector,
  getCurrenciesSelector,
  setCurrenciesSelector,
} from "../../store/currencies/selectors";

export default function useMain() {
  const setCurrencies = useCurrenciesStore(setCurrenciesSelector);
  const setError = useCurrenciesStore(setErrorSelector);
  const increaseCounter = useCounterStore(increaseCounterSelector);
  const resetCounter = useCounterStore(resetCounterSelector);

  const currencies = useCurrenciesStore(getCurrenciesSelector);
  const isError = useCurrenciesStore(getErrorSelector);
  const counter = useCounterStore(getCounterSelector);

  const successOptions = (data: CurrencyExchangeRate[]) => {
    setCurrencies(data);
    increaseCounter();
  };

  const errorOptions = () => {
    setError();
    resetCounter();
  };

  const fetcher = () => fetchCurrencies({ counter });

  const { isLoading } = useSWR(CURRENCIES_KEY, fetcher, {
    onSuccess: successOptions,
    onError: errorOptions,
  });

  return { isLoading, isError, currencies };
}
