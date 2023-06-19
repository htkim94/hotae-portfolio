import { PageSections } from "../interfaces/PageSections.interface";

interface NavItemProps {
  type: string,
  section: PageSections["item"],
}

function NavItem({ type, section }: NavItemProps) {
  return (
    <div
      className="flex gap-8 text-xl tracking-widest hover:cursor-pointer"
      onClick={() => section?.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"})}
    >
      { type.toUpperCase() }
    </div>
  )
}

export default NavItem;