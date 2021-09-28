import React from "react";

//styles
import "../../assets/styles/Comunities.css";

//static
import EnglishGroup from "../../assets/static/englishGroup.jpg";
import EnglishLogo from "../../assets/static/english-flag.png";

const CardPrincipal = () => {
  return (
    <div className="card__principal">
      <figure className="card__image">
        <img className="image__group" src={EnglishGroup} alt="card__image" />
      </figure>
      <figure className="logo__image--container">
        <img className="project-logo" src={EnglishLogo} alt="logo" />
      </figure>
      <article className="card__text principal__card--text">
        <h2>BASIC ENGLISH</h2>
        <h3>Objetivo: Llegar a nivel B1.</h3>
        <p className="card__paragraph">
          En esta comunidad tendrás la oportunidad de aprender y practicar
          inglés, todo lo hablamos en inglés, nadie corrige a nadie y mucho
          menos te vamos a juzgar.
        </p>
        <p className="start">Inicia el 03 de Octubre</p>
      </article>
    </div>
  );
};

export default CardPrincipal;
