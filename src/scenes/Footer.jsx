import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-80 bg-black pt-10flex flex-col items-center">
      <div className="w-10/12 mx-auto text-center">
        <div className="flex justify-start">
          <SocialMediaIcons />
        </div>
        <div className="text-start">
          <p className="font-righteous font-semibold text-3xl text-purple">
            CHAKRAVARTHY E
          </p>
          <p className="font-righteous text-xl text-white">
          <span className="text-purple">Mail :</span>  chakravarthy.8328@gmail.com
          </p>
          <p className="font-righteous text-xl text-white ">
          <span className="text-purple">Location :</span>  Puttaparthi, Andhra Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
