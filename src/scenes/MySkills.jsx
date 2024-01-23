import React from "react";
import { SkillsInfo } from "../utils/skillsInfo";

const MySkills = () => {
  return (
    <section id="skills" className="py-12 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 font-mont">
        <div className="md:flex md:justify-between md:items-center md:gap-16 mt-10">
          <div>
            <p className="font-mont  text-center font-bold text-4xl mb-5 mt-7">
              MY TECHNICAL<span className="text-purple"> SKILLS</span>
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-wrap justify-center items-center gap-2">
            {SkillsInfo.map((skill, index) => (
              <div
                key={index}
                className="flex justify-center w-56 items-center bg-purple rounded-lg px-3 py-3 space-x-3 mb-4 md:mb-0 md:w-1/4"
              >
                <img src={skill.image} alt={skill.name} className="w-10" />
                <p className="text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
