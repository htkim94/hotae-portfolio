// Do I need to use import.meta.url?
import faceImg from "../assets/images/logo_pic.png";
import { PageSections } from "../interfaces/PageSections.interface";

interface LogoProps {
  section: PageSections["item"],
}

function Logo({ section }: LogoProps) {
  return (
    <div
      className="flex gap-4 items-center hover:cursor-pointer"
      onClick={() => section?.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"})}
    >
      <div className="relative bg-cyan-400 rounded-full w-12 h-12 overflow-hidden">
        <img className="absolute bottom-0" src={faceImg} alt="hotae kim face" />
      </div>
      <div className="text-cyan-400 text-xl tracking-widest font-bold">HOTAE KIM</div>
    </div>
  );
}

export default Logo;
