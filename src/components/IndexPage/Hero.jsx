import React from "react";
import Carousel from "./Carousel";
import { IndoHero } from "../../data/IndoData";
import { EngHero } from "../../data/EngData";
import { useLanguage } from "../../LanguageProvider";

const Hero = () => {
  const { currentLanguage } = useLanguage();
  const menu = currentLanguage === "eng" ? EngHero : IndoHero;

  return (
    <div className="h-screen w-full relative">
      <Carousel images={menu} />
    </div>
  );
};

export default Hero;
