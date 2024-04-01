import React from 'react'

const Button = ({label, onClick}) => {
  return (
    <button
      className={`px-2 py-1 rounded hover:opacity-50 active:translate-y-0.5`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button