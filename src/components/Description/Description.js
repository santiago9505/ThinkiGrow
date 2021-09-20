import React from "react";

//styles
import "../../assets/styles/Description.css";

//images
import World from "../../assets/static/1stIcon.png";
import Project from "../../assets/static/2ndIcon.png";
import Donations from "../../assets/static/3rdIcon.png";

const Description = () => {
  return (
    <div className="description">
      <div className="description__item">
        <article className="description__item--title">
          <h1>ÚNETE A UN PROYECTO</h1>
        </article>
        <figure className="description__img-container">
          <img className="img" src={World} alt="voluntario" />
        </figure>
        <p className="description__paragraph">
          Únete a la comunidad más importante del mundo hispanohablante, que
          conecta a las personas con comunidades de investigación y aprendizaje
        </p>
        <div>
          <button className="description__button">UNIRSE</button>
        </div>
      </div>
      <div className="description__item">
        <article className="description__item--title">
          <h1>APOYA CAUSAS</h1>
        </article>
        <figure className="description__img-container">
          <img className="img" src={Donations} alt="voluntario" />
        </figure>
        <p className="description__paragraph">
          Aporta a causas que ayudan al medio ambiente, educación y erradicación
          de la pobreza. La unión hace la fuerza!
        </p>
        <div>
          <button className="description__button">APORTAR</button>
        </div>
      </div>
      <div className="description__item">
        <article className="description__item--title">
          <h1>CREA UN PROYECTO</h1>
        </article>
        <figure className="description__img-container">
          <img className="img" src={Project} alt="voluntario" />
        </figure>
        <p className="description__paragraph">
          Crea un proyecto al que todos quieran sumarse, si tienes una idea, un
          emprendimiento o una causa, nosotros te ayudamos a que el mundo la
          conozca y a que las personas se puedan unir
        </p>
        <div>
          <button className="description__button">CREAR</button>
        </div>
      </div>
    </div>
  );
};

export default Description;
