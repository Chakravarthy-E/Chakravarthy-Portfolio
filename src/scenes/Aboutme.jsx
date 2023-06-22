import { motion } from "framer-motion";
import { coding } from "../assets";
const AboutMe = () => {
  return (
    <section
      id="about"
      className="pt-20 pb-24 mt-5 ml mb-[-20%] flex justify-center"
    >
      <div className="md:flex md:justify-center md:items-center md:gap-16 px-10 md:px-0">
        <div className="md:w-1/2">
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
            <div>
              <p className="font-righteous font-semibold text-4xl mb-2">
                ABOUT <span className="text-purple">ME</span>
              </p>
            </div>
            <div className="mt-10 text-gray-500 text-justify">
              <p className="mb-6 font-righteous tracking-normal">
               Hello, I'm <span className="text-purple">Chakravarthy</span>,
                A Full Stack Developer with a passion for
                building innovative web applications. I completed a
                comprehensive Full Stack Development course that equipped me
                with the skills and knowledge to create dynamic and
                user-friendly websites. In addition to my technical expertise, I
                also hold an MBA degree, which provides me with a unique blend
                of business acumen and technical proficiency. This combination
                allows me to approach projects with a strategic mindset and
                deliver solutions that align with both user needs and business
                objectives. With a strong foundation in HTML, CSS, JavaScript,
                and various frameworks like React and Node.js, I am proficient
                in creating responsive and scalable web applications. My
                experience includes working with databases like MongoDB and
                MySQL, as well as utilizing modern development tools and
                libraries.
              </p>
            </div>
            <div className="mt-10 flex justify-start">
              <a
                className="bg-white text-deep-blue rounded-md py-3 px-7 font-semibold
           hover:bg-white sm:justify-center hover:text-purple shadow-md hover:shadow-purple transition duration-500 font-righteous ml-3 hover:scale-10"
                /**change here contact to Conctact if error occurs */
                href="https://drive.google.com/file/d/1XKJaoKPdM39n9NQTzL4TdX2eyUVCrxbY/view?usp=sharing"
                download
              >
                RESUME
              </a>
            </div>
          </motion.div>
        </div>
        <div className="mt-16 md:mt-0 md:w-1/2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/**
             */}
            <img src={coding} alt="Profile" className="w-96 h-auto shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
