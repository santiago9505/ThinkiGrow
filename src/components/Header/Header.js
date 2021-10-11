import React, { useState, useContext } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { AuthContext } from "../../auth/Auth";

//styles
import "../../assets/styles/Header.css";

//images
import Icon1 from "../../assets/static/menu-icon1.png";
import Icon2 from "../../assets/static/menu-icon2.png";
import Icon3 from "../../assets/static/menu-icon3.png";

import { Link } from "react-router-dom";
import app from "../../firebase";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const hideMenu = () => {
    setOpen(false);
  };

  return (
    <header className={isOpen ? "header menu__open" : "header"}>
      <Link to="/" className="logo__container">
        <h1>ThinkiGrow</h1>
        <img
          className="icon"
          src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Group%20200%20(1).svg?alt=media&token=a148dfec-1aae-45e6-945a-c64dc865b055"
          alt="logo"
        />
      </Link>
      <Hamburger
        className={currentUser ? "profile-hide" : "list__items--container"}
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
        <li className={currentUser ? "profile-hide" : "list__items--container"}>
          <Link onClick={hideMenu} to="sign-up">
            REGÍSTRATE{" "}
            <img
              src={Icon1}
              className="list__item--log-in-icon"
              alt="registrarse"
            />
          </Link>
        </li>
        <li className={currentUser ? "profile-hide" : "list__items--container"}>
          <Link onClick={hideMenu} to="/communities">
            COMUNIDADES{" "}
            <img
              src={Icon2}
              className="list__item--log-in-icon"
              alt="COMUNIDADES"
            />
          </Link>
        </li>
        <li className={currentUser ? "profile-hide" : "list__items--container"}>
          <Link onClick={hideMenu} to="/">
            CAMPAÑAS{" "}
            <img
              src={Icon3}
              className="list__item--log-in-icon"
              alt="campañas"
            />
          </Link>
        </li>
        <li className={currentUser ? "list__items--container" : "profile-hide"}>
          <Link onClick={hideMenu} to="/">
            <div className="profile__icon--login">
              PERFIL <img src="" alt="Foto" />
            </div>
          </Link>
        </li>
        <li className={currentUser ? "list__items--container" : "profile-hide"}>
          <Link onClick={() => app.auth().signOut()} to="/">
            <div className="profile__icon--login">Logout</div>
          </Link>
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
