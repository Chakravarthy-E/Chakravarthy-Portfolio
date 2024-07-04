import React from "react";
import { constants } from "../utils/constants";

function About() {
  return (
    <section id="about" className="py-16 md:py-10">
      <div className="max-w-screen-xl mx-auto px-4 ">
        <h1 className=" text-white text-center font-bold text-4xl py-14 uppercase">
          <span className="text-purple">About</span>
        </h1>
        <div className=" text-white  flex flex-col items-center justify-center p-6">
          <h1 className="text-5xl font-bold mb-4 text-purple-500">
            Hey, I'm Chakravarthy
          </h1>
          <h2 className="text-2xl font-semibold mb-8 text-gray-400">
            FullStack Software Engineer from India
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl text-center mb-4  text-gray-400">
            As a professional software developer, I create amazing scalable web
            applications to make the internet a better place. Enthusiast with
            experience in production level technologies.
          </p>
          <p className="text-lg leading-relaxed max-w-2xl text-center mb-4 text-gray-400">
            I am 25 years old and have been a professional web developer for
            about 1 years now. The technologies I work with JavaScript a focus
            on React.js, Next.js, Node, and Express.
          </p>
        </div>
        <div className="mt-8 flex justify-center md:justify-center items-center">
          <a
            data-aos="zoom-out-up"
            className=" border border-purple rounded-md py-3 px-7 font-semibold hover:bg-white hover:text-purple shadow-md hover:shadow-purple transition duration-500 font-mont ml-3 hover:scale-10"
            href={constants.resume}
            download
          >
            RESUME
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
