import React from "react";
import style from "./_layout.module.scss";
import PropTypes from "prop-types";

const Row = ({ children, maxWidth }) => {
  const { row } = style;

  let cumulativeStyles = `${row}`;

  return (
    <section className={cumulativeStyles} style={{ maxWidth: maxWidth }}>
      {children}
    </section>
  );
};

Row.propTypes = {
  maxWidth: PropTypes.string,
};

Row.defaultProps = {
  maxWidth: "1200px",
};

export default Row;
