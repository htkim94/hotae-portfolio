import Logo from "./Logo.tsx";
import NavItem from "./NavItem.tsx";

function Header({ appSections }: { appSections: (HTMLElement | null)[] }) {
  return (
    <header
      id="header"
      className="fixed w-full flex justify-between items-center px-10 py-6 bg-black text-white"
    >
      <Logo />
      <div className="flex gap-8 text-xl tracking-widest">
        <NavItem type="home" appSection={appSections[0]} />
        <NavItem type="about" appSection={appSections[1]} />
        <NavItem type="projects" appSection={appSections[2]} />
        <NavItem type="contact" appSection={appSections[3]} />
      </div>
    </header>
  );
}

export default Header;
