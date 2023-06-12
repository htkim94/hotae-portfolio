// Fix img src url in the future
import faceImg from "../assets/images/logo_pic.png";

function Logo({ appSection }: { appSection: Element | null }) {
  return (
    <div
      className="flex gap-4 items-center hover:cursor-pointer"
      onClick={() => appSection?.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"})}
    >
      <div className="relative bg-white rounded-2xl w-12 h-12 overflow-hidden">
        <img className="absolute bottom-0" src={faceImg} alt="hotae kim face" />
      </div>
      <div className="text-xl tracking-widest">HOTAE KIM</div>
    </div>
  );
}

export default Logo;
