import { motion } from "framer-motion";
import { ProjectsInfo } from "../utils/projectsInfo";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-mont text-center  font-bold text-4xl mb-10 ">
            MY <span className="text-purple">PROJECTS</span>
          </p>
        </div>
      </motion.div>
      {/***Projects */}
      <div className="flex justify-center m-2">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {ProjectsInfo.map((project) => {
            return (
              <div className="max-w-md mx-auto w-[300px] bg-black rounded shadow-md shadow-purple border ml-1 border-gray-800 overflow-hidden md:max-w-2xl my-5 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
                <div className="image-container relative">
                  <img
                    className="w-[332px] h-[240px] object-cover"
                    src={project.image}
                    alt="Calculator App"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-sm font-mont text-xl text-white flex justify-center">
                    {project.name}
                  </div>
                  <p className="text-gray-700 text-base"></p>
                </div>
                <div className="pt-1 pb-2 flex font-mont justify-center">
                  <span className="inline-block bg-black rounded-lg px-5 py-2 text-sm font-semibold text-white mr-2 mb-1   hover:text-purple hover:border border-purple">
                    <a href={project.demo}>
                      <span>Demo</span>
                    </a>
                  </span>
                  <span className="inline-block bg-black rounded-lg px-5 py-2 text-sm font-semibold text-white mr-2 ml-27 mb-1  hover:text-purple hover:border border-purple">
                    <a href={project.github}>
                      <span>Github</span>
                    </a>
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
