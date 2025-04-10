import React from "react";
import { FaCheckCircle } from "react-icons/fa";
const Items = [
  { item: "Beginner-Friendly & Expert-Led" },
  { item: "Hands-On Projects & Real-World Applications" },
  { item: "Master HTML, CSS, JavaScript, and Popular Frameworks like React" },
  { item: "Gain Industry-Ready Skills for High-Paying Jobs" },
];

const FrontEndLeft = () => {
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
      <p className="mt-20 text-sky-400">What You Will Learn</p>
    </div>
  );
};

export default FrontEndLeft;
