import { motion } from "framer-motion";
import { ProjectsInfo } from "../utils/projectsInfo";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-4 ">
      <div>
        <p className="font-mont text-center font-bold text-4xl mb-8">
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
            className="max-w-md mx-auto w-full md:w-[48%] bg-black  rounded-md shadow-lg overflow-hidden my-5 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out hover:shadow-xl"
          >
            <div className="relative">
              <img
                className="w-full h-48 object-cover rounded-t-md"
                src={project.image}
                alt={project.name}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
            </div>
            <div className="px-6 py-4">
              <div className="font-sm font-mont text-xl text-white text-center mb-2">
                {project.name}
              </div>
              <p className="text-gray-700 text-base">{project.description}</p>
            </div>
            <div className="pt-1 pb-2 flex font-mont justify-center">
              <span className="inline-block bg-purple-500 rounded-lg px-5 py-2 text-sm font-semibold hover:text-purple text-white mr-2 mb-1 hover:bg-purple-700">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink size={30} />
                </a>
              </span>
              <span className="inline-block bg-purple-500 rounded-lg px-5 py-2 text-sm font-semibold hover:text-purple text-white ml-2 mb-1 hover:bg-purple-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
                </a>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
