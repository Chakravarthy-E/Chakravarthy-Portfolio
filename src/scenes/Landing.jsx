import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import "./landing.css";

const Landing = ({ setSelectedPage }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["MERN STACK DEVELOPER","FRONTEND DEVELOPER", "BACKEND DEVELOPER"];
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
      className="flex flex-col items-center justify-center h-screen"
    >
      <div className="text-center">
        {/* Headings */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-1xl mt-[80px] font-righteous tracking-wider z-10 text-center md:text-start text-white">
            Hi, I'm
          </p>
          <motion.p
            className="text-4xl font-righteous tracking-wider z-10 text-center md:text-start text-purple ml-[-1%] transform h-7 bg-blue-400 w-1/5 hover:bg-blue-600 hover:scale-125 mb-4"
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
            className="text-sm font-righteous tracking-wider z-10 text-center md:text-start text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            key={currentWord}
          >
            {currentWord}
          </motion.p>
          <motion.p
            className="mt-3 mb-7 text-gray-500 text-sm text-center md:text-justify font-righteous tracking-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            A full-stack developer with a passion for creating innovative
            digital solutions. I have expertise in both front-end and back-end
            development, allowing me to build seamless web applications. From
            designing user-friendly interfaces to implementing efficient
            server-side logic, I bring a holistic approach to development. With
            experience in databases, version control, and deployment platforms,
            I deliver high-quality solutions. Let's collaborate to bring your
            ideas to life with cutting-edge technology and exceptional user
            experiences.
          </motion.p>
        </motion.div>
        {/* Call to Action */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <AnchorLink
            className="bg-white shadow-purple text-deep-blue rounded-md py-3 px-7 font-semibold hover:bg-white shadow-md hover:shadow-purple hover:text-purple transition duration-500 font-righteous"
            onClick={() => setSelectedPage("Contact")}
            href="#contact"
          >
            CONTACT ME
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start ml-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
