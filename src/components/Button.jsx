import React from 'react'

const Button = ({color, label, onClick, text}) => {
  return (
    <button
      className={`px-2 py-1.5 rounded bg-${color} text-${text} hover:opacity-50 active:translate-y-0.5`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button