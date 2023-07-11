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
                Hello, I'm <span className="text-purple">Chakravarthy</span>, and I am a full stack developer.
                With a strong passion for technology and problem-solving, I have
                completed a comprehensive full stack development course.
                Throughout my learning journey, I have gained expertise in both
                front-end and back-end development, allowing me to create robust
                and dynamic web applications. I have hands-on experience with
                modern web development technologies such as HTML, CSS,
                JavaScript, and popular frameworks like React.js for building
                interactive user interfaces. On the back-end, I am proficient in
                server-side programming languages such as Node.js and have
                worked with frameworks like Express.js to develop scalable and
                efficient APIs.
              </p>
            </div>
            <div className="mt-10 flex justify-start">
              <a
                id="button"
                className="bg-white text-deep-blue rounded-md py-3 px-7 font-semibold
           hover:bg-white sm:justify-center hover:text-purple shadow-md hover:shadow-purple transition duration-500 font-righteous ml-3 hover:scale-10"
                /**change here contact to Conctact if error occurs */
                href="https://drive.google.com/file/d/1Avn7I1nsQlRLJh1nZwS81u7FD4nTrreH/view?usp=sharing"
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
