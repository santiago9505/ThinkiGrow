import React, { useState, useContext } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { AuthContext } from "../../auth/Auth";
import Logo from "../Logo";

//styles
import "../../assets/styles/Header.css";

//images
import CommunityImg from "../../assets/static/comunidades-icon.svg";
import CampaignsImg from "../../assets/static/campañas-icon.svg";
import RegisterImg from "../../assets/static/registrarse-icon.svg";
import LogoutImg from "../../assets/static/salir-icon.svg";

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
              src={CommunityImg}
              className="list__item--log-in-icon"
              alt="comunidades"
            />
          </Link>
        </li>
        <li className="list__items--container">
          <Link className="link" onClick={hideMenu} to="/campañas">
            CAMPAÑAS{" "}
            <img
              src={CampaignsImg}
              className="list__item--log-in-icon"
              alt="campañas"
            />
          </Link>
        </li>
        <li className={currentUser ? "profile-hide" : "list__items--container"}>
          <Link className="link" onClick={hideMenu} to="sign-up">
            REGÍSTRATE{" "}
            <img
              src={RegisterImg}
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
            <img src={LogoutImg} alt="" />
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
