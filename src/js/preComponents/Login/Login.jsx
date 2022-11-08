//Build-in modules
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import PropTypes from "prop-types";

// Components
import LoginForm from "../../fastCompanyComponents/loginForm/loginForm";
import RegisterForm from "../../fastCompanyComponents/registerForm/registerForm";

// Styles
import "./_layout.scss";

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );

  const toggleFormType = (params) => {
    console.log("clicked on 'Registrieren'");
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };

  console.log("type", type);
  return (
    <>
      {formType === "register" ? (
        <RegisterForm onRegisterClick={toggleFormType} />
      ) : (
        <LoginForm onRegisterClick={toggleFormType} />
      )}
    </>
  );
};
Login.propTypes = {};

Login.defaultProps = {};

export default Login;
