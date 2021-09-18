import React from "react";
import EachCampaña from "../Campañas/EachCampaña";
import "../../assets/styles/AllCampaigns.css";

const AllCampaigns = () => {
  return (
    <div className="all__campaigns--section">
      <article className="title">
        <h1>TODAS LAS CAMPAÑAS</h1>
      </article>
      <div className="carousel__container">
        <EachCampaña button="VER PROYECTO" />
        <EachCampaña button="VER PROYECTO" />
        <EachCampaña button="VER PROYECTO" />
        <EachCampaña button="VER PROYECTO" />
      </div>
    </div>
  );
};

export default AllCampaigns;
