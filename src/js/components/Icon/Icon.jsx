import React from "react";
import PropTypes from "prop-types";
import "./_layout.scss";

const Icon = ({ iconClass, iconColor, position, handleClick }) => {
  return (
    <i
      className={` icon bi ${iconClass} u-font-color-${iconColor} ${position}`}
      onClick={() => handleClick()}
    ></i>
  );
};

Icon.propTypes = {};

Icon.defaultProps = {
  iconClass: "bi-image",
  iconColor: "soft-neutral-color-0",
};

export default Icon;
