//Build-in modules
import React from "react";

// Third pary modules
import PropTypes from "prop-types";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const MultiSelectField = ({ options, onChange, name }) => {
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

  return (
    <Select
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
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default MultiSelectField;
