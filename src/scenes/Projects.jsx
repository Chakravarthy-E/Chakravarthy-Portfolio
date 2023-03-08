import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { project1 } from "../assets";
import { project2 } from "../assets";
import { project3 } from "../assets";
import { project4 } from "../assets";
import { project5 } from "../assets";
import { project6 } from "../assets";
import { project7 } from "../assets";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const projectVarient = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue `;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVarient} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
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
          <p className="font-righteous font-semibold text-4xl">
            MY <span className="text-red-500">PROJECTS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          commodi porro enim asperiores mol.
        </p>
      </motion.div>
      {/***Projects */}
      <div className="flex justify-center m-2">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-red-600
        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <img src={project1} alt="project1" />
          <img src={project2} alt="project2" />
          {/**row 2 */}
          <img src={project3} alt="project3" />
          <img src={project4} alt="project4" />
          <img src={project5} alt="project5" />
        {/**row */}
          <img src={project6} alt="project6" />
          <img src={project7} alt="project7" />
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
