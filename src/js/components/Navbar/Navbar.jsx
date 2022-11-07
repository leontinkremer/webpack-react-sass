import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NavigationLogo from "../../components/NavigationLogo";
import Navigation from "../../components/Navigation";
import "./_layout.scss";

import * as breackpoints from "../../settings/settings";
import Icon from "../Icon";
import Modal from "../Modal";
console.log(breackpoints.xl);

const Navbar = ({ backgroundColor, height }) => {
  const [smartphone, setSmartphone] = useState(false);
  const [tablet, setTablet] = useState(false);
  const [notebook, setNotebook] = useState(false);
  const [desktop, setDesktop] = useState(false);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showMobileNavMenue, setShowMobileNavMenue] = useState(false);
  console.log("showMobileNavMenue", showMobileNavMenue);

  useEffect(() => {
    const handleResize = () => {
      setSmartphone(false);
      setTablet(false);
      setNotebook(false);
      setDesktop(false);

      window.innerWidth <= breackpoints.sm ? setSmartphone(true) : null;
      window.innerWidth >= breackpoints.sm &&
      window.innerWidth <= breackpoints.lg
        ? setTablet(true)
        : null;
      window.innerWidth >= breackpoints.lg &&
      window.innerWidth <= breackpoints.xl
        ? setNotebook(true)
        : null;
      window.innerWidth >= breackpoints.xl ? setDesktop(true) : null;
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNaviconClick = () => {
    console.log("nav clicked");
    showMobileNavMenue
      ? setShowMobileNavMenue(false)
      : setShowMobileNavMenue(true);
  };

  const handleCloseIconClick = () => {
    console.log("clicked on close icon");
    setShowMobileNavMenue(false);
  };

  return (
    <>
      <div
        className={
          "navbar" +
          (backgroundColor === "$primary-color"
            ? ` u-background-color-primary-color-regular`
            : "") +
          (height === "xxs" ? ` u-height__xxs` : "") +
          (height === "xs" ? ` u-height__xs` : "") +
          (height === "sm" ? ` u-height__sm` : "") +
          (height === "md" ? ` u-height__md` : "") +
          (height === "lg" ? ` u-height__lg` : "") +
          (height === "xl" ? ` u-height__xl` : "") +
          (height === "xxl" ? ` u-height__xxl` : "")
        }
      >
        <div className="navbar__inner">
          {tablet || notebook || desktop ? (
            <NavigationLogo height="sm" float="right" />
          ) : null}
          {smartphone || tablet ? (
            <Icon
              iconClass="bi-list"
              handleClick={handleNaviconClick}
              position="icon--right"
            />
          ) : (
            <Navigation />
          )}
          {showMobileNavMenue ? (
            <Modal handleIconClick={handleCloseIconClick}>
              <Navigation />
            </Modal>
          ) : null}
        </div>
      </div>
    </>
  );
};
Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
