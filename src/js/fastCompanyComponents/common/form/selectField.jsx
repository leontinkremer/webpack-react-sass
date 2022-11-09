//Build-in modules
import React from "react";

// Third pary modules
import PropTypes from "prop-types";

const SelectField = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  error,
}) => {
  const getInputClasses = () => {
    return "form-select" + (error ? "is-invalid" : "");
  };

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((optionName) => ({
          name: options[optionName].name,
          value: options[optionName]._id,
        }))
      : options;

  return (
    <div className="col-md-4">
      <label
        htmlFor="validationCustom04"
        className="form-label u-font-color-soft-neutral-color-0"
      >
        {label}
      </label>
      <select
        className={getInputClasses()}
        id="validationCustom04"
        name="profession"
        value={value}
        onChange={handleChange}
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {optionsArray &&
          optionsArray.map((option) => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
      </select>

      {error && <p className="text-field__span--alert">{error}</p>}
    </div>
  );
};
SelectField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultOption: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  error: PropTypes.string,
};

export default SelectField;
