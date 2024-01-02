import styles from "./Converter.module.css";
import ConverterForm from "../ConverterForm";

export default function Converter() {
  return (
    <section className={styles.section}>
      <ConverterForm />
    </section>
  );
}
