import React from "react";
import EachCampaña from "./EachCampaña";

//styles
import "../../assets/styles/Campañas.css";

const Campañas = () => {
  return (
    <div className="campañas">
      <article className="campañas__title">
        <h1 className="">CAMPAÑAS DESTACADAS</h1>
      </article>

      <EachCampaña />
      <EachCampaña />
      <EachCampaña />
    </div>
  );
};

export default Campañas;
