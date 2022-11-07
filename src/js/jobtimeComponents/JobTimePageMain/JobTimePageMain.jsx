import React from "react";
import PropTypes from "prop-types";
import "./_layout.scss";

import Navbar from "../../components/Navbar";

const JobTimePageMain = () => {
  return (
    <>
      <Navbar backgroundColor="$primary-color" />
      <p>Hauptseite mit Registrierung</p>
    </>
  );
};

JobTimePageMain.propTypes = {};

JobTimePageMain.defaultProps = {};

export default JobTimePageMain;
