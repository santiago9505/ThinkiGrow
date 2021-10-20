import React, { useState, useContext } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { AuthContext } from "../../auth/Auth";
import Logo from "../Logo";

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
      <Logo />
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
        <li className={currentUser ? "list__items--container" : "profile-hide"}>
          <Link className="link" onClick={hideMenu} to="/">
            <div className="profile__icon--login">
              PERFIL{" "}
              <img
                src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/user-tie-icon.svg?alt=media&token=81a23b56-5058-4543-bd4b-687aaab725fa"
                alt="Foto"
              />
            </div>
          </Link>
        </li>
        <li className="list__items--container">
          <Link className="link" onClick={hideMenu} to="/communities">
            COMUNIDADES{" "}
            <img
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Group%20(2).svg?alt=media&token=6ca9861b-028e-416d-b1c5-d005ad993436"
              className="list__item--log-in-icon"
              alt="comunidades"
            />
          </Link>
        </li>
        <li className="list__items--container">
          <Link className="link" onClick={hideMenu} to="/">
            CAMPAÑAS{" "}
            <img
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Vector%20(1).svg?alt=media&token=9525a05a-c112-40aa-b972-8dac59725477"
              className="list__item--log-in-icon"
              alt="campañas"
            />
          </Link>
        </li>
        <li className={currentUser ? "profile-hide" : "list__items--container"}>
          <Link className="link" onClick={hideMenu} to="sign-up">
            REGÍSTRATE{" "}
            <img
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/register-icon.svg?alt=media&token=08db2d07-d527-4369-b086-ef749110cab4"
              className="list__item--log-in-icon"
              alt="registrarse"
            />
          </Link>
        </li>
        <li className={currentUser ? "profile-hide" : "list__items--container"}>
          <Link className="link" onClick={hideMenu} to="login">
            INGRESAR{" "}
            <img
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/login.svg?alt=media&token=0fbe57f9-f493-4b29-a9ca-b33ec9cc4a35"
              className="list__item--log-in-icon"
              alt="ingresar"
            />
          </Link>
        </li>

        <li className={currentUser ? "list__items--container" : "profile-hide"}>
          <Link className="link" onClick={() => app.auth().signOut()} to="/">
            <div className="profile__icon--logout">SALIR</div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/logout-icon.svg?alt=media&token=d416e909-63e8-45fb-9adb-f2c8c3324931"
              alt=""
            />
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
