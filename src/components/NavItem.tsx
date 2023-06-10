import { useEffect } from "react";

function NavItem({ type, appSection }: { type: string, appSection: Element | null }) {
  useEffect(() => {
    console.log(appSection, "NavItem")
  }, [appSection])
  return (
    <div
      className="flex gap-8 text-xl tracking-widest hover:cursor-pointer"
      onClick={() => appSection?.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"})}
    >
      { type.toUpperCase() }
    </div>
  )
}

export default NavItem;