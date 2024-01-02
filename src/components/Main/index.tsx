import { Toaster } from "react-hot-toast";
import { ThreeCircles } from "react-loader-spinner";

import styles from "./Main.module.css";
import useMain from "./useMain";

import NotFound from "../NotFound";
import Chart from "../Chart";
import Converter from "../Converter";

export default function Main() {
  const { isLoading, isError } = useMain();

  if (isLoading) {
    return (
      <div className={styles.loaderWrapper}>
        <ThreeCircles height="100" width="100" color="#0d6efd" visible={true} />
      </div>
    );
  }

  return (
    <main className={styles.main}>
      {isError ? <NotFound /> : <Chart />}
      <Converter />
      <div>
        <Toaster />
      </div>
    </main>
  );
}
