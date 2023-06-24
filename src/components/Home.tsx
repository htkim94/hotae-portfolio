import Button from "./Button";
import { PageSections } from "../interfaces/PageSections.interface";

interface HomeProps {
  section: PageSections["item"]
}

function Home({ section }: HomeProps) {
  return (
    <section
      id="home"
      className="relative h-screen max-h-[45rem] md:max-h-[70rem] w-full bg-discord-800 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-between items-center gap-12 md:gap-20">
        <div className="flex flex-col justify-between items-center gap-10 text-white">
          <h1 className="relative w-max text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-ubuntu-mono font-bold uppercase">
            HELLO, MY NAME IS <span className="text-cyan-400">HOTAE KIM</span>.
          </h1>
          <div className="flex flex-col md:flex-row gap-3 text-lg md:text-2xl xl:text-3xl tracking-wider text-center">
            <h2>
              SOFTWARE ENGINEER<span className="hidden md:inline">,</span>
            </h2>
            <h2>
              FRONT END WEB DEVELOPER
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12">
          <Button section={section}>PROJECTS</Button>
          <Button isResume={true}>RESUME</Button>
        </div>
      </div>
      <div
        id="home-down-arrow"
        className="text-2xl md:text-3xl text-white rotate-90 absolute"
      >
        &gt;
      </div>
    </section>
  );
}

export default Home
