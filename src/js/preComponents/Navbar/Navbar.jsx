import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./_Navbar.scss";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Главная</Link>
      </li>
      <li>
        <Link to="/singin">Вход в кабинет</Link>
      </li>
      <li>
        <Link to="/posts">Записи</Link>
      </li>
      <li>
        <Link to="/posts">Запись о конкретном</Link>
      </li>
      <li>
        <Link to="/contacts">Контакты</Link>
      </li>
    </ul>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
