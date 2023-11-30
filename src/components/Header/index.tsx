import { MdCurrencyExchange } from "react-icons/md";

import styles from "./Header.module.css";
import { LOGO_TEXT } from "./constants";

export default function Header() {
  return (
    <header className={styles.header}>
      <MdCurrencyExchange />
      <span>{LOGO_TEXT}</span>
    </header>
  );
}
