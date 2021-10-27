import React, { useContext, useState } from "react";
import Logo from "../Logo";
import app from "../../firebase";

import { AuthContext } from "../../auth/Auth";

import "../../assets/styles/ModalRegister.css";

const ModalRegister = ({ modal, setModal, join, setJoin }) => {
  const { currentUser } = useContext(AuthContext);
  const closeModal = () => {
    setModal(false);
  };

  const handleJoin = (event) => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    const user = app.auth().currentUser;

    user
      .updateProfile({
        displayName: name.value,
      })
      .then(() => {
        setJoin(true);
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={modal ? "modal" : "modal__close"}>
      <div className="logo">
        <Logo />
      </div>
      <article>
        <h1>Datos básicos</h1>
      </article>
      <article>
        <p>Para inscribirte indicanos los siguientes datos:</p>
      </article>
      <form onSubmit={handleJoin} className="form" action="">
        <label htmlFor="">
          <span>Nombre</span>
          <input required name="name" type="text" />
        </label>
        <label htmlFor="">
          <span>Número celular</span>
          <input required name="number" type="tel" />
        </label>
        <div className="buttons">
          <button type="submit" className="btn home">
            ACEPTAR
          </button>
          <button type="button" className="btn" onClick={closeModal}>
            CERRAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalRegister;
