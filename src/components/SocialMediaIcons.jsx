import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="  hover:text-purple"
        href="https://www.linkedin.com/in/chakravarthy-e/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={30} />
      </a>

      <a
        className=" hover:text-purple"
        href="https://github.com/Chakravarthy-E"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={30} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
