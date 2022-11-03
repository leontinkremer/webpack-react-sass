import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./_layout.scss";

const Heading = ({
  children,
  tag,
  size,
  color,
  weight,
  align,
  marginBottom,
}) => {
  const [headingSize, setHeadingSize] = useState(size);
  const [headingMarginBottom, setHeadingMarginBottom] = useState(marginBottom);
  const [headingColor, setHeadingColor] = useState(color);
  const [headingWeight, setHeadingWeight] = useState(weight);
  const [headingAlign, setHeadingAlign] = useState(align);
  const [classList, setClassList] = useState("");

  useEffect(() => {
    // Set size
    switch (headingSize) {
      case "xs":
        setHeadingSize("u-font-size-xs");
        break;

      case "sm":
        setHeadingSize("u-font-size-sm");
        break;

      case "md":
        setHeadingSize("u-font-size-md");
        break;

      case "lg":
        setHeadingSize("u-font-size-lg");
        break;

      case "xl":
        setHeadingSize("u-font-size-xl");
        break;

      case "xxl":
        setHeadingSize("u-font-size-xxl");
        break;

      default:
        setHeadingSize("u-font-size-xxs");
        break;
    }

    // Set color
    switch (headingColor) {
      case "$soft-neutral-color-0":
        setHeadingColor("u-font-color-soft-neutral-color-0");
        break;
      case "$tertiary-color-regular":
        setHeadingColor("u-font-color-tertiary-color-regular");
        break;

      default:
        setHeadingColor("u-font-color-soft-neutral-color-900");
        break;
    }

    // Set font-weight
    switch (headingWeight) {
      case "light":
        setHeadingWeight("u-font-weight-light");
        break;

      case "bold":
        setHeadingWeight("u-font-weight-bold");
        break;

      default:
        setHeadingWeight("u-font-weight-regular");
        break;
    }

    // Set margin bottom
    switch (headingMarginBottom) {
      case "xxs":
        setHeadingMarginBottom("u-margin-bottom-xxs");
        break;

      case "xs":
        setHeadingMarginBottom("u-margin-bottom-xs");
        break;

      case "md":
        setHeadingMarginBottom("u-margin-bottom-md");
        break;

      case "lg":
        setHeadingMarginBottom("u-margin-bottom-lg");
        break;

      case "xl":
        setHeadingMarginBottom("u-margin-bottom-xl");
        break;

      case "xxl":
        setHeadingMarginBottom("u-margin-bottom-xxl");
        break;

      default:
        setHeadingMarginBottom("u-margin-bottom-sm");
        break;
    }

    // Set align
    switch (headingAlign) {
      case "center":
        setHeadingAlign("u-text-align-center");
        break;

      case "right":
        setHeadingAlign("u-text-align-right");
        break;

      default:
        setHeadingAlign("u-text-align-left");
        break;
    }

    setClassList(
      [
        headingSize,
        headingColor,
        headingWeight,
        headingAlign,
        headingMarginBottom,
      ].join(" ")
    );
  }, []);

  useEffect(() => {
    setClassList(
      [
        headingSize,
        headingColor,
        headingWeight,
        headingAlign,
        headingMarginBottom,
      ].join(" ")
    );
  }, [
    headingSize,
    headingColor,
    headingWeight,
    headingAlign,
    headingMarginBottom,
  ]);

  return <h1 className={classList}>{children}</h1>;
};

Heading.propTypes = {
  tag: PropTypes.string,
  color: PropTypes.oneOf([
    "$primary-color-regular",
    "$primary-color-light",
    "$primary-color-lighter",
    "$primary-color-lightest",
    "$primary-color-dark",
    "$primary-color-darker",
    "$primary-color-darkest",

    "$secondary-color-regular",
    "$secondary-color-light",
    "$secondary-color-lighter",
    "$secondary-color-lightest",
    "$secondary-color-dark",
    "$secondary-color-darker",
    "$secondary-color-darkest",

    "$tertiary-color-regular",
    "$tertiary-color-light",
    "$tertiary-color-lighter",
    "$tertiary-color-lightest",
    "$tertiary-color-dark",
    "$tertiary-color-darker",
    "$tertiary-color-darkest",

    "$soft-neutral-color-0",
    "$soft-neutral-color-50",
    "$soft-neutral-color-100",
    "$soft-neutral-color-200",
    "$soft-neutral-color-400",
    "$soft-neutral-color-700",
    "$soft-neutral-color-800",
    "$soft-neutral-color-900",
  ]),
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5"]),
  weight: PropTypes.oneOf(["light", "regular", "bold"]),
  size: PropTypes.oneOf(["xxs", "xs", "sm", "md", "lg", "xl", "xxl"]),
  align: PropTypes.oneOf(["left", "center", "right"]),
  marginBottom: PropTypes.oneOf(["xxs", "xs", "sm", "md", "lg", "xl", "xxl"]),
};

Heading.defaultProps = {
  children: "Heading",
  tag: "h2",
  color: "$soft-neutral-color-900",
  size: "xs",
  weight: "u-font-weight-regular",
  align: "left",
  marginBottom: "sm",
};

export default Heading;
