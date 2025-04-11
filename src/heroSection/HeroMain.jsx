import React from "react";
import HeroPic from "./HeroPic";
import HeroText from "./HeroText";
import HeroSectionBtn from "./HeroSectionBtn";

const HeroMain = () => {
  return (
    <div className="h-[130vh] flex md:flex-row sm:flex-col gap-[100px] px-2 max-w-[1200px] mx-auto mt-[180px] justify-between items-center">
      <HeroText />
      <HeroPic />
    </div>
  );
};

export default HeroMain;
