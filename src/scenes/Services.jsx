import React from "react";
import { services } from "../utils/service";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div id="services" className="py-4">
      <p className=" text-center font-bold text-4xl py-14 uppercase">
        MY <span className="text-purple">Services</span>
      </p>
      <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-3 sm:grid-cols-2 grid-col-1 m-2">
        {services.map((service) => (
          <motion.div
            key={service}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="max-w-md mx-auto px-6 py-4 w-full  border border-purple rounded-md shadow-lg overflow-hidden my-5 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out hover:shadow-xl"
          >
            <h1 className="text-center text-2xl font-semibold mb-3 ">
              {service.title}
            </h1>
            <p className="text-base text-center text-gray-500 ">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
