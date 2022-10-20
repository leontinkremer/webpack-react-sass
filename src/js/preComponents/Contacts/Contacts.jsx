import React from "react";
import { useLocation, useHistory } from "react-router";
import PropTypes from "prop-types";
import "./_Contacts.scss";
import Button from "../../components/Button";

const Contacts = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <h1>Контакты</h1>
      <Button marginRight="xs">Показать контакты</Button>
      <Button buttonType="secondary">Новый контакт</Button>
    </>
  );
};

Contacts.propTypes = {};

Contacts.defaultProps = {};

export default Contacts;
