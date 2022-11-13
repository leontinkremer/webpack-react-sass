//Build-in modules
import React from "react";

// Third pary modules
import PropTypes from "prop-types";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const MultiSelectField = ({ options, onChange, name, defaultValue }) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((optionName) => ({
          label: options[optionName].name,
          value: options[optionName]._id,
        }))
      : options;

  const handleChange = (value) => {
    onChange({ name: name, value });
  };
  console.log("options", options);
  console.log("name", name);
  console.log("defaultValue", defaultValue);
  return (
    <Select
      defaultValue={defaultValue}
      isMulti
      closeMenuOnSelect={false}
      options={optionsArray}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={handleChange}
    />
  );
};

MultiSelectField.propTypes = {
  defaultValue: PropTypes.array,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default MultiSelectField;
