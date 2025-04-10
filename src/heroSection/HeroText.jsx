import React from "react";
import HeroSectionBtn from "./HeroSectionBtn";
import HeroDesign from "./HeroDesign";
import SubHeroSection from "./SubHeroSection";

const HeroText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h1 className="text-6xl mb-10 relative">
        Up Your <span className="text-[rgb(36,187,140)]">Skills</span>
        <br />
        To <span className="text-[#24bb8c]">Advance </span>Your <br />
        <span className="text-[#24bb8c]"> Career</span> Path
      </h1>
      <div className="relative flex">
        <HeroDesign />
      </div>
      <p className="text-[#242424] text-sm font-light">
        Learn UI-UX Design skills with weekend UX . The latest online
        <br /> learning system and material that help your knowledge growing.
      </p>
      <div className="py-14 relative flex ">
        <HeroSectionBtn />
      </div>
      <div className="flex mt-[100px]">
        <SubHeroSection />
      </div>
    </div>
  );
};

export default HeroText;
