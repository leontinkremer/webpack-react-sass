import React from "react";

import Grid from "../../components/Grid";
import GridCol from "../../components/GridCol";
import Navbar from "../../components/Navbar";
import styles from "./_App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Grid>
        <GridCol col="col-1-of-1">
          <Navbar>Navbar</Navbar>
        </GridCol>
      </Grid>
    </div>
  );
}

export default App;
