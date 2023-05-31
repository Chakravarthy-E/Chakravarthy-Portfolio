import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import NavBar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import {motion} from "framer-motion"
import Footer from "./scenes/Footer"
import Contact from "./scenes/Contact"
import AboutMe from "./scenes/Aboutme";
import Loading from "./scenes/Loading";


function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.screenY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },2000)
  },[])
  if(isLoading){
    return <Loading />
  }
  return (
    <div className="app">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <AboutMe setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>



      <LineGradient />

      <div className="w-5/6 mx-auto md:h-full">
      <motion.div
      margin="0 0 -200px 0"
      amount="all"
      onViewportEnter={() => setSelectedPage("skills")}
    >
        <MySkills />
      </motion.div>
      </div>
      <LineGradient />


      <div className="w-5/6 mx-auto">
      <motion.div
      margin="0 0 -200px 0"
      amount="all"
      onViewportEnter={() => setSelectedPage("Projects")}
    >
        <Projects />
      </motion.div>
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
        <Contact />
        </motion.div>
      </div>
      <LineGradient />
      <Footer />

    </div>
  );
}

export default App;
