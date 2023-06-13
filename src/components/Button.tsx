import { PageSections } from "../interfaces/PageSections.interface"

interface ButtonProps {
  children: string,
  isResume?: boolean,
  section?: PageSections["item"],
}

function Button({ children, isResume, section }: ButtonProps) {
  const buttonStyle = "bg-discord-600 text-white py-3 px-6 w-40 h-14 rounded-lg flex justify-center items-center"

  return(
    isResume ?
      <a 
        className={buttonStyle}
        href="https://resume.creddle.io/resume/9ffnx84dbtz"
        target="_blank"
        rel="noopener noreferrer"
      >
        { children }
      </a> :
      <button
        className={buttonStyle}
        onClick={() => section?.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"})}
      >
        { children }
      </button>
  )
}

export default Button;
