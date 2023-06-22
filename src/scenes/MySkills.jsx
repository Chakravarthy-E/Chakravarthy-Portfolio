import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { HTML, CSS, JS, REACTLOGO, nodejs, mongoDB, MYSQL, express, BOOTSTRAP, tailwind, postman, figma, github, git, netlify } from "../assets";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleSkillHover = (skill) => {
    setHoveredSkill(skill);
  };

  const skills = [
    { name: "HTML", image: HTML },
    { name: "CSS", image: CSS },
    { name: "JavaScript", image: JS },
    { name: "React", image: REACTLOGO },
    { name: "Node.js", image: nodejs },
    { name: "MongoDB", image: mongoDB },
    { name: "MySQL", image: MYSQL },
    { name: "Express", image: express },
    { name: "Bootstrap", image: BOOTSTRAP },
    { name: "Tailwind CSS", image: tailwind },
    { name: "Postman", image: postman },
    { name: "Figma", image: figma },
    { name: "GitHub", image: github },
    { name: "Git", image: git },
    { name: "Netlify", image: netlify },
  ];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-10">
        <motion.div
          className="md:w-1/3 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={variants}
        >
          <div>
            <p className="font-righteous  font-semibold text-4xl mb-2 mt-7">
              MY TECHNICAL<span className="text-purple"> SKILLS</span>
            </p>
          </div>
        </motion.div>
      </div>
      <div className="mt-20 md:mt-0 mx-auto">
        <div className="flex flex-wrap justify-evenly mt-5 md:justify-start my-10 gap-9">
          {/* Asset images */}
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative"
              onMouseEnter={() => handleSkillHover(skill.name)}
              onMouseLeave={() => handleSkillHover(null)}
            >
              <img src={skill.image} alt={skill.name} />
              {hoveredSkill === skill.name && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-purple text-white px-2 py-1 text-sm rounded-md">
                  {skill.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
