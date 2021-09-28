import React from "react";

//styles
import "../../assets/styles/Comunities.css";

//images
import CryptoAssets from "../../assets/static/blockchain.jpg";

const CardSecondary = () => {
  return (
    <div className="card-secondary">
      <img className="background__image" src={CryptoAssets} alt="background" />
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
