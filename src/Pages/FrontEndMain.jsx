import React from "react";
import FrontEndTop from "./FrontEndTop";
import FrontEndLeft from "./FrontEndLeft";
import FrontEndFooter from "./FrontEndFooter";
import FrontEndFooterCard from "./CourseooterCard";
import CourseButton from "./CourseButton";

const FrontEndMain = () => {
  return (
    <div className="md:h-[220vh] w-full border-[1px] border-black p-10 mt-20">
      <FrontEndTop />
      <FrontEndLeft />
      <FrontEndFooter />
      <CourseButton />
    </div>
  );
};

export default FrontEndMain;
