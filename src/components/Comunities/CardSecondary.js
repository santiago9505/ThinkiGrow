import React from "react";
import { Link } from "react-router-dom";

//styles
import "../../assets/styles/Comunities.css";

const CardSecondary = ({ id, imageUrl, imageLogo, name, paragraph }) => {
  return (
    <Link to={`/project/${id}`} className="card-secondary">
      <img className="background__image" src={imageUrl} alt="background" />
      <figure className="logo__image--container">
        <img className="project-logo" src={imageLogo} alt="logo" />
      </figure>
      <article className="card__text">
        <h2>{name}</h2>
        <p className="card__paragraph">{paragraph}</p>
      </article>
    </Link>
  );
};

export default CardSecondary;
