import React from 'react'

const Button = ({color, label, onClick}) => {
  return (
    <button
      className={`px-2 py-1 rounded bg-${color} bg-bla hover:opacity-50 active:translate-y-0.5`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button