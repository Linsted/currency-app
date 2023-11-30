import styles from "./Footer.module.css";
import { FOOTER_TEXT } from "./constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        {currentYear} {FOOTER_TEXT}
      </p>
    </footer>
  );
}
