import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { HTML } from "../assets";
import { CSS } from "../assets";
import { JS } from "../assets";
import { REACTLOGO } from "../assets";
import { MONGODB } from "../assets";
import { NODEJS } from "../assets";
import { MYSQL } from "../assets";
import { BOOTSTRAP } from "../assets";
import { TAILWINDCSS } from "../assets";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/**HEADER AND IMAGE SECTION*/}
      <div className="md:flex md:justify-between md:gap-16 mt-20">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <p className="font-righteous font-semibold text-4xl mb-2 mt-[-20%] ml-[5%]">
              MY TECHNICAL<span className="text-purple"> SKILLS</span>
            </p>
          </div>
        </motion.div>
        <div className="mt-20 md:mt-0">
          <div className="flex flex-wrap mt-20 justify-center md:justify-start my-10 gap-9">
            <img src={HTML} alt="html" />
            <img src={CSS} alt="css" />
            <img src={JS} alt="javaScript" />
            <img src={REACTLOGO} alt="react" />
            <img src={MONGODB} alt="mongoDo" />
            <img src={NODEJS} alt="NodeJs" />
            <img src={MYSQL} alt="mySql" />
            <img src={BOOTSTRAP} alt="BootStrap" />
            <img src={TAILWINDCSS} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default MySkills;
