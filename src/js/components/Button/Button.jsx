import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./_layout.module.scss";

const Button = ({
  children,
  type,
  mainColor,
  fontColor,
  marginRight,
  handleClick,
  disabled,
}) => {
  const [buttonType, setButtontype] = useState(type);
  const [buttonMainColor, setButtonMainColor] = useState(mainColor);
  const [buttonFontColor, setButtonFontColor] = useState(fontColor);
  const [buttonMarginRight, setButtonMarginRight] = useState(marginRight);
  const [classList, setClassList] = useState("");

  useEffect(() => {
    // Set button type
    switch (buttonType) {
      case "secondary":
        setButtontype(styles.buttonButtonSecondary);
        break;

      case "tertiary":
        setButtontype(styles.buttonTertiary);
        break;

      default:
        setButtontype(styles.buttonPrimary);
        break;
    }

    // Set main color: start
    if (buttonType === "primary") {
      switch (buttonMainColor) {
        case "$secondary-color-regular":
          setButtonMainColor("u-background-color-secondary-color-regular");
          break;

        case "$tertiary-color-regular":
          setButtonMainColor("u-background-color-tertiary-color-regular");
          break;

        default:
          setButtonMainColor("u-background-color-primary-color-regular");
          break;
      }
    }

    if (buttonType === "secondary") {
      switch (buttonMainColor) {
        case "$secondary-color-regular":
          setButtonMainColor(
            "u-border-color-secondary-color-regular u-background-color-secondary-color-regular"
          );
          break;

        case "$transparent-$tertiary-color-regular":
          setButtonMainColor(
            "u-border-color-tertiary-color-regular u-background-color-transparent-tertiary-color-regular"
          );
          break;

        case "$tertiary-color-regular":
          setButtonMainColor("u-border-color-tertiary-color-regular");
          break;

        default:
          setButtonMainColor("u-border-color-primary-color-regular");
          break;
      }
    }
    // Set main color: end

    // Set button color
    switch (buttonFontColor) {
      case "$secondary-color-regular":
        setButtonFontColor("u-font-color-secondary-color-regular");
        break;

      case "$tertiary-color-regular":
        setButtonFontColor("u-font-color-tertiary-color-regular");
        break;

      default:
        setButtonFontColor("u-font-color-soft-neutral-color-0");
        break;
    }

    // Set buttonMarginRight
    switch (buttonMarginRight) {
      case "xs":
        setButtonMarginRight("u-margin-right-xs");
        break;

      case "sm":
        setButtonMarginRight("u-margin-right-sm");
        break;

      default:
        setButtonMarginRight("");
        break;
    }

    setClassList(
      [buttonType, buttonMainColor, buttonFontColor, buttonMarginRight].join(
        " "
      )
    );
  }, []);

  useEffect(() => {
    setClassList(
      [buttonType, buttonMainColor, buttonFontColor, buttonMarginRight].join(
        " "
      )
    );
  }, [buttonType, buttonMainColor, buttonFontColor, buttonMarginRight]);

  return (
    <>
      {handleClick !== undefined ? (
        <button
          onClick={(id) => {
            handleClick();
          }}
          disabled={disabled === true ? true : false}
          className={classList}
        >
          {children}
        </button>
      ) : (
        <button
          disabled={disabled === true ? true : false}
          className={classList}
        >
          {children}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  mainColor: PropTypes.string,
  fontColor: PropTypes.string,
  marginRight: PropTypes.string,
};

Button.defaultProps = {
  type: "primary",
  mainColor: "$primary-color-regular",
  fontColor: "$soft-neutral-color-0",
  marginRight: "none",
};

export default Button;
