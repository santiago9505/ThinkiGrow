import React from "react";
import EachCampaña from "../Campañas/EachCampaña";
import "../../assets/styles/AllCampaigns.css";

//images
import Arrow from "../../assets/static/arrow.png";

const AllCampaigns = () => {
  return (
    <div className="all__campaigns--section">
      <article className="all__campaigns--title">
        <h1>TODAS LAS CAMPAÑAS</h1>
      </article>
      <div className="carousel__container">
        <EachCampaña button="VER PROYECTO" />
        <EachCampaña button="VER PROYECTO" />
        <EachCampaña button="VER PROYECTO" />
        <EachCampaña button="VER PROYECTO" />
      </div>
      <article className="button__show--container">
        <button className="button__show--more">
          VER MÁS <img src={Arrow} alt="Arrow" />
        </button>
      </article>
    </div>
  );
};

export default AllCampaigns;
