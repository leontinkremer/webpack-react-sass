import React from "react";
import PropTypes from "prop-types";
import "./_Button.scss";

function Button({ buttonType, marginRight, children }) {
  return (
    <>
      <button
        className={
          "button" +
          (buttonType === "primary" ? ` button__button--primary` : "") +
          (buttonType === "secondary" ? ` button__button-secondary` : "") +
          (marginRight === "xs" ? " u-margin-right-xs" : "")
        }
      >
        {children}
      </button>
    </>
  );
}

Button.propTypes = {
  buttonType: PropTypes.string,
};

Button.defaultProps = {
  buttonType: "primary",
};

export default Button;
