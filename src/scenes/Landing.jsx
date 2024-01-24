import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";

const Landing = ({ setSelectedPage }) => {
  const name = ["C", "H", "A", "K", "R", "A", "V", "A", "R", "T", "H", "Y"];
  const profession = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-[100vh] py-5"
    >
      <div className="z-30 flex flex-col items-center justify-center space-y-6 text-center h-full">
        <div className="mb-6">
          <div>
            {name.map((el, i) => (
              <motion.span
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mont font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}
              </motion.span>
            ))}
          </div>

          <div>
            {profession.map((el, i) => (
              <motion.span
                className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-mont font-semibold text-purple uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex animate-bounce text-purple  items-end justify-end">
        <FaAngleDown size={35} />
      </div>
    </section>
  );
};

export default Landing;
