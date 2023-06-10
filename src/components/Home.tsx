function Home(
  // { appSections }: { appSections: (HTMLElement | null)[] }
) {
  return (
    <section
      id="home"
      className="h-screen max-h-home-hero w-full bg-slate-500 flex flex-col justify-center items-center"
      // ref={el => appSections[0] = el}
    >
      <div className="flex flex-col justify-between items-center gap-10">
        <h1 className="relative w-max text-7xl font-ubuntu-mono font-bold uppercase">
          HELLO, MY NAME IS HOTAE KIM.
        </h1>
        <h2 className="text-3xl tracking-wider">
          SOFTWARE ENGINEER, FRONT END WEB DEVELOPER
        </h2>
      </div>
    </section>
  );
}

export default Home
