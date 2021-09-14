import React from "react";
import EachCampaña from "./EachCampaña";

//styles
import "../../assets/styles/Campañas.css";

const Campañas = () => {
  return (
    <div className="campañas">
      <h1 className="campañas__title">CAMPAÑAS DESTACADAS</h1>
      <EachCampaña />
    </div>
  );
};

export default Campañas;
