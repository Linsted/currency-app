import useSWR from "swr";

import styles from "./Main.module.css";
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
import NotFound from "../NotFound";
import {
  getErrorSelector,
  setErrorSelector,
  getCurrenciesSelector,
  setCurrenciesSelector,
} from "../../store/currencies/selectors";
import Chart from "../Chart";

export default function Main() {
  const setCurrencies = useCurrenciesStore(setCurrenciesSelector);
  const setError = useCurrenciesStore(setErrorSelector);
  const currencies = useCurrenciesStore(getCurrenciesSelector);
  const isError = useCurrenciesStore(getErrorSelector);

  const increaseCounter = useCounterStore(increaseCounterSelector);
  const resetCounter = useCounterStore(resetCounterSelector);
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

  // console.log(counter);
  console.log(currencies);

  if (isLoading) {
    return <div>LOADING</div>;
  }
  return (
    <main className={styles.main}>
      {isError ? <NotFound /> : <Chart currencies={currencies} />}
    </main>
  );
}
