import Logo from "./Logo.tsx";
import NavItem from "./NavItem.tsx";
import { PageSections } from '../interfaces/PageSections.interface.ts';
import { ReactComponent as BurgerMenu } from '../assets/icons/burger-menu-svgrepo-com.svg';

interface HeaderProps {
  sections: PageSections["list"];
}

function Header({ sections }: HeaderProps) {
  return (
    <header
      id="header"
      className="fixed z-50 w-full flex justify-between items-center px-6 md:px-10 py-5 bg-discord-900 text-white"
    >
      <Logo section={sections[0]} />
      <div className="flex justify-between items-center lg:hidden w-9 h-9 text-cyan-400">
        <BurgerMenu />
      </div>
      <div className="hidden lg:flex gap-8 text-xl tracking-widest">
        <NavItem type="home" section={sections[0]} />
        <NavItem type="about" section={sections[1]} />
        <NavItem type="projects" section={sections[2]} />
        <NavItem type="contact" section={sections[3]} />
      </div>
    </header>
  );
}

export default Header;
