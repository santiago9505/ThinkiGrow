import React from "react";

//styles
import "../../assets/styles/Description.css";

const Description = () => {
  return (
    <div className="description">
      <div className="description__item">
        <article className="description__item--title">
          <h1>SE VOLUNTARIO O VOLUNTARIA</h1>
        </article>
        <figure className="description__img-container">
          <img className="img-container" src="" alt="voluntario" />
        </figure>
        <p className="description__paragraph">
          Únete a la comunidad más importante del mundo hispanohablante, que
          conecta a las personas con causas que ayudan a la sociedad
        </p>
        <div>
          <button className="description__button">UNIRSE</button>
        </div>
      </div>
      <div className="description__item">
        <article className="description__item--title">
          <h1>POSTULA TU PROYECTO</h1>
        </article>
        <figure className="description__img-container">
          <img className="img-container" src="" alt="voluntario" />
        </figure>
        <p className="description__paragraph">
          Únete a la comunidad más importante del mundo hispanohablante, que
          conecta a las personas con causas que ayudan a la sociedad
        </p>
        <div>
          <button className="description__button">POSTULARSE</button>
        </div>
      </div>
      <div className="description__item">
        <article className="description__item--title">
          <h1>HAZ DONACIONES E INVIERTE</h1>
        </article>
        <figure className="description__img-container">
          <img className="img-container" src="" alt="voluntario" />
        </figure>
        <p className="description__paragraph">
          Colocamos tus donaciones en proyectos productivos que ayuden a la
          educación o al medio ambiente, transformamos parte del monto en
          activos digitales
        </p>
        <div>
          <button className="description__button">INVERTIR</button>
        </div>
      </div>
    </div>
  );
};

export default Description;
