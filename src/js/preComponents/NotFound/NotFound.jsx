import React from "react";
import PropTypes from "prop-types";
import "./_layout.scss";

const NotFound = () => {
  return <h1>Такой страницы не существует</h1>;
};

NotFound.propTypes = {
  buttonType: PropTypes.string,
};

NotFound.defaultProps = {
  buttonType: "primary",
};

export default NotFound;
