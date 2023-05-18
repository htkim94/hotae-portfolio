function NavItem({ type, appSection }: { type: string, appSection: HTMLElement | null }) {
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