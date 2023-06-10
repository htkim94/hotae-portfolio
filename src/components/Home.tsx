function Home(
  // { appSections }: { appSections: (HTMLElement | null)[] }
) {
  return (
    <section
      id="home"
      className="h-screen w-full bg-slate-500 flex flex-col justify-center items-center"
      // ref={el => appSections[0] = el}
    >
      <div className="flex flex-col justify-between items-center gap-10">
        <h1 className="relative w-max text-6xl font-ubuntu-mono font-bold uppercase">
          HELLO, MY NAME IS HOTAE KIM.
        </h1>
        <h2 className="text-4xl tracking-wider">
          WELCOME TO MY WEBSITE!
        </h2>
      </div>
    </section>
  );
}

export default Home
