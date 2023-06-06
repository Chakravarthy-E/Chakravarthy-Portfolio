import { useState, useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { coding } from "../assets";
import {desktop} from "../assets"
import SocialMediaIcons from "../components/SocialMediaIcons";
import "./landing.css";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["FULL STACK DEVELOPER","WEB DEVELOPER"];
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
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* Image */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-30">
        {isAboveMediumScreens ? (
          <div>
            <img
              src={coding}
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full 
                max-w-[400px] md:max-w-[600px] "
            />
          </div>
        ) : (
          <img
            src={coding}
            alt="profile"
            className=" hover:filter hover:saturate-200 transition duration-500 z-10 w-full 
              max-w-[400px] md:max-w-[600px] "
          />
        )}
      </div>
      {/* Main */}
      <div className="z-30 basis-2/5 mt-12 md:mt-20">
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
          <p className="text-1xl mt-[-1] font-righteous tracking-wider z-10 text-center md:text-start text-white">
            Hi, I'm
          </p>
          <motion.p
            className="text-4xl font-righteous tracking-wider z-10 text-center md:text-start text-purple  ml-[-1%] transform h-7 bg-blue-400 w-1/5 hover:bg-blue-600 hover:scale-125 mb-4"
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
          >
            {currentWord}
          </motion.p>
          <motion.p
            className="mt-3 mb-7 text-gray-600 text-sm text-center md:text-justify font-righteous tracking-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            As a full-stack developer, I am passionate about creating impactful
            end-to-end products. I have expertise in both front-end and back-end
            development, utilizing technologies like HTML, CSS, JavaScript,
            React, Node.js, and databases such as MongoDB and MySQL.
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
            className="bg-white text-deep-blue rounded-md py-3 px-7 font-semibold
           hover:bg-white shadow-md hover:shadow-purple hover:text-purple  transition duration-500 font-righteous "
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
