import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

//styles
import "../../assets/styles/Modal.css";

const SignupModal = ({ modal, setModal }) => {
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className={modal ? "modal" : "modal__close"}>
      <article>
        <h1>Tú registro se realizó con éxito</h1>
      </article>
      <div className="logo">
        <Logo />
      </div>
      <article>Rectifica tu información o sigue a la página principal</article>
      <Link to="/">
        <button className="btn" onClick={closeModal}>
          CERRAR
        </button>
      </Link>
    </div>
  );
};

export default SignupModal;
