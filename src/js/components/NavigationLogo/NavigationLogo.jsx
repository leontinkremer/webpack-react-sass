import React from "react";
import PropTypes from "prop-types";
import "./_layout.scss";
import logo from "../../../images/logo.png";

const NavigationLogo = ({ height }) => {
  return (
    <img
      className={
        "navigation-logo" +
        (height === "xxs" ? ` u-height__xxs` : "") +
        (height === "xs" ? ` u-height__xs` : "") +
        (height === "sm" ? ` u-height__sm` : "") +
        (height === "md" ? ` u-height__md` : "") +
        (height === "lg" ? ` u-height__lg` : "") +
        (height === "xl" ? ` u-height__xl` : "") +
        (height === "xxl" ? ` u-height__xxl` : "")
      }
      src={logo}
      alt="Website-Logo"
    />
  );
};

NavigationLogo.propTypes = {};

NavigationLogo.defaultProps = {};

export default NavigationLogo;
