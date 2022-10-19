import React from "react";

import Button from "../../components/Button";
import styles from "./_App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Button marginRight="xs">Ausführen</Button>
      <Button buttonType="secondary">Abbrechen</Button>
    </div>
  );
}

export default App;
