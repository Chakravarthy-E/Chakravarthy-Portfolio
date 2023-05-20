import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { HTML, postman,figma,github,git, netlify} from "../assets";
import { CSS } from "../assets";
import { JS } from "../assets";
import { mongoDB } from "../assets";
import { REACTLOGO } from "../assets";
import { nodejs } from "../assets";
import { MYSQL } from "../assets";
import { BOOTSTRAP } from "../assets";
import { tailwind } from "../assets";
import { express} from "../assets";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/**HEADER AND IMAGE SECTION*/}
      <div className="md:flex md:justify-between md:gap-16 mt-10">
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
            <p className="font-righteous font-semibold text-4xl mb-2 mt-7">
              MY TECHNICAL<span className="text-purple"> SKILLS</span>
            </p>
          </div>
        </motion.div>
        <div className="mt-20 md:mt-0">
          <div className="flex flex-wrap justify-evenly mt-5 md:justify-start my-10 gap-9">
            <img src={HTML} alt="html" />
            <img src={CSS} alt="css" />
            <img src={JS} alt="javaScript" />
            <img src={REACTLOGO} alt="react" />
            <img src={nodejs} alt="NodeJs" />
            <img src={mongoDB} alt="mongoDo" />
            <img src={MYSQL} alt="mySql" />
            <img src={express} alt="express" />
            <img src={BOOTSTRAP} alt="BootStrap" />
            <img src={tailwind} alt="tailwind" />
            <br />
            <img src={postman} alt="postman" />
            <img src={figma} alt="figma" />
            <img src={github} alt="github" />
            <img src={git} alt="git" />
            <img src={netlify} alt='netlify' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default MySkills;
