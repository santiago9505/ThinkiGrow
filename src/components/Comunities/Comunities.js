import React from "react";
import CardSecondary from "./CardSecondary";
import CardPrincipal from "./CardPrincipal";

//styles
import "../../assets/styles/Comunities.css";

const Comunities = () => {
  return (
    <div className="comunities">
      <article className="comunities__title">
        <h1>COMUNIDADES</h1>
      </article>
      <div className="comunities-container">
        <div className="comunities__secondary--container">
          <CardSecondary />
          <CardSecondary />
        </div>
        <CardPrincipal />
      </div>
      <div className="button__comunities--container">
        <button>
          VER MÁS
          <img
            className="arrow"
            src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Arrow%201.svg?alt=media&token=64b286b9-6edf-49ca-97b8-7c7adebe6afc"
            alt="flecha"
          />
        </button>
      </div>
    </div>
  );
};

export default Comunities;
