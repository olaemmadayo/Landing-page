import React from "react";
import StatMain from "../statSession/StatMain";
import HeroDesign from "./HeroDesign";

const HeroPic = () => {
  return (
    <div className="w-[330px] h-[350px] rounded-full border-[2px] -mt-[200px] mr-[150px]">
      <div className="w-[330px] h-[350px] rounded-full border-[2px] mt-5 ml-4 bg-[gold]">
        <img
          src="src\assets\Images\image.png"
          alt="image.png"
          className=" w-[250px] h-[250px] object-contain mt-20 flex justify-center items-center relative ml-10"
        />
      </div>
      <div>
        <StatMain />
      </div>
      <div className="mt-[250px] ml-[250px]">
        <HeroDesign />
      </div>
    </div>
  );
};

export default HeroPic;
