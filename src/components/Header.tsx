import Logo from "./Logo.tsx";
import NavItem from "./NavItem.tsx";
import { PageSections } from '../interfaces/PageSections.interface.ts';

interface HeaderProps {
  sections: PageSections["list"];
}

function Header({ sections }: HeaderProps) {
  return (
    <header
      id="header"
      className="fixed z-50 w-full flex justify-between items-center px-10 py-6 bg-black text-white"
    >
      <Logo section={sections[0]} />
      <div className="flex gap-8 text-xl tracking-widest">
        <NavItem type="home" section={sections[0]} />
        <NavItem type="about" section={sections[1]} />
        <NavItem type="projects" section={sections[2]} />
        <NavItem type="contact" section={sections[3]} />
      </div>
    </header>
  );
}

export default Header;
