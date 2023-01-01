import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { NavbarConfig } from "./NavbarConfig";
import style from "./_layout.module.scss";

const Navbar = ({ loggedIn }) => {
  const {
    nav,
    navInput,
    navCheckButton,
    navLogo,
    navList,
    navListItem,
    navLink,
    navLinkActive,
  } = style;

  return (
    <>
      <nav className={nav} id="nav">
        <input className={navInput} type="checkbox" id="check" />
        <label htmlFor="check" className={navCheckButton}>
          <i className="fas fa-bars"></i>
        </label>
        <Link to="/">
          <label className={navLogo}>jobTime</label>
        </Link>

        <ul className={navList}>
          {!loggedIn ? (
            <>
              <li className={navListItem}>
                <a href="#nav">Home</a>
              </li>
              <li className={navListItem}>
                <a href="#features">Features</a>
              </li>
            </>
          ) : (
            NavbarConfig.map(({ id, name, path }) => (
              <Link key={id} to={path}>
                <li className={navListItem}>{name}</li>
              </Link>
            ))
          )}

          <Link to="/login">
            <Button actionType="secondary" marginRight="true">
              Anmelden
            </Button>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
