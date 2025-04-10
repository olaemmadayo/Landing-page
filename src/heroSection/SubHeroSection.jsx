import React from "react";
const icons = [
  {
    src: "/Speak.png",
    section: "Start coding",
  },

  {
    src: "/Briefcase.png",
    section: "Become a Professional",
  },

  {
    src: "/idea.svg",
    section: "Stunning Websites",
  },
];

// const logos = [
//   {
//     src: "/public/Vector.png",
//     name: "duolingo",
//   },

//   {
//     src: "/public/Vector (1).png",
//     name: "codecov",
//   },

//   {
//     src: "/public/Vector (2).png",
//     name: "user-testing",
//   },

//   {
//     src: "/public/Vector (3).png",
//     name: "magic-leap",
//   },
// ];

const SubHeroSection = () => {
  return (
    <div className="flex space-x-2">
      {icons.map((icon, index) => {
        return (
          <div className="md:flex mb-4 gap-[20px] justify-center items-center sm:hidden">
            <img
              key={index}
              src={icon.src}
              className="h-[32px] w-[32px] object-contain"
            />
            <p className="md:text-sm font-semibold">{icon.section}</p>
          </div>
        );
      })}

      {/* <div className="flex -mb-[200px] gap-12 flex-wrap justify-center items-center md:flex-wrap">
        {logos.map((logo, index) => {
          return (
            <img key={index} src={logo.src} className="w-[120px] h-[20px] " />
          );
        })}
      </div> */}
    </div>
  );
};

export default SubHeroSection;
