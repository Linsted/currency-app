import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <img src="/error.png" alt="Not found" />
      <h4>Sorry, Mate. Try again later!</h4>
    </div>
  );
}
