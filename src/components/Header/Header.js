import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

//styles
import "../../assets/styles/Header.css";

//images
import Icon1 from "../../assets/static/menu-icon1.png";
import Icon2 from "../../assets/static/menu-icon2.png";
import Icon3 from "../../assets/static/menu-icon3.png";

import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <header className={isOpen ? "header menu__open" : "header"}>
      <figure className="logo__container">
        <h1>THINKIGROW</h1>
      </figure>
      <Hamburger
        className="menu-icon"
        onClick={handleClick}
        color="#fff"
        toggled={isOpen}
        toggle={setOpen}
        size={34}
        rounded
      />
      <ul
        className={
          isOpen ? "header__items--container-open" : "header__items--container"
        }
      >
        <li className="list__items--container">
          <a href="/">
            Regístrate <img src={Icon1} className="list__item--log-in-icon" />
          </a>
        </li>
        <li className="list__items--container">
          <a href="/">
            Grupos <img src={Icon2} className="list__item--log-in-icon" />
          </a>
        </li>
        <li className="list__items--container">
          <a href="/">
            Campañas <img src={Icon3} className="list__item--log-in-icon" />
          </a>
        </li>
        <li className="list__items--campaign">
          <a href="/" className="header__button">
            Comienza una Campaña
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
