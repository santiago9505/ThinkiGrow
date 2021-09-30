import React from "react";

//styles
import "../../assets/styles/Campañas.css";

const EachCampaña = () => {
  return (
    <div className="campaña">
      <figure className="campaña__image--container">
        <img
          className="project-img"
          src="https://firebasestorage.googleapis.com/v0/b/succestory-e7b89.appspot.com/o/pexels-min-an-1230157%20(1).jpg?alt=media&token=9e428157-9485-40f2-ba1a-5d602b0af453"
          alt="project-img"
        />
      </figure>
      <img className="logo__campaña" src="" alt="logo" />
      <article className="campaña__information">
        <h1>NOMBRE DEL PROYECTO</h1>
        <div className="text__bar">
          <p className="campaña__paragraph">
            La fundación Bidipet, se encuentra liderando un programa de
            castración de animales en abandono, el proyecto requiere de fondos
          </p>
          <div className="progress__bar">
            <div className="progress__thumb">
              <div className="progress__circle"></div>
            </div>
          </div>
        </div>
        <div>
          <button className="campaña__button">VER PROYECTO</button>
        </div>
      </article>
    </div>
  );
};

export default EachCampaña;
