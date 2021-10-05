import React from "react";
import { Link } from "react-router-dom";
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
        <div className="comunities__principal--container">
          <CardPrincipal
            imageUrl="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/englishGroup.jpg?alt=media&token=941fb038-4216-42f0-80f0-5c29ede0fe82"
            imageLogo="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/english-flag1.png?alt=media&token=826b8bb9-1cd9-4fbe-a12a-2526ec81a6ee"
            name="Basic English"
            goal="Get to B2"
            paragraph="En esta comunidad tendrás la oportunidad de aprender y practicar inglés, todo lo hablamos en inglés, nadie corrige a nadie y mucho menos te vamos a juzgar."
            start="Inicia el 03 de Octubre"
          />
        </div>
      </div>
      <div className="button__comunities--container">
        <Link to="/communities">
          <button>
            VER MÁS
            <img
              className="arrow"
              src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/Arrow%201.svg?alt=media&token=64b286b9-6edf-49ca-97b8-7c7adebe6afc"
              alt="flecha"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Comunities;
