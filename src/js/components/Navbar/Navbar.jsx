import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "../../components/Grid";
import GridCol from "../../components//GridCol";
import NavigationLogo from "../../components/NavigationLogo";
import Navigation from "../../components/Navigation";
import "./_layout.scss";

import * as breackpoints from "../../settings/settings";
console.log(breackpoints.xl);

const Navbar = ({ backgroundColor }) => {
  const [smartphone, setSmartphone] = useState(false);
  const [tablet, setTablet] = useState(false);
  const [notebook, setNotebook] = useState(false);
  const [desktop, setDesktop] = useState(false);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showMobileNavMenue, setShowMobileNavMenue] = useState(false);

  useEffect(() => {
    setSmartphone(false);
    setTablet(false);
    setNotebook(false);
    setDesktop(false);

    window.innerWidth <= breackpoints.sm ? setSmartphone(true) : null;

    window.innerWidth >= breackpoints.sm && window.innerWidth <= breackpoints.lg
      ? setTablet(true)
      : null;

    window.innerWidth >= breackpoints.lg && window.innerWidth <= breackpoints.xl
      ? setNotebook(true)
      : null;

    window.innerWidth >= breackpoints.xl ? setDesktop(true) : null;
  }, []);
  return (
    <>
      <div
        className={
          "navbar" +
          (backgroundColor === "$primary-color"
            ? ` u-background-color__primary-color-regular`
            : "")
        }
      >
        <Grid>
          {notebook || desktop ? <GridCol col="col-1-of-6"></GridCol> : null}
          <GridCol col="col-4-of-6" height="md">
            {notebook || desktop ? <NavigationLogo height="sm" /> : null}

            <Navigation />
          </GridCol>
          {notebook || desktop ? <GridCol col="col-1-of-6"></GridCol> : null}
        </Grid>
      </div>
    </>
  );
};
Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
