import React from "react";
import PropTypes from "prop-types";
import "./_layout.scss";

const Navbar = ({ children, backgroundColor }) => {
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
        {children}
      </div>
    </>
  );
};
Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
