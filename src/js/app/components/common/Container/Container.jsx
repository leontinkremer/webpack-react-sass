import React from "react";
import style from "./_layout.module.scss";
import PropTypes from "prop-types";

const Container = ({ maxWidth, children }) => {
  const { container } = style;

  let cumulativeStyles = `${container}`;

  if (maxWidth === "true") {
    cumulativeStyles += ` ${maxWidth}`;
  }
  return <div className={cumulativeStyles}> {children} </div>;
};

Container.propTypes = {
  maxWidth: PropTypes.oneOf(["true", "false"]),
};

Container.defaultProps = {
  maxWidth: "false",
};

export default Container;
