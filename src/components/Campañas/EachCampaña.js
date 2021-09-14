import React from "react";

const EachCampaña = () => {
  return (
    <div className="each__campaña">
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
            <img src="" alt="circle" />
          </div>
        </figure>
      </article>
    </div>
  );
};

export default EachCampaña;
