import { Linkedin } from "../assets";
import { Instagram } from "../assets";
import { Github } from "../assets";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/chakravarthy-e-732569248/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin-link" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://www.instagram.com/chakrii7/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Instagram} alt="Instagram-link" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Chakravarthy-E"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="Github-link" />
     </a>
    </div>
  );
};
export default SocialMediaIcons;