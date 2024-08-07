import { useState, useEffect } from "react";
import NavBar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import { motion } from "framer-motion";
import Footer from "./scenes/Footer";
import Contact from "./scenes/Contact";
import Services from "./scenes/Services";
import Experience from "./scenes/Experience";
import About from "./scenes/About";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.screenY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("about")}
        >
          <About setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("services")}
        >
          <Services setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>

      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("experience")}
        >
          <Experience setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>

      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <MySkills />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("Projects")}
        >
          <Projects />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
