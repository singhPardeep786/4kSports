import React from 'react'
import { MoveRight } from 'lucide-react'

const Button = ({
  children = "Contact Us",
  className = "",
  icon = <MoveRight />,
}) => {
  return (
    <button className={`btn_format flex items-center gap-1 ${className}`}>
      <span>{children}</span>
      {icon && <span>{icon}</span>}
    </button>
  )
}

export default Button