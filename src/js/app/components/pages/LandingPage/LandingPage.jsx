import React from "react";
import style from "./_layout.module.scss";

import Hero from "../../common/Hero";
import Features from "../../common/Features";
import CallToAction from "../../common/CallToAction";
import Footer from "../../common/Footer/Footer";

const LandingPage = () => {
  return (
    <div className={style.container}>
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LandingPage;
