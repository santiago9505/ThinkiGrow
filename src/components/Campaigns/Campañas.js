import React from "react";

import EachCampaña from "./EachCampaña";

//styles
import "../../assets/styles/Campañas.css";

const Campaign = () => {
  return (
    <div className="campañas">
      <article className="campañas__title--container">
        <h1>CAUSAS SOCIALES</h1>
      </article>
      <div id="carousel" className="carousel">
        <EachCampaña />
        <EachCampaña />
        <EachCampaña />
        <EachCampaña />
        <EachCampaña />
        <EachCampaña />
        <EachCampaña />
      </div>
    </div>
  );
};

export default Campaign;
