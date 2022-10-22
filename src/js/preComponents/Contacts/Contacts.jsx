import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./_Contacts.scss";

import ContactDepartament1 from "../ContactDepartment1";
import ContactDepartament2 from "../ContactDepartment2";

const Contacts = () => {
  return (
    <>
      <h1>Контакты</h1>
      <ul>
        <li>
          <Link to="/contacts/departament1">Департамент 1</Link>
        </li>
        <li>
          <Link to="/contacts/departament2">Департамент 2</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/contacts/departament1" component={ContactDepartament1} />
        <Route path="/contacts/departament2" component={ContactDepartament2} />
      </Switch>
    </>
  );
};

Contacts.propTypes = {};

Contacts.defaultProps = {};

export default Contacts;
