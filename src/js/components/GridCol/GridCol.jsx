import React from "react";
import PropTypes from "prop-types";
import "./_layout.scss";

const GridCol = ({ children, col, height }) => {
  console.log(height);
  return (
    <div
      className={
        col +
        (height === "xxs" ? ` u-height__xxs` : "") +
        (height === "xs" ? ` u-height__xs` : "") +
        (height === "sm" ? ` u-height__sm` : "") +
        (height === "md" ? ` u-height__md` : "") +
        (height === "lg" ? ` u-height__lg` : "") +
        (height === "xl" ? ` u-height__xl` : "") +
        (height === "xxl" ? ` u-height__xxl` : "")
      }
    >
      {children}
    </div>
  );
};
GridCol.propTypes = {};

GridCol.defaultProps = {};

export default GridCol;
