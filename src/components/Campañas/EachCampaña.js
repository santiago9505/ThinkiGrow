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
      <article
        className={
          button ? "each__campaña--complete" : "each__campaña--paragraph"
        }
      >
        <h1 className="project__title">NOMBRE DEL PROYECTO</h1>
        <p>
          La fundación Bidipet, se encuentra liderando un programa de castración
          de animales en abandono, el proyecto requiere de fondos para contratar
          a practicantes de veterinaria
        </p>
        <figure className="progress__bar">
          <div className="bar">
            <figure className="elipse__container">
              <img src={Ellipse} alt="circle" />
            </figure>
            <article className="recolected">40 COP</article>
          </div>
          <article className="goal">120 COP</article>
        </figure>
      </article>
      <div className={button ? "viewProject" : "noneProject"}>
        <button>VER PROYECTO</button>
      </div>
    </div>
  );
};

export default EachCampaña;
