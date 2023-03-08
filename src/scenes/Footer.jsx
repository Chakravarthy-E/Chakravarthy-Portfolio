import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-skyblue pt-10">
      <div className="w-10/12 mx-auto ">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-righteous font-semibold text-3xl text-black">
            CHAKRAVARTHY E
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
