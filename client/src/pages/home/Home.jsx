import React from "react";

import Hero from "./Hero.jsx";
import Partenrs from "./Partenrs.jsx";
import DashbordFeature from "./DashbordFeature.jsx";
import Stats from "./Stats.jsx";
import Frequently from "./Frequently.jsx";
import FreeTrial from "./FreeTrial.jsx";

const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
        <Partenrs />
        <DashbordFeature />
        <Stats />
        <Frequently />
        <FreeTrial />
      </div>
    </>
  );
};

export default Home;
