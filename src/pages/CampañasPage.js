import React from "react";

import "../assets/styles/CampañasPage.css";

const CampañasPage = () => {
  return (
    <div className="campaigns__page">
      <h1 className="title">
        En este momento no tenemos campañas disponibles, pero puedes crear una
      </h1>
      <label className="button__container" htmlFor="">
        <button className="button__create--campaign">Crea una campaña</button>
      </label>
    </div>
  );
};

export default CampañasPage;
