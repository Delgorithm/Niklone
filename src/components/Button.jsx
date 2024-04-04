import React from 'react'

const Button = ({color, label, onClick, text}) => {
  return (
    <button
      className={`w-full py-1.5 rounded-md bg-${color} text-${text} hover:opacity-50 active:translate-y-0.5`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button