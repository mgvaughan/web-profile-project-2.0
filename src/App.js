import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/navbar";
import Landing from "./scenes/landing";
import About from "./scenes/about";
import Skills from "./scenes/skills";
import Projects from "./scenes/projects";
import Contact from "./scenes/contact";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const navbar = document.getElementById("navbar")
    const sticky = navbar.offsetTop;
    const handleScroll = () => {
      if (window.scrollY >= sticky) {
        setIsTopOfPage(isTopOfPage);
        document.getElementById("navbar").classList.add("sticky");
      } else {
        document.getElementById("navbar").classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Landing setSelectedPage={setSelectedPage} />
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
