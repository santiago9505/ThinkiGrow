import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../auth/Auth";

//styles
import "../../assets/styles/Description.css";

const Description = () => {
  const { currentUser } = useContext(AuthContext);
  console.log("hola" + currentUser);
  return (
    <div className="description">
      <div className="description__item">
        <article className="description__item--title">
          <h1>
            ÚNETE A UNA
            <br /> COMUNIDAD
          </h1>
        </article>
        <figure className="description__img-container">
          <img
            className="img"
            src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Union.svg?alt=media&token=419d5e9b-5a28-4e2f-983e-ca37d9237795"
            alt="voluntario"
          />
        </figure>
        <p className="description__paragraph">
          Haz parte de una comunidad, donde podrás practicar, aprender, crear y
          rodearte de personas que comparten tus mismos intereses.
        </p>
        <div>
          <Link to="/communities">
            <button className="description__button">ÚNETE</button>
          </Link>
        </div>
      </div>
      <div className="description__item">
        <article className="description__item--title">
          <h1>
            CREA UNA <br /> COMUNIDAD
          </h1>
        </article>
        <figure className="description__img-container">
          <img
            className="img"
            src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/create-icon.svg?alt=media&token=e628a01a-92e7-468e-876d-bee065a32f37"
            alt="voluntario"
          />
        </figure>
        <p className="description__paragraph">
          Muestra tu proyecto, si tienes una idea de un emprendimiento o una
          causa social, nosotros te apoyamos para que el mundo la conozca y las
          personas se puedan unir.
        </p>
        <div>
          <Link to={currentUser ? "/create" : "/login"}>
            <button className="description__button">CREA</button>
          </Link>
        </div>
      </div>
      <div className="description__item">
        <article className="description__item--title">
          <h1>
            FINANCIA <br /> CAMPAÑAS
          </h1>
        </article>
        <figure className="description__img-container">
          <img
            className="img"
            src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/aportar-icon.svg?alt=media&token=0a561a5e-7d59-4f1e-827f-4d45fee2efaa"
            alt="voluntario"
          />
        </figure>
        <p className="description__paragraph">
          Apoya todo tipo de campañas, desde causas sociales que ayuden al medio
          ambiente hasta pequeños emprendimientos que hasta ahora comienzan.
        </p>
        <div>
          <Link to="/campañas">
            <button className="description__button">AYUDA</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Description;
