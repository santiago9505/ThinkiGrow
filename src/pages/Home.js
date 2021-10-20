import React from "react";

import Hero from "../components/Hero/Hero";
import Description from "../components/Description/Description";
import Comunities from "../components/Comunities/Comunities";
import Campañas from "../components/Campaigns/Campañas";

const Home = () => {
  return (
    <>
      <Hero />
      <Description />
      <Comunities />
      {/* <Campañas /> */}
    </>
  );
};

export default Home;
