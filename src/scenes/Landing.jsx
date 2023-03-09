import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { Profiler } from "react";
// import { profile } from "../assets";
import { menuIcon } from "../assets";
import SocialMediaIcons from "../components/SocialMediaIcons";
const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/**Image */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div>
            <img
              src={menuIcon}
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full 
                max-w-[400px] md:max-w-[600px] "
            />
          </div>
        ) : (
          <img
            src={menuIcon}
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full 
              max-w-[400px] md:max-w-[600px] "
          />
        )}
      </div>
      {/**Main */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/**Headings */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-4xl font-righteous tracking-wider z-10 text-center md:text-start text-blue  ml-[-1%]">
            CHAKRAVARTHY<span className="text-lightgreen hover:text-name ml-4 text-blue">E</span>
          </p>
          <p className="text-2xl font-righteous tracking-wider z-10 text-center md:text-start text-h1">Full Stack <span className="text-red">Developer</span></p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start font-openSans tracking-wide">
            A passionate individual who always thrives to work on end to end
            products which develop sustainable and scalable social and technical
            systems to create impact
          </p>
        </motion.div>
        {/**Call to Action */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-md py-3 px-7 font-semibold
           hover:bg-blue hover:text-white transition duration-500 font-righteous"
            onClick={() =>
              setSelectedPage("Contact")
            } /**change here contact to Conctact if error occurs */
            href="#contact"
          >
            CONTACT ME
          </AnchorLink>
     
        </motion.div>
        <motion.div
        className="flex mt-5 justify-center md:justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        >
        <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};
export default Landing;
