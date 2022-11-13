//Build-in modules
import React from "react";

// Third pary modules
import PropTypes from "prop-types";

const RadioField = ({ value, onChange, options, name, label }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

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
            className="form-check-input"
            type="radio"
            name={name}
            id={option.name + "_" + option.value}
            checked={option.value === value}
            value={option.value}
            onChange={handleChange}
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
