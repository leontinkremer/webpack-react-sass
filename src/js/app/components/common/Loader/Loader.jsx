import React from "react";
import "./_layout.scss";
import PropTypes from "prop-types";
import Container from "../Container";

const Loader = () => {
  return (
    <Container>
      <div className="lds-dual-ring"></div>
    </Container>
  );
};

export default Loader;
