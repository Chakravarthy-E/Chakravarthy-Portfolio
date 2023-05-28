import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-black pt-10 flex flex-col items-center">
      <div className="w-10/12 mx-auto text-center">
        <div className="flex justify-center">
          <SocialMediaIcons />
        </div>
        <div>
          <p className="font-righteous font-semibold text-3xl text-purple">
            CHAKRAVARTHY E
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
