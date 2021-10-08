import React from "react";
import { Link } from "react-router-dom";

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
          <h1>
            APOYA <br /> CAUSAS
          </h1>
        </article>
        <figure className="description__img-container">
          <img className="img" src={Donations} alt="voluntario" />
        </figure>
        <p className="description__paragraph">
          Aporta a causas que ayudan al medio ambiente, educación y erradicación
          de la pobreza. Nosotros damos un seguimiento para que tu aporte cumpla
          el objetivo. La unión hace la fuerza!
        </p>
        <div>
          <button className="description__button">APORTAR</button>
        </div>
      </div>
      <div className="description__item">
        <article className="description__item--title">
          <h1>
            CREA UN <br /> PROYECTO
          </h1>
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
      <div className="description__item">
        <article className="description__item--title">
          <h1>
            CREA UNA
            <br />
            CAUSA SOCIAL
          </h1>
        </article>
        <figure className="description__img-container">
          <img className="img" src={World} alt="voluntario" />
        </figure>
        <p className="description__paragraph">
          Crea una causa social que tenga un impacto medible, nosotros
          ayudaremos a que el mundo la conozca y que las personas puedan
          aportar.
        </p>
        <Link to="communities">
          <button className="description__button"></button>
        </Link>
      </div>
    </div>
  );
};

export default Description;
