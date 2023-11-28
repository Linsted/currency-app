import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
