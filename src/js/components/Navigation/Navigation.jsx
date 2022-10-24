import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./_layout.scss";

const Navigation = () => {
  return (
    <ul className="nav">
      <li className="nav__nav-item">
        <Link className="nav__nav-item__nav-item-link" to="/">
          Startseite
        </Link>
      </li>
      <li className="nav__nav-item">
        <Link className="nav__nav-item__nav-item-link" to="/testen">
          Testen
        </Link>
      </li>
      <li className="nav__nav-item">
        <Link className="nav__nav-item__nav-item-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );
};

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
