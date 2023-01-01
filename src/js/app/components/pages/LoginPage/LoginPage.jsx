import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import withLoaderHOC from "../../../hoc/withLoaderHOC";
import style from "./_layout.module.scss";
import Statistics from "../../common/Statistics";
import Section from "../../common/Section";
import Container from "../../common/Container";
import Row from "../../common/Row/";
import InputField from "../../common/InputField";
import Button from "../../common/Button";

const LoginPage = () => {
  const {
    column,
    loginFormContainer,
    loginFormHeader,
    formHeaderText,
    loginForm,
    inputField,
    loginFormButtonsSection,
    loginFormFooter,
    loginFormLink,
    submitButton,
  } = style;

  return (
    <Section>
      <Container>
        <Row maxWidth="600px">
          <div className={column}>
            <div className={loginFormContainer}>
              <div className={loginFormHeader}>
                <p className={formHeaderText}>Anmelden</p>
              </div>
              <form className={loginForm}>
                <InputField
                  name="email"
                  lable="E-Mail"
                  placeholder="E-Mail"
                  type="email"
                />
                <InputField
                  name="password"
                  lable="Passwort"
                  placeholder="Passwort"
                  type="password"
                />
                <div className={loginFormButtonsSection}>
                  <Button mobileFullWidth="true">Anmelden</Button>
                </div>
              </form>
              <div className={loginFormFooter}>
                <Link to="/signup">
                  <li className={loginFormLink}>
                    Neu hier? Jetzt registrieren
                  </li>
                </Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Section>
  );
};

export default LoginPage;
