import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { menuIcon } from "../assets";
import SocialMediaIcons from "../components/SocialMediaIcons";
import "./landing.css"
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
          <p className="text-4xl font-righteous tracking-wider z-10 text-center md:text-start text-purple  ml-[-1%] transform h-7 bg-blue-400 w-1/5 hover:bg-blue-600 transition duration-500 hover:scale-125 mb-4">
            CHAKRAVARTHY<span className="text-lightgreen hover:text-name ml-4 text-purple">E</span>
          </p>
          <p className="text-1xl font-righteous tracking-wider z-10 text-center md:text-start text-white">Full Stack Developer</p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start font-righteous tracking-wide">
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
            className="bg-white text-deep-blue rounded-md py-3 px-7 font-semibold
           hover:bg-white hover:text-purple  transition duration-500 font-righteous "
            onClick={() =>
              setSelectedPage("Contact")
            } /**change here contact to Conctact if error occurs */
            href="#contact"
          >
            CONTACT ME
          </AnchorLink>

          <AnchorLink
            className="bg-white text-deep-blue rounded-md py-3 px-7 font-semibold
           hover:bg-white hover:text-purple  transition duration-500 font-righteous ml-3 hover:scale-10"
            /**change here contact to Conctact if error occurs */
            href="http://google.com/"
          >
            RESUME
          </AnchorLink>
     
        </motion.div>
        <motion.div
        className="flex mt-5 justify-center md:justify-start ml-1"
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
