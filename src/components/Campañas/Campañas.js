import React from "react";
import EachCampaña from "./EachCampaña";

//styles
import "../../assets/styles/Campañas.css";

const Campañas = () => {
  return (
    <div className="campañas">
      <article className="campañas__title">
        <h1 className="">PROYECTOS DESTACADOS</h1>
      </article>
      <div className="campañas__container">
        <div>
          <EachCampaña />
        </div>
        <div>
          <EachCampaña />
        </div>
        <div>
          <EachCampaña />
        </div>
      </div>
    </div>
  );
};

export default Campañas;
