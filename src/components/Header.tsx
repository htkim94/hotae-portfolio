import { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import Logo from "./Logo.tsx";
import NavItem from "./NavItem.tsx";
import { PageSections } from '../interfaces/PageSections.interface.ts';
import { ReactComponent as BurgerMenu } from '../assets/icons/burger-menu-svgrepo-com.svg';
import { ReactComponent as Close } from '../assets/icons/close-icon.svg';

interface HeaderProps {
  sections: PageSections["list"];
}

function Header({ sections }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  return (
    <header
      id="header"
      className="fixed z-50 w-full flex flex-col px-6 lg:px-10 py-4 bg-discord-900 text-white drop-shadow-lg"
    >
      <nav className="flex justify-between items-center">
        <Logo section={sections[0]} />
        <div className="flex justify-between items-center lg:hidden w-7 h-7 text-cyan-400">
          { mobileMenuOpen ?
            <Close onClick={() => setMobileMenuOpen(false)} /> :
            <BurgerMenu onClick={() => setMobileMenuOpen(true)} />
          }
        </div>
        <div className="hidden lg:flex gap-8 text-white text-xl tracking-widest">
          <NavItem type="home" section={sections[0]} />
          <NavItem type="about" section={sections[1]} />
          <NavItem type="projects" section={sections[2]} />
          <NavItem type="contact" section={sections[3]} />
        </div>
      </nav>
      <CSSTransition
        in={mobileMenuOpen}
        classNames="mobile-nav"
        timeout={{ exit: 300, enter: 500 }}
        unmountOnExit
      >
        <div
          className="w-full text-white bg-discord-900 py-2 flex lg:hidden flex-col gap-4 items-end overflow-hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <NavItem type="home" section={sections[0]} />
          <NavItem type="about" section={sections[1]} />
          <NavItem type="projects" section={sections[2]} />
          <NavItem type="contact" section={sections[3]} />
        </div>
      </CSSTransition>
    </header>
  );
}

export default Header;
