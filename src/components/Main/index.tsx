import useSWR from "swr";
import { Toaster } from "react-hot-toast";
import { ThreeCircles } from "react-loader-spinner";

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
import Converter from "../Converter";

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

  if (isLoading) {
    return (
      <div className={styles.loaderWrapper}>
        <ThreeCircles height="100" width="100" color="#0d6efd" visible={true} />
      </div>
    );
  }

  return (
    <main className={styles.main}>
      {isError ? <NotFound /> : <Chart currencies={currencies} />}
      <Converter currencies={currencies} />
      <div>
        <Toaster />
      </div>
    </main>
  );
}
