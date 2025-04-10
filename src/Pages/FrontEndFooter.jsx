import React from "react";
import { motion } from "framer-motion";

const Cards = [
  {
    src: <img src="html.png" />,
    text: "HTML & CSS",
    paragaph: "Structure and style your web pages professionally",
  },

  {
    src: <img src="/Javascript.png" />,
    text: "JavaScript",
    paragaph: "Make your website interactive and dynamic",
  },

  {
    src: <img src="/responsive.png" />,
    text: "Responsive Design",
    paragaph: "Make your website interactive and dynamic",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const FrontEndFooter = () => {
  return (
    <div className="md:flex gap-10 m-auto justify-center items-center lg:flex-row">
      {Cards.map((card, index) => (
        <motion.div
          key={index}
          className="md:border-[1px] w-[384px] h-[322px] mt-[100px] bg-[#FFFFF] rounded-sm shadow-md m-auto"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <div className="w-[336px] h-[189px] border-[1px] m-auto">
            {card.src}
          </div>
          <h6 className="ml-6 mt-4 font-bold text-[#101828] text-[24px]">
            {card.text}
          </h6>
          <p className="ml-6 mt-5 text-[#667085] text-[20px]">
            {" "}
            {card.paragaph}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default FrontEndFooter;

// import React from "react";
// import { motion } from "framer-motion";

// const Cards = [
//   {
//     src: "html.png",
//     text: "HTML & CSS",
//     paragraph: "Structure and style your web pages professionally",
//   },
//   {
//     src: "/Javascript.png",
//     text: "JavaScript",
//     paragraph: "Make your website interactive and dynamic",
//   },
//   {
//     src: "/responsive.png",
//     text: "Responsive Design",
//     paragraph: "Make your website interactive and dynamic",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   hover: { scale: 1.05, transition: { duration: 0.3 } },
// };

// const FrontEndFooter = () => {
//   return (
//     <div className="md:flex gap-10 m-auto justify-center items-center lg:flex-row">
//       {Cards.map((card, index) => (
//         <motion.div
//           key={index}
//           className="md:border-[1px] w-[384px] h-[322px] mt-[100px] bg-white rounded-sm shadow-md m-auto p-4"
//           variants={cardVariants}
//           initial="hidden"
//           whileInView="visible"
//           whileHover="hover"
//           viewport={{ once: true }}
//         >
//           <div className="w-[336px] h-[189px] border-[1px] m-auto flex items-center justify-center">
//             <img src={card.src} alt={card.text} className="w-24 h-24" />
//           </div>
//           <h6 className="ml-6 mt-4 font-bold text-[#101828] text-[24px]">
//             {card.text}
//           </h6>
//           <p className="ml-6 mt-5 text-[#667085] text-[20px]">
//             {card.paragraph}
//           </p>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default FrontEndFooter;
