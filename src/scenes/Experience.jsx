import { AboutInfo } from "../utils/aboutInfo";
import { IoMdSchool } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";
import { constants } from "../utils/constants";

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-10">
      <div className="max-w-screen-xl mx-auto px-4 ">
        <h1 className=" text-white text-center font-bold text-4xl py-14 uppercase">
          <span className="text-purple">Experience</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10">
          <div className="w-full">
            {AboutInfo.map((aboutme, index) => (
              <div key={index} className="space-y-4">
                {aboutme.experience &&
                  Array.isArray(aboutme.experience) &&
                  aboutme.experience.map((exp, expIndex) => (
                    <div
                      key={expIndex}
                      data-aos="flip-left"
                      className=" border border-purple px-5 py-3 space-y-1 rounded-lg mb-4 md:mb-0"
                    >
                      <div className="flex items-center  space-x-1">
                        <FaBuilding size={20} />
                        <p className=" text-xl font-bold">{exp.company}</p>
                      </div>
                      <div className=" flex justify-between items-center">
                        <p className=" font-semibold ">{exp.role}</p>
                        <p className=" font-semibold">{exp.duration}</p>
                      </div>
                      <p className="text-gray-400">{exp.description}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
