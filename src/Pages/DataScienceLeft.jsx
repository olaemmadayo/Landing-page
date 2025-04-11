import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Items = [
  { item: " Learn by Doing: Work on hands-on projects with real datasets." },
  { item: "Top-Tier Mentors: Get trained by data pros and AI experts." },

  { item: " Zero Experience? No problem! This program is beginner-friendly." },
  { item: "100% Scholarship Available! (Limited slots, so apply ASAP!)" },

  {
    item: " Land a High-Paying Career: Data Science is one of the most in-demand skills worldwide!",
  },
];

const DataScienceLeft = () => {
  return (
    <div className="mt-10">
      <h6 className="text-sky-400">Why You Should Join</h6>
      <ul>
        {Items.map((item, index) => (
          <p className="flex flex-row gap-4 text-base/4 mt-10">
            <FaCheckCircle className="mt-0 text-green-500" />
            {item.item}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default DataScienceLeft;
