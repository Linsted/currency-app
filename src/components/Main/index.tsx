import useSWR from "swr";

import styles from "./Main.module.css";
import { fetchCurrencies } from "../../utils/facade/fetchCurrencies";

export default function Main() {
  const { data, error, isLoading } = useSWR("api/cur", fetchCurrencies);
  console.log(data);

  return <main className={styles.main}>Main</main>;
}
