import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//styles
import "../../assets/styles/Comunities.css";

const CardPrincipal = ({
  imageUrl,
  imageLogo,
  name,
  goal,
  paragraph,
  start,
}) => {
  return (
    <Link to="/project" className="card__principal">
      <figure className="card__image">
        <img className="image__group" src={imageUrl} alt="card__image" />
      </figure>
      <figure className="logo__image--container">
        <img className="project-logo" src={imageLogo} alt="logo" />
      </figure>
      <article className="card__text principal__card--text">
        <h2>{name}</h2>
        <h3>Objetivo: {goal}.</h3>
        <p className="card__paragraph">{paragraph}</p>
        <p className="start">{start}</p>
      </article>
    </Link>
  );
};

export default CardPrincipal;
