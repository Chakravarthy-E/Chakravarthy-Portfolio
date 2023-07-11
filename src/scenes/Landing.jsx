import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { hello } from "../assets";
import "./loading.css";

const Landing = ({ setSelectedPage }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = [
    "FULL STACK DEVELOPER",
    "FRONTEND DEVELOPER",
    "BACKEND DEVELOPER",
  ];
  const currentWord = words[currentWordIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      id="home"
      className="flex items-center justify-center h-screen"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-1xl mt-8 md:mt-0 font-righteous tracking-wider text-white">
            Hi, I'm
          </p>
          <motion.p
            className="text-4xl font-righteous tracking-wider text-purple ml-[-1%] transform h-7 bg-blue-400 w-1/5 hover:bg-blue-600 hover:scale-125 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            CHAKRAVARTHY
            <span className="text-lightgreen hover:text-name ml-4 text-purple">
              E
            </span>
          </motion.p>
          <motion.p
            className="text-sm font-righteous tracking-wider text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            key={currentWord}
          >
            {currentWord}
          </motion.p>
          <motion.p
            className="mt-3 mb-5 text-gray-500 text-sm md:text-justify font-righteous tracking-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            A passionate full-stack developer dedicated to
            creating exceptional web applications and delivering immersive user
            experiences. With a strong foundation in both front-end and back-end
            development, I strive to bring ideas to life through elegant code
            and innovative solutions.
          </motion.p>
          {/* Call to Action */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <AnchorLink
            id="button"
              className="bg-white shadow-purple w-50 text-deep-blue rounded-md py-3 px-7 font-semibold hover:text-purple font-righteous"
              onClick={() => setSelectedPage("Contact")}
              href="#contact"
            >
              CONTACT ME
            </AnchorLink>
          </motion.div>
          <motion.div
            className="flex justify-center md:justify-start mt-5 ml-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <SocialMediaIcons />
          </motion.div>
        </motion.div>
        {/* Image */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <img src={hello} alt="Hello Image" className="h-auto mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
