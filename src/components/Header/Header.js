import React from "react";

//styles
import "../../assets/styles/Header.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <figure className="logo__container">
        <img className="logo" src="" alt="Logo" />
      </figure>
      <figure>
        <img src="" alt="menu-icon" />
      </figure>
      <ul className="header__items--container">
        <li className="list__items--container">
          <a href="/" className="header__button">
            Comienza una Campaña
          </a>
        </li>
        <li className="list__items--container">
          <a href="/">LOG IN</a>
        </li>
        <li className="list__items--container">
          <a href="/">SIGN UP</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
