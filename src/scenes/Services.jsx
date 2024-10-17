import React from "react";
import { services } from "../utils/service";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div id="services" className="py-4 md:py-14">
      <p className=" text-center font-bold text-4xl  uppercase">
        <span className="text-purple">Services</span>
      </p>
      <div className="grid lg:grid-cols-1 gap-1 md:grid-cols-1 sm:grid-cols-1 grid-col-1 m-2">
        {services.map((service) => (
          <motion.div
            key={service}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className=" mx-auto px-6 py-4 w-full border border-purple rounded-md shadow-lg overflow-hidden my-5 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out hover:shadow-xl"
          >
            <h1 className="text-center text-2xl font-semibold mb-3 ">
              {service.title}
            </h1>
            <p className="text-base text-center text-gray-400 ">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
