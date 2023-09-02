import React from "react";
import Hero from "../components/IndexPage/Hero";
import Footer from "../components/IndexPage/Footer";
import MapChart from "../components/IndexPage/MapChart";
import Slider from "../components/IndexPage/Slider";
import Article from "../components/IndexPage/Article";

const IndexPage = () => {
  return (
    <div className="h-screen w-full">
      <Hero />
      <Slider/>
      <MapChart />
      <Article/>
      <Footer />
    </div>
  );
};

export default IndexPage;
