// build-in modules
import React, { useState } from "react";

// third-party modules
import PropTypes from "prop-types";

// own modules

import "./_layout.scss";
import Icon from "../../components/Icon";

const TextField = ({
  label,
  type,
  name,
  value,
  onChange,
  firstIcon,
  secondIcon,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className="text-field">
      <input
        className="text-field__input"
        type={showPassword ? "text" : type}
        placeholder=" "
        value={value}
        id={name}
        name={name}
        onChange={onChange}
      />
      <span className="text-field__span">{label}</span>
      {firstIcon && type === "password" && (
        <Icon
          iconClass={showPassword ? secondIcon : firstIcon}
          position="icon--absolute-right"
          handleClick={toggleShowPassword}
        />
      )}
      {error && <p className="text-field__span--alert">{error}</p>}
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

TextField.defaultProps = {
  label: "Label",
  type: "text",
};

export default TextField;
