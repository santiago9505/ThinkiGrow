import React from "react";

import "../../assets/styles/Comunities.css";

const CardSecondary = () => {
  return (
    <div className="card-secondary">
      <figure className="logo__image--container">
        <img className="project-logo" src="" alt="logo" />
      </figure>
      <article className="card__text">
        <h2>NOMBRE DEL PROYECTO</h2>
        <p className="card__paragraph">
          La fundación Santiago G, se encuentra realizando un proyecto de minado
          de criptomonedas, utlizando energías limpias
        </p>
      </article>
    </div>
  );
};

export default CardSecondary;
