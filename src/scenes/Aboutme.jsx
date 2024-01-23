import { AboutInfo } from "../utils/aboutInfo";

const AboutMe = () => {
  return (
    <section id="about" className="py-8 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 font-mont">
        <h1 className=" text-white  text-center font-bold text-4xl mb-5 uppercase">
          About <span className="text-purple">Me</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-1/2">
            <h1 className="text-xl font-bold mb-1 text-white">Experience</h1>
            {AboutInfo.map((aboutme, index) => (
              <div key={index} className="space-y-4">
                {aboutme.experience &&
                  Array.isArray(aboutme.experience) &&
                  aboutme.experience.map((exp, expIndex) => (
                    <div
                      key={expIndex}
                      className="bg-purple px-5 py-3 space-y-1 rounded-lg mb-4 md:mb-0"
                    >
                      <p className=" text-xl font-bold">{exp.company}</p>
                      <div className=" flex justify-between items-center">
                        <p className="text-sm ">{exp.role}</p>
                        <p className="text-xs ">{exp.duration}</p>
                      </div>
                      <p className="text-xs text-gray-200">
                        {exp.description}
                      </p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 font-mont">
            <h1 className="text-xl font-bold mb-1 text-white">Education</h1>
            {AboutInfo.map((aboutme, index) => (
              <div key={index} className="space-y-4">
                {aboutme.education &&
                  Array.isArray(aboutme.education) &&
                  aboutme.education.map((exp, expIndex) => (
                    <div
                      key={expIndex}
                      className="bg-purple text-white px-5 py-3 rounded-lg mb-4"
                    >
                      <p className=" font-bold">{exp.name}</p>
                      <p className="text-xs ">{exp.course}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center md:justify-end items-center">
          <a
            id="button"
            className="bg-white text-deep-blue rounded-md py-3 px-7 font-semibold hover:bg-white hover:text-purple shadow-md hover:shadow-purple transition duration-500 font-mont ml-3 hover:scale-10"
            href="https://drive.google.com/file/d/17jP76qCEKDuQjeD-u7SjrIlyZys4rwc5/view?usp=sharing"
            download
          >
            RESUME
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
