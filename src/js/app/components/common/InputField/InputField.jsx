import React from "react";
import style from "./_layout.module.scss";
import PropTypes from "prop-types";

const InputField = ({ lable, placeholder, type, name }) => {
  const { inputFieldBox, inputFieldLable, inputField } = style;

  return (
    <div className={inputFieldBox}>
      <label className={inputFieldLable} htmlFor="inputField">
        {lable}
      </label>
      <input
        id="inputField"
        className={inputField}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  lable: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

InputField.defaultProps = {
  name: "name",
  lable: "Lable",
  placeholder: "Placeholder",
  type: "text",
};

export default InputField;
