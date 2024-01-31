import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-80  pt-10 flex flex-col items-center">
      <div className="w-10/12 mx-auto text-center">
        <div className="text-start mt-10 flex justify-center items-center flex-col space-y-2">
          <p className="font-mont text-xl font-semibold  text-purple">CHAKRAVARTHY E</p>
          <div className="font-mont text-base text-white flex  items-center space-x-2">
            <MdOutlineEmail size={35} />
            <span>chakravarthy.8328@gmail.com</span>
          </div>
          <div className="font-mont text-base text-white flex align-middle  items-center space-x-2">
            <CiLocationOn size={35} />
            <span>Puttaparthy, Andhra Pradesh</span>
          </div>
          <div className="flex justify-start">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
