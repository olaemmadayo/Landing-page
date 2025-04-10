import React from "react";

import CourseButton from "./CourseButton";
import DataScienceTop from "./DataScienceTop";
import DataScienceLeft from "./DataScienceLeft";
import DataScienceFooter from "./DataScienceFooter";

const GameDevMain = () => {
  return (
    <div className="md:h-[260vh] w-full border-[1px] border-black p-10 mt-20">
      <DataScienceTop />
      <DataScienceLeft />
      <DataScienceFooter />
      <CourseButton />
    </div>
  );
};

export default GameDevMain;
