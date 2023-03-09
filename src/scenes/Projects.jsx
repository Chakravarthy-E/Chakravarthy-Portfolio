import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { calculator } from "../assets";
import { rockpaperscissors } from "../assets";
import { todolist } from "../assets";

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
            MY <span className="text-red">PROJECTS</span>
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
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg border-white bg-white mb-1 m-1">
        <img className="w-full h-[240px]" src={calculator} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-sm font-righteous text-xl mb-2 text-deep-blue flex justify-center">Calculator App</div>
          <p className="text-gray-700 text-base">
          </p>
        </div>
        <div className="pt-1 pb-2 flex justify-center">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  hover:bg-red hover:text-white"><a href="#DEMO">Demo</a></span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ml-27 mb-2  hover:bg-red hover:text-white"><a href="#github">Github</a></span>
        </div>
      </div>


        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg border-white bg-white mb-1 m-1">
        <img className="w-full h-[240px]" src={rockpaperscissors} alt="rockpaparscissors" />
        <div className="px-6 py-4">
          <div className="font-sm  font-righteous text-xl mb-2 text-deep-blue flex justify-center">Rock Paper Scissors App</div>
          <p className="text-gray-700 text-base">
          </p>
        </div>
        <div className="pt-1 pb-2 flex justify-center">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-red hover:text-white"><a href="#DEMO">Demo</a></span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ml-27 mb-2 hover:bg-red hover:text-white"><a href="#github">Github</a></span>
        </div>
      </div>

        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg border-white bg-white mb-1 m-1">
        <img className="w-full h-[240px]" src={todolist} alt="todolist" />
        <div className="px-6 py-4">
          <div className="font-sm font-righteous text-xl mb-2 text-deep-blue flex justify-center">Todo List App</div>
          <p className="text-gray-700 text-base">
          </p>
        </div>
        <div className="pt-1 pb-2 flex justify-center">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-red hover:text-white"><a href="#DEMO">Demo</a></span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ml-27 mb-2 hover:bg-red hover:text-white"><a href="#github">Github</a></span>
        </div>
      </div>
          {/**row 2 */}
     
        {/**row 3 */}
       
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
