import { motion } from "framer-motion";
import { rockpaper } from "../assets";
import { github } from "../assets";
import { screen } from "../assets";
import { car_rental } from "../assets";
import { shopping_cart } from "../assets";
import { calender } from "../assets";
import { crm } from "../assets";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue `;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
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
          <p className="font-righteous font-semibold text-4xl mb-10 mt-[-10%]">
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
          {/**Car Rental App */}
          <div className="max-w-md mx-auto w-[300px] bg-black rounded shadow-md shadow-purple border ml-1 border-gray-800 overflow-hidden md:max-w-2xl my-5 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
            <div className="image-container relative">
              <img
                className="w-[332px] h-[240px] object-cover"
                src={car_rental}
                alt="Calculator App"
              />

            </div>
            <div className="px-6 py-4">
              <div className="font-sm font-righteous text-xl text-white flex justify-center">
                Car Rental App
              </div>
              <p className="text-gray-700 text-base"></p>
            </div>
            <div className="pt-1 pb-2 flex justify-center">
              <span className="inline-block bg-black rounded-lg px-5 py-2 text-sm font-semibold text-white mr-2 mb-1   hover:text-purple hover:border border-purple">
                <a href="#DEMO">
                  <img className="w-[20px]" src={screen} alt="" />
                </a>
              </span>
              <span className="inline-block bg-black rounded-lg px-5 py-2 text-sm font-semibold text-white mr-2 ml-27 mb-1  hover:text-purple hover:border border-purple">
                <a href="https://github.com/Chakravarthy-E/car_rental_app">
                  <img className="w-[20px]" src={github} alt="" />
                </a>
              </span>
            </div>
          </div>
          {/**CRM APP */}
          <div className="max-w-md mx-auto w-[300px] bg-black rounded shadow-md shadow-purple border ml-1 border-gray-800 overflow-hidden md:max-w-2xl my-5 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
            <div className="image-container relative">
              <img
                className="w-[332px] h-[240px] object-cover"
                src={crm}
                alt="Calculator App"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-sm font-righteous text-xl text-white flex justify-center">
                CRM App
              </div>
              <p className="text-gray-700 text-base"></p>
            </div>
            <div className="pt-1 pb-2 flex justify-center">
              <span className="inline-block bg-black rounded-lg px-5 py-2 text-sm font-semibold text-white mr-2 mb-1   hover:text-purple hover:border border-purple">
                <a href="https://crm-plus.netlify.app/">
                  <img className="w-[20px]" src={screen} alt="" />
                </a>
              </span>
              <span className="inline-block bg-black rounded-lg px-5 py-2 text-sm font-semibold text-white mr-2 ml-27 mb-1  hover:text-purple hover:border border-purple">
                <a href="https://github.com/Chakravarthy-E/customer_relationship_management_app">
                  <img className="w-[20px]" src={github} alt="" />
                </a>
              </span>
            </div>
          </div>
          {/**Rock paper scissors */}
          <div className="max-w-md mx-auto w-[300px] bg-black border shadow-md shadow-purple border-gray-800 rounded ml-1  overflow-hidden md:max-w-2xl my-5 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
            <div className="image-container relative">
              <img
                className="w-[332px] h-[240px] object-cover"
                src={rockpaper}
                alt="rockpaparscissors"
              />
              
            </div>
            <div className="px-6 py-4">
              <div className="font-sm text-center font-righteous text-xl  text-white flex justify-center">
                Rock Paper Scissors
              </div>
              <p className="text-gray-700 text-base"></p>
            </div>
            <div className="pt-1 pb-2 flex justify-center">
              <span className="inline-block bg-black rounded-lg px-5 py-2 text-sm font-semibold text-white mr-2 mb-1 :text-purple hover:border border-purple">
                <a href="https://rockpaperscissorsusinghtmlcssjs.netlify.app/">
                  <img className="w-[20px]" src={screen} alt="" />
                </a>
              </span>
              <span className="inline-block bg-black rounded-lg px-5 py-2 text-sm font-semibold text-white mr-2 ml-27 mb-1 hover:text-purple hover:border border-purple">
                <a href="https://github.com/Chakravarthy-E/Rock_Paper_Scissors_JS">
                  <img className="w-[20px]" src={github} alt="" />
                </a>
              </span>
            </div>
          </div>

          {/**shopping cart */}
          <div className="max-w-md mx-auto w-[300px] bg-black shadow-md  shadow-purple rounded border border-gray-800 ml-1  overflow-hidden md:max-w-2xl my-5 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
            <div className="image-container relative">
              <img
                className="w-[332px] h-[240px] object-cover"
                src={shopping_cart}
                alt="todolist"
              />
           
            </div>
            <div className="px-6 py-4">
              <div className="font-sm text-center font-righteous text-xl text-white flex justify-center">
                Shopping Cart
              </div>
              <p className="text-gray-700 text-base"></p>
            </div>
            <div className="pt-1 pb-2 flex justify-center">
              <span className="inline-block bg-black rounded-lg px-5 py-2 text-sm font-semibold text-white mr-2 mb-1 hover:text-purple hover:border border-purple">
                <a href="https://simple-shopping-cart-peach.vercel.app/">
                  <img className="w-[20px]" src={screen} alt="" />
                </a>
              </span>
              <span className="inline-block bg-black rounded-lg px-5 py-2 text-sm font-semibold text-white mr-2 ml-27 mb-1 hover:text-purple hover:border border-purple">
                <a href="https://github.com/Chakravarthy-E/simple_shopping_cart">
                  <img className="w-[20px]" src={github} alt="" />
                </a>
              </span>
            </div>
          </div>
          {/**calender */}
          <div className="max-w-md mx-auto w-[300px] bg-black shadow-md  shadow-purple rounded border border-gray-800 ml-1  overflow-hidden md:max-w-2xl my-5 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
            <div className="image-container relative">
              <img
                className="w-[332px] h-[240px] object-cover"
                src={calender}
                alt="todolist"
              />
              
            </div>
            <div className="px-6 py-4">
              <div className="font-sm text-center font-righteous text-xl text-white flex justify-center">
                Calender
              </div>
              <p className="text-gray-700 text-base"></p>
            </div>
            <div className="pt-1 pb-2 flex justify-center">
              <span className="inline-block bg-black rounded-lg px-5 py-2 text-sm font-semibold text-white mr-2 mb-1 hover:text-purple hover:border border-purple">
                <a href="https://calender-blush.vercel.app/">
                  <img className="w-[20px]" src={screen} alt="" />
                </a>
              </span>
              <span className="inline-block bg-black rounded-lg px-5 py-2 text-sm font-semibold text-white mr-2 ml-27 mb-1 hover:text-purple hover:border border-purple">
                <a href="https://github.com/Chakravarthy-E/calender">
                  <img className="w-[20px]" src={github} alt="" />
                </a>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
