import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Items = [
  { item: "Hands-On Learning: Create real games from scratch." },
  {
    item: "Industry Mentors: Learn from expert game designers and developers.",
  },
  { item: "No Experience Needed! We teach from beginner to pro" },
  { item: "100% Scholarship Available! (Limited slots, so apply ASAP!)" },
];

const GameDevLeft = () => {
  return (
    <div className="mt-10">
      <h6 className="text-sky-400">Why Choose This Course?</h6>
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

export default GameDevLeft;
