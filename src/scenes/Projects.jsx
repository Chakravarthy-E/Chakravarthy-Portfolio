import { motion } from "framer-motion";
import { ProjectsInfo } from "../utils/projectsInfo";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GoFileDirectory } from "react-icons/go";

const Projects = () => {
  return (
    <section id="projects" className="py-4 ">
      <div>
        <p className="font-mont text-center font-bold text-4xl py-14">
          MY <span className="text-purple">PROJECTS</span>
        </p>
      </div>

      {/* Projects */}
      <div className="flex flex-wrap justify-center m-2">
        {ProjectsInfo.map((project) => (
          <motion.div
            key={project.name}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="max-w-md mx-auto px-6 py-4 w-full md:w-[48%] border border-purple rounded-md shadow-lg overflow-hidden my-5 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out hover:shadow-xl"
          >
            <div className="flex font-mont justify-between items-center space-x-3 ">
              <button className="text-purple">
                <GoFileDirectory size={30} />
              </button>
              <div>
                <span className="inline-block bg-purple-500 rounded-lg  py-2 text-sm font-semibold hover:text-purple text-white mr-2 mb-1 hover:bg-purple-700">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink size={30} />
                  </a>
                </span>
                <span className="inline-block bg-purple-500 rounded-lg  py-2 text-sm font-semibold hover:text-purple text-white ml-2 mb-1 hover:bg-purple-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={30} />
                  </a>
                </span>
              </div>
            </div>
            <div className=" py-1">
              <div className="font-sm font-mont text-xl text-white text-start mb-2">
                {project.name}
              </div>
              <p className="text-gray-400 font-mont text-base">{project.description}</p>
            </div>
            <div className="font-sm font-mono flex items-end justify-end text-sm text-white text-end mb-2 px-4">
              {project.tech}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
