
import React from 'react'

export default function Icon({toggleIcon, isOpen, style}) {
  console.log(style)
    return (
    <div className={style["icon"]} onClick={toggleIcon}>
        <div
          className={`${style["line_one"]} ${isOpen ? style["active"] : ""}`}
        ></div>
        <div
          className={`${style["line_two"]} ${isOpen ? style["active"] : ""}`}
        ></div>
      </div>
  )
}
