import { useRef, useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  // const appSections = useRef<(HTMLElement | null)[]>([]);
  const [sections, setSections] = useState<(Element | null)[]>([]);
  
  useEffect(() => {
    // console.log(appSections)
    // if (appSections.current.length === 4) setSections(appSections.current);
    const sectionIDs = ['home', 'about', 'projects', 'contact'];
    const querySections = sectionIDs.map(id => document.querySelector(`#${id}`));
    setSections([...querySections])
  }, [])

  return (
    <>
      <Header appSections={sections} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
    // <>
    //   <Header appSections={appSections.current} />
    //   <Home
    //     appSections={appSections.current}
    //     ref={(el: (HTMLElement | null)) => appSections.current[0] = el}
    //   />
    //   <About
    //     appSections={appSections.current}
    //     ref={el => appSections.current[1] = el}
    //   />
    //   <Projects
    //     appSections={appSections.current}
    //     ref={el => appSections.current[2] = el}
    //   />
    //   <Contact
    //     appSections={appSections.current}
    //     ref={el => appSections.current[3] = el}
    //   />
    // </>
  )
}

export default App
