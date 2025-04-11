import React from "react";

const HeroDesign = () => {
  return (
    <div className="flex items-center justify-center w-120 h-120 md: mr-[150px]">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full border-2 border-[green] md:opacity-10 mb-20 ml-[160px] sm:opacity-0 `}
          style={{
            width: `${80 + i * 100}px`,
            height: `${80 + i * 100}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default HeroDesign;
