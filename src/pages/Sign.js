import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import app from "../firebase";

//styles
import "../assets/styles/Sign.css";

const Sign = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div className="sign">
      <div className="sign__square">
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
            <button className="register__button">REGISTRARSE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Sign);
