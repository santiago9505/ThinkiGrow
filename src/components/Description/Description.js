import React from "react";

//styles
import "../../assets/styles/Description.css";

//images
import Project from "../../assets/static/2ndIcon.png";
import Donations from "../../assets/static/3rdIcon.png";

const Description = () => {
  return (
    <div className="description">
      <div className="description__item">
        <article className="description__item--title">
          <h1>
            ÚNETE A UNA
            <br /> COMUNIDAD
          </h1>
        </article>
        <figure className="description__img-container">
          <img className="img" src={Donations} alt="voluntario" />
        </figure>
        <p className="description__paragraph">
          Haz parte de una comunidad, donde podrás practicar, aprender, crear y
          rodearte de personas que comparten tus mismos intereses.
        </p>
        <div>
          <button className="description__button">ÚNETE</button>
        </div>
      </div>
      <div className="description__item">
        <article className="description__item--title">
          <h1>
            CREA UNA <br /> COMUNIDAD
          </h1>
        </article>
        <figure className="description__img-container">
          <img className="img" src={Project} alt="voluntario" />
        </figure>
        <p className="description__paragraph">
          Muestra tu proyecto, si tienes una idea de un emprendimiento o una
          causa social, nosotros te apoyamos para que el mundo la conozca y las
          personas se puedan unir.
        </p>
        <div>
          <button className="description__button">CREA</button>
        </div>
      </div>
      <div className="description__item">
        <article className="description__item--title">
          <h1>
            FINANCIA <br /> CAUSAS SOCIALES
          </h1>
        </article>
        <figure className="description__img-container">
          <img className="img" src={Donations} alt="voluntario" />
        </figure>
        <p className="description__paragraph">
          Apoya a comunidades que crean soluciones para el medio ambiente,
          educación y erradicación de la pobreza.
        </p>
        <div>
          <button className="description__button">AYUDA</button>
        </div>
      </div>
    </div>
  );
};

export default Description;
