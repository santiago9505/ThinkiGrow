import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import app from "../firebase";
import Modal from "../components/Modals/SignupModal.js";

//styles
import "../assets/styles/Sign.css";

const Sign = () => {
  const [modal, setModal] = useState(false);

  const onRegister = () => {
    setModal(true);
  };

  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      onRegister();
      creatingNewUser(email.value);
    } catch (error) {
      alert(error);
    }
  });

  const creatingNewUser = (email) => {
    const userRef = app.database().ref("users").push();
    var key = userRef.key;
    const user = {
      email: email,
      id: key,
      name: "",
      number: "",
    };

    userRef.set(user);
  };

  return (
    <div className="sign">
      <div className={modal ? "sign__square--blur" : "sign__square"}>
        <article className="sign__title--container">
          <h1>REGÍSTRATE</h1>{" "}
        </article>
        <form onSubmit={handleSignUp} className="signup__form" action="">
          <label className="signup__question" htmlFor="">
            <span className="span">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Group%20187.svg?alt=media&token=4ea1d4f6-aa34-4ccc-bba7-0f0c8dd57138"
                alt="email"
              />{" "}
              Correo Electrónico
            </span>
            <input
              name="email"
              placeholder="Email"
              className="signup__input input"
              type="email"
              required
            />
          </label>
          <label className="signup__question" htmlFor="">
            <span className="span">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Group%20189.svg?alt=media&token=110298f2-3c41-4c07-b0c3-5b5534f1fdcb"
                alt="number"
              />{" "}
              Contraseña
            </span>
            <input
              name="password"
              placeholder="Contraseña"
              className="signup__input input"
              type="password"
              required
            />
          </label>
          <div>
            <span>
              Ya tienes una cuenta ? Ingresa <Link to="login">aquí</Link>
            </span>
          </div>
          <div className="button__container--signup">
            <button className="register__button">Registrarse</button>
          </div>
        </form>
        <hr />
        <div className="section__metamask">
          <h2>Ó</h2>
          <article className="metamask__register--signup">
            <h2>Regístrate con Metamask</h2>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/metamask-icon.svg?alt=media&token=34728a3b-ea01-4779-8c50-1741b754c764"
              alt="metamas-icon"
            />
          </article>
          <p>Para descargar metamask haz click aquí</p>
          <div className="video__container">
            <iframe
              width="360"
              height="235"
              src="https://www.youtube.com/embed/Lwmx_DO77_M"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <article>
            <p>Si ya tienes metamask ingresa con un sólo click</p>
          </article>
          <div className="button__container--signup">
            <button className="register__metamask">
              Registrarse con Metamask
            </button>
          </div>
        </div>
      </div>
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
};

export default withRouter(Sign);
