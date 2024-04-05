import { AboutInfo } from "../utils/aboutInfo";
import { IoMdSchool } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";
import { constants } from "../utils/constants";

const Timeline = () => {
  return (
    <section id="timeline" className="py-16 md:py-10">
      <div className="max-w-screen-xl mx-auto px-4 ">
        <h1 className=" text-white text-center font-bold text-4xl py-14 uppercase">
          My <span className="text-purple">Timeline</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-1/2">
            <h1 className="text-xl font-bold mb-1 text-white">Experience</h1>
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
                        <p className="text-sm font-semibold ">{exp.role}</p>
                        <p className="text-xs  font-semibold">{exp.duration}</p>
                      </div>
                      <p className="text-xs text-gray-200">{exp.description}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 ">
            <h1 className="text-xl font-bold mb-1 text-white">Education</h1>
            {AboutInfo.map((aboutme, index) => (
              <div key={index} className="space-y-4">
                {aboutme.education &&
                  Array.isArray(aboutme.education) &&
                  aboutme.education.map((exp, expIndex) => (
                    <div
                      key={expIndex}
                      data-aos="zoom-out-up"
                      className="border border-purple text-white px-5 py-3 rounded-lg mb-4"
                    >
                      <div className="flex items-center first-letter: justify-between">
                        <div className=" flex items-center  space-x-1 justify-center">
                          <IoMdSchool size={20} />
                          <p className=" font-bold">{exp.name}</p>
                        </div>
                        <p className=" font-semibold text-xs">{exp.duration}</p>
                      </div>
                      <p className="text-xs ">{exp.course}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center md:justify-end items-center">
          <a
            data-aos="zoom-out-up"
            className=" border border-purple  rounded-md py-3 px-7 font-semibold hover:bg-white hover:text-purple shadow-md hover:shadow-purple transition duration-500 font-mont ml-3 hover:scale-10"
            href={constants.resume}
            download
          >
            RESUME
          </a>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
