import React from "react";
import PropTypes from "prop-types";
import "./_layout.scss";

const GridCol = ({ children, col }) => {
  return <div className={col}>{children}</div>;
};
GridCol.propTypes = {};

GridCol.defaultProps = {};

export default GridCol;
