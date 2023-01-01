import React from "react";
import style from "./_layout.module.scss";
import PropTypes from "prop-types";

const Button = ({ actionType, marginRight, children, mobileFullWidth }) => {
  let cumulativeStyles = `${style.button}`;

  if (actionType === "primary") {
    cumulativeStyles += ` ${style.primary}`;
  }

  if (actionType === "secondary") {
    cumulativeStyles += ` ${style.secondary}`;
  }

  if (marginRight === "true") {
    cumulativeStyles += ` ${style.marginRight}`;
  }

  if (mobileFullWidth === "true") {
    cumulativeStyles += ` ${style.mobileFullWidth}`;
  }

  return <button className={cumulativeStyles}>{children}</button>;
};

Button.propTypes = {
  actionType: PropTypes.oneOf(["primary", "secondary"]),
  marginRight: PropTypes.oneOf(["true", "false"]),
  mobileFullWidth: PropTypes.oneOf(["true", "false"]),
};

Button.defaultProps = {
  actionType: "primary",
  marginRight: "false",
  mobileFullWidth: "false",
};

export default Button;
