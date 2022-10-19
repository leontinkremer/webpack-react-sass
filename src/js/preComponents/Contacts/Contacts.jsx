import React from "react";
import PropTypes from "prop-types";
import "./_Contacts.scss";
import Button from "../../components/Button";

const Contacts = () => {
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
