import Button from "./Button";
import { PageSections } from "../interfaces/PageSections.interface";

interface HomeProps {
  section: PageSections["item"]
}

function Home({ section }: HomeProps) {
  return (
    <section
      id="home"
      className="relative h-screen max-h-[70rem] w-full bg-slate-500 flex flex-col justify-center items-center"
      // ref={el => appSections[0] = el}
    >
      <div className="flex flex-col justify-between items-center gap-20">
        <div className="flex flex-col justify-between items-center gap-10">
          <h1 className="relative w-max md:text-5xl lg:text-6xl xl:text-7xl font-ubuntu-mono font-bold uppercase">
            HELLO, MY NAME IS HOTAE KIM.
          </h1>
          <h2 className="md:text-2xl xl:text-3xl tracking-wider">
            SOFTWARE ENGINEER, FRONT END WEB DEVELOPER
          </h2>
        </div>
        <div className="flex justify-between gap-12">
          <Button section={section}>PROJECTS</Button>
          <Button isResume={true}>RESUME</Button>
        </div>
      </div>
      <div
        id="home-down-arrow"
        className="text-4xl rotate-90 absolute"
      >
        &gt;
      </div>
    </section>
  );
}

export default Home
