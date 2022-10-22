import React from "react";

import Button from "../Button";
import Grid from "../Grid";
import styles from "./_App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Grid />
      <Button marginRight="xs">Ausführen</Button>
      <Button buttonType="secondary">Abbrechen</Button>
    </div>
  );
}

export default App;
