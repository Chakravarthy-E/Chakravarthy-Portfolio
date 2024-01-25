import React from "react";

import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import TypeWriter from "typewriter-effect";

const Landing = ({ setSelectedPage }) => {
  const name = [
    "C",
    "H",
    "A",
    "K",
    "R",
    "A",
    "V",
    "A",
    "R",
    "T",
    "H",
    "Y",
    " ",
    "E",
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

          <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-mont font-semibold text-purple uppercase">
            <TypeWriter
              options={{
                strings: [
                  "A Software Engineer",
                  "A Problem Solver",
                  "A Full Stack Developer",
                ],
                pauseFor: 1500,
                autoStart: true,
                loop: true,
              }}
            />
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
