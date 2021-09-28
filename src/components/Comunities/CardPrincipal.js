import React from "react";

//styles
import "../../assets/styles/Comunities.css";

const CardPrincipal = () => {
  return (
    <div className="card__principal">
      <figure className="card__image">
        <img src="" alt="card__image" />
      </figure>
      <figure className="logo__image--container">
        <img className="project-logo" src="" alt="logo" />
      </figure>
      <article className="card__text principal__card--text">
        <h2>NOMBRE DEL PROYECTO</h2>
        <p className="card__paragraph">
          La fundación Santiago G, se encuentra realizando un proyecto de minado
          de criptomonedas, utlizando energías limpias
        </p>
        <h1>something else</h1>
      </article>
    </div>
  );
};

export default CardPrincipal;
