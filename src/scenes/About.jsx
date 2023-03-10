import { motion } from "framer-motion";
import {profile_pic} from "../assets"
import AnchorLink from "react-anchor-link-smooth-scroll";


let About = () => {

        return(
            <section id="about" className="pt-38 pb-48 py-40">
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
                ABOUT <span className="text-red">ME</span>
              </p>
            </div>
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-10">
            <img
            src={profile_pic}
            alt="profile_pic"
            className="hover:filter transition duration-500 z-10 w-full 
              max-w-[200px] md:max-w-[400px] rounded-full "
          />
          </div>
          <div className="mt-10 mb-7 text-xl text-center md:text-start font-openSans tracking-wide">
            <p>Hello! I'm Chakravarthy ,</p>
          </div>
          <AnchorLink
          className="bg-gradient-rainblue text-deep-blue rounded-md py-3 px-7 font-semibold
         hover:bg-blue hover:text-white transition duration-500 font-righteous tracking-wider"
          /**change here contact to Conctact if error occurs */
          href="#resume"
        >
          RESUME
        </AnchorLink>
      </motion.div>
            </section>
        )

}
export default About