import React from "react";
import StatText from "./StatText";

const StatCard = () => {
  return (
    <div className="w-[150px] h-[60px] border-[1px] border-sky-300 -mx-[60px] -my-[200px] mb-8 rounded-md bg-[#F5F5F4]">
      <div className="w-[30px] h-[30px] border-[1px] bg-sky-500 mx-4 mt-3">
        <img src="public\Online Education.png" alt="Education.png" />
      </div>
      <div className="flex justify-center items-center -mr-5 -mt-8">
        <h1 className="text-md font-bold text-[#101828]">2k</h1>
      </div>
      <div className="flex justify-center">
        <p className="text-[9px] ml-5 opacity-50">Video Courses</p>
      </div>
      <div className="w-[100px] h-[120px] border-[1px] border-sky-300 rounded-md bg-[#F5F5F4] -my-[210px] mx-[340px]">
        <div
          className="w-[50px] h-[50px] border-[1px] rounded-full border-gray-400 bg-gradient-to-r from-[#f5f5f4] via-[#f5f5f4] to-sky-400 flex justify-center items-center mx-auto mt-2" /*for first circle*/
        >
          <div
            className="w-[40px] h-[42px] border-[1px] rounded-full border-[white] bg-[#f5f5f4] mx-auto mt-0.5 flex justify-center items-center absolute " /*for inner circle*/
          ></div>
          <h1 className="flex mt-[100px] font-bold">5K+</h1>
        </div>
        <p className="flex mt-10 text-[9px] justify-center opacity-50">
          Online Courses
        </p>
      </div>
      <div className="w-[100px] h-[60px] border-[1px] border-sky-500 rounded-md bg-[#F5F5F4] my-[350px] mx-[330px]">
        <div className="w-[30px] h-[30px] border-[1px] bg-sky-500 mx-4 mt-3">
          <img src="public\icon.png" alt="icon" />
        </div>
        <div className="flex justify-center items-center -mr-5 -mt-8">
          <p className="text-md text-[#101828] opacity-50 ml-2 text-[9px]">
            Tutors
          </p>
        </div>
        <div className="flex justify-center">
          <h1 className=" font-bold text-md ml-10">250+</h1>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
