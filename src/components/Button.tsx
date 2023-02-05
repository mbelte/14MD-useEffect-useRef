import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void | undefined;
}

const Button = ({ 
          children, type = "button", disabled = false, onClick 
                }: ButtonProps) => {
  return (
    <button 
      type={ type }
      disabled={ disabled} 
      onClick={ onClick}
    >
        { children }
    </button>
  )
}

export default Button