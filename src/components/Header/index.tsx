import { MdCurrencyExchange } from "react-icons/md";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <MdCurrencyExchange />
      <span>YOUR EXCHANGE MATE</span>
    </header>
  );
}
