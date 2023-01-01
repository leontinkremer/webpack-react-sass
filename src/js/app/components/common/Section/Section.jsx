import React from "react";
import style from "./_layout.module.scss";
import PropTypes from "prop-types";

const Section = ({ children }) => {
  const { section } = style;

  return <section className={section}> {children} </section>;
};

export default Section;
