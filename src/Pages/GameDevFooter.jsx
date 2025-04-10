import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";

const Cards = [
  {
    src: "/Gamepad.webp",
    text: "Game Design & Storytelling",
    paragraph: "Learn what makes game fun and addictive.",
  },
  {
    src: "/Unity.webp",
    text: "Unity and Unreal Engine",
    paragraph: "The tools behind blockbuster games.",
  },
  {
    src: "/Python.webp",
    text: "Coding for Games (C# & Python)",
    paragraph: "Build mechanics, physics, and AI.",
  },
  {
    src: "/Animation.webp",
    text: "2D & 3D Game Art & Animation",
    paragraph: "Bring your game world to life.",
  },
  {
    src: "/Monetizing.webp",
    text: "Monetizing Your Game",
    paragraph: "How to turn your skills into $$$.",
  },
];

const Items = [
  { item: "Gamers who want to create, not just play." },
  {
    item: "Storytellers who want to build immersive worlds.",
  },
  { item: "Artists who want to design characters, environments & animations." },
  {
    item: "Future tech moguls who see gaming as a billion-dollar opportunity.",
  },

  {
    item: "You…Definitely You",
  },
];

const icons = [
  {
    src: "/calender.png",
    section: "Start Date: To be Communicated",
  },

  {
    src: "/sandclock.png",
    section: "Duration: 3 Months",
  },

  {
    src: "/location.png",
    section: "Location: In-Person",
  },

  {
    src: "/moneybag.png",
    section: "Cost: Fully Funded (Limited Slots Available)",
  },
];

const GameDevFooter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <h6 className="text-sky-400 mt-10">Who is This For?</h6>
      <ul>
        {Items.map((item, index) => (
          <p className="flex flex-row gap-4 text-base/4 mt-10">
            <FaCheckCircle className="mt-0 text-green-500" />
            {item.item}
          </p>
        ))}
        <div className="mt-10">
          <h6 className="font-semibold mb-2">Program Details</h6>
          <ul>
            {icons.map((icon, index) => (
              <p className="flex">
                <img src={icon.src} className="w-[23px] h-[23px]" />
                {icon.section}
              </p>
            ))}
          </ul>
        </div>

        <p className="mt-20 text-sky-400">What You Will Learn</p>
      </ul>

      <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full p-6  bg-white rounded-lg shadow-md text-center"
          >
            <img
              src={Cards[currentIndex].src}
              alt={Cards[currentIndex].text}
              className="w-[300px] h-[250px] mx-auto mb-4"
            />
            <h6 className="text-xl font-bold text-gray-900">
              {Cards[currentIndex].text}
            </h6>
            <p className="text-lg text-gray-600 mt-2">
              {Cards[currentIndex].paragraph}
            </p>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default GameDevFooter;
