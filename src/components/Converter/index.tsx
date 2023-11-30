import styles from "./Converter.module.css";
import ConverterForm from "../ConverterForm";

import { CurrencyExchangeRate } from "../../types";

type ConverterProps = { currencies: CurrencyExchangeRate[] };

export default function Converter({ currencies }: ConverterProps) {
  return (
    <section className={styles.section}>
      <ConverterForm currencies={currencies} />
    </section>
  );
}
