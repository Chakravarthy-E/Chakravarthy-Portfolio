import React from "react";
import { SkillsInfo } from "../utils/skillsInfo";

const MySkills = () => {
  return (
    <section id="skills" className="py-4 md:py-14">
      <div className="max-w-screen-xl mx-auto px-4 ">
        <div className="md:flex md:justify-center md:items-center md:gap-16 mt-10">
          <div>
            <p className="font-mont text-center font-bold text-4xl py-14 mt-7">
              <span className="text-purple">TECHNICAL SKILLS</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-3 md:grid-cols-3 gap-2">
            {SkillsInfo.map((skill, index) => (
              <div
                key={index}
                data-aos="zoom-out-up"
                className="flex justify-center lg:w-20 xs:w-20  items-center rounded-lg px-3 py-3 space-x-3 mb-4 md:mb-0 md:w-1/4"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-20 "
                  title={skill.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
