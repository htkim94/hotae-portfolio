import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { PageSections } from "./interfaces/PageSections.interface";

function App() {
  const [sections, setSections] = useState<PageSections["list"]>([]);
  
  useEffect(() => {
    const sectionIDs = ['home', 'about', 'projects', 'contact'];
    const querySections = sectionIDs.map(id => document.querySelector(`#${id}`));
    setSections([...querySections])
  }, [])

  return (
    <>
      <Header sections={sections} />
      <Home section={sections[2]} />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
