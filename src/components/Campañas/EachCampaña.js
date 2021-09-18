import React from "react";

//images
import Ellipse from "../../assets/static/ellipse.png";

const EachCampaña = ({ button }) => {
  return (
    <div className="each__campaña">
      <figure className="project__logo">
        <img src="" alt="Nombre Proyecto" />
      </figure>
      <figure className="image__campaña--container">
        <img src="" alt="campaña" />
      </figure>
      <article className="each__campaña--paragraph">
        <h1>NOMBRE DEL PROYECTO</h1>
        <p>
          La fundación Bidipet, se encuentra liderando un programa de castración
          de animales en abandono, el proyecto requiere de fondos para contratar
          a practicantes de veterinaria
        </p>
        <figure className="progress__bar">
          <div className="bar">
            <img src={Ellipse} alt="circle" />
            <article className="recolected">$40 COP</article>
          </div>
        </figure>
      </article>
      <button className={button ? "viewProject" : "noneProject"}>
        Ver proyecto
      </button>
    </div>
  );
};

export default EachCampaña;
