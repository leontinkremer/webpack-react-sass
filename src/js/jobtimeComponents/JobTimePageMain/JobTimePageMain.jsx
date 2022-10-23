import React from "react";
import PropTypes from "prop-types";
import "./_layout.scss";

import Navbar from "../../components/Navbar";
import Grid from "../../components/Grid";
import GridCol from "../../components//GridCol";

const JobTimePageMain = () => {
  return (
    <>
      <Navbar backgroundColor="$primary-color">
        <Grid>
          <GridCol col="col-1-of-6"></GridCol>
          <GridCol col="col-4-of-6" height="lg">
            Jobtimes
          </GridCol>
          <GridCol col="col-1-of-6"></GridCol>
        </Grid>
      </Navbar>
      <p>Hauptseite mit Registrierung</p>
    </>
  );
};

JobTimePageMain.propTypes = {};

JobTimePageMain.defaultProps = {};

export default JobTimePageMain;
