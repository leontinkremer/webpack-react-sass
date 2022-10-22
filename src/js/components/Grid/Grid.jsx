import React from "react";
import PropTypes from "prop-types";
import "./_layout.scss";

const Grid = ({ children }) => {
  return (
    <>
      <div className="row">
        {children}
        {/* /*
        <div className="col-1-of-1">col-1-of-1 </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">col-1-of-2 </div>
        <div className="col-1-of-2">col-1-of-2 </div>
      </div>
      <div className="row">
        <div className="col-1-of-3">col-1-of-3 </div>
        <div className="col-1-of-3">col-1-of-3 </div>
        <div className="col-1-of-3">col-1-of-3 </div>
      </div>
      <div className="row">
        <div className="col-1-of-3">col-1-of-3 </div>
        <div className="col-2-of-3">col-2-of-3 </div>
      </div>
      <div className="row">
        <div className="col-1-of-4">col-1-of-4 </div>
        <div className="col-1-of-4">col-1-of-4 </div>
        <div className="col-1-of-4">col-1-of-4 </div>
        <div className="col-1-of-4">col-1-of-4 </div>
      </div>
      <div className="row">
        <div className="col-1-of-6">col-1-of-6 </div>
        <div className="col-1-of-6">col-1-of-6 </div>
        <div className="col-1-of-6">col-1-of-6 </div>
        <div className="col-1-of-6">col-1-of-6 </div>
        <div className="col-1-of-6">col-1-of-6 </div>
        <div className="col-1-of-6">col-1-of-6 </div>
      </div>
      <div className="row">
        <div className="col-1-of-6">col-1-of-6 </div>
        <div className="col-4-of-6">col-4-of-6 </div>
        <div className="col-1-of-6">col-1-of-6 </div>
      </div>
      <div className="row">
        <div className="col-1-of-12">col-1-of-12 </div>
        <div className="col-1-of-12">col-1-of-12 </div>
        <div className="col-1-of-12">col-1-of-12 </div>
        <div className="col-1-of-12">col-1-of-12 </div>
        <div className="col-1-of-12">col-1-of-12 </div>
        <div className="col-1-of-12">col-1-of-12 </div>
        <div className="col-1-of-12">col-1-of-12 </div>
        <div className="col-1-of-12">col-1-of-12 </div>
        <div className="col-1-of-12">col-1-of-12 </div>
        <div className="col-1-of-12">col-1-of-12 </div>
        <div className="col-1-of-12">col-1-of-12 </div>
        <div className="col-1-of-12">col-1-of-12 </div> */}
      </div>
    </>
  );
};
Grid.propTypes = {};

Grid.defaultProps = {};

export default Grid;
