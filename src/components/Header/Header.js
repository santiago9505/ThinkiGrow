import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

//styles
import "../../assets/styles/Header.css";

import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <header className="header">
      <figure className="logo__container">
        <h1>Succestory</h1>
      </figure>
      <Hamburger
        onClick={handleClick}
        color="#fff"
        toggled={isOpen}
        toggle={setOpen}
      />
      <ul
        className={
          isOpen ? "header__items--container-open" : "header__items--container"
        }
      >
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
