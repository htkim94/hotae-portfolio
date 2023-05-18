import { useRef } from "react";
import Header from "./components/Header"

function App() {
  const appSections = useRef<(HTMLElement | null)[]>([]);

  return (
    <>
      <Header appSections={appSections.current} />
      <div 
        className="h-96 py-28 px-28"
        ref={el => appSections.current[0] = el}
      >
        HOME
      </div>
      <div
        className="h-96 py-28"
        ref={el => appSections.current[1] = el}
      >
        ABOUT
      </div>
      <div ref={el => appSections.current[2] = el}>PROJECTS</div>
      <div ref={el => appSections.current[3] = el}>CONTACT</div>
    </>
  )
}

export default App
