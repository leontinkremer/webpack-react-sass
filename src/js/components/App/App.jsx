import React from "react";
import logo from "./logo.png";
import styles from "./_App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src={logo} className={styles.Logo} alt="logo" />
        <p className={styles.Title}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.Link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
