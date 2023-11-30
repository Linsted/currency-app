import styles from "./NotFound.module.css";
import { ERROR_USER_MESSAGE } from "./constants";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <img src="/error.png" alt="Not found" />
      <b>{ERROR_USER_MESSAGE}</b>
    </div>
  );
}
