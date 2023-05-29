import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import * as assets from "../assets";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between  md:gap-16 mt-10">
        <motion.div
          className="md:w-1/3 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={variants}
        >
          <div>
            <p className="font-righteous font-semibold text-4xl mb-2 mt-7">
              MY TECHNICAL<span className="text-purple"> SKILLS</span>
            </p>
          </div>
        </motion.div>
        <div className="mt-20 md:mt-0 mx-auto">
          <div className="flex flex-wrap justify-evenly mt-5 md:justify-start my-10 gap-9">
            {/* Asset images */}
            <img src={assets.HTML} alt="html" />
            <img src={assets.CSS} alt="css" />
            <img src={assets.JS} alt="javaScript" />
            <img src={assets.REACTLOGO} alt="react" />
            <img src={assets.nodejs} alt="NodeJs" />
            <img src={assets.mongoDB} alt="mongoDo" />
            <img src={assets.MYSQL} alt="mySql" />
            <img src={assets.express} alt="express" />
            <img src={assets.BOOTSTRAP} alt="BootStrap" />
            <img src={assets.tailwind} alt="tailwind" />
            <br />
            <img src={assets.postman} alt="postman" />
            <img src={assets.figma} alt="figma" />
            <img src={assets.github} alt="github" />
            <img src={assets.git} alt="git" />
            <img src={assets.netlify} alt='netlify' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
