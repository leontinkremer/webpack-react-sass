//Build-in modules
import React from "react";

// Third pary modules
import PropTypes from "prop-types";

const RadioField = ({ value, onChange, options, name, label }) => {
  return (
    <div className="mb-4">
      <label className="form-label u-font-color-soft-neutral-color-0">
        {label}
      </label>
      {options.map((option) => (
        <div
          key={option.name + "_" + option.value}
          className="form-check form-check-inline "
        >
          <input
            key={option}
            className="form-check-input "
            type="radio"
            name={name}
            id={option.name + "_" + option.value}
            checked={option.value === value}
            value={option.value}
            onChange={onChange}
          />
          <label
            className="form-check-label u-font-color-soft-neutral-color-0"
            htmlFor={option.name + "_" + option.value}
          >
            {option.name}
          </label>
        </div>
      ))}
    </div>
  );
};

RadioField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string,
  label: PropTypes.string,
};

export default RadioField;
