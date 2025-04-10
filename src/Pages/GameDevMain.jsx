import React from "react";
import GameDevTop from "./GameDevTop";
import GameDevLeft from "./GameDevLeft";
import GameDevFooter from "./GameDevFooter";
import CourseButton from "./CourseButton";

const GameDevMain = () => {
  return (
    <div className="md:h-[260vh] w-full border-[1px] border-black p-10 mt-20">
      <GameDevTop />
      <GameDevLeft />
      <GameDevFooter />
      <CourseButton />
    </div>
  );
};

export default GameDevMain;
