import React from "react";

//styles
import "../../assets/styles/Comunities.css";

const CardSecondary = ({ imageUrl, imageLogo, name, paragraph }) => {
  return (
    <div className="card-secondary">
      <img className="background__image" src={imageUrl} alt="background" />
      <figure className="logo__image--container">
        <img className="project-logo" src={imageLogo} alt="logo" />
      </figure>
      <article className="card__text">
        <h2>{name}</h2>
        <p className="card__paragraph">{paragraph}</p>
      </article>
    </div>
  );
};

export default CardSecondary;
