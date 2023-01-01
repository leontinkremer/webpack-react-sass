import React from "react";
import style from "./_layout.module.scss";
import PropTypes from "prop-types";

const Statistics = () => {
  const { section } = style;

  return (
    <div className={section}>
      <p>Statistics Component</p>
    </div>
  );
};

export default Statistics;
