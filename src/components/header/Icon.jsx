
import React from 'react'
import { FaBars } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";

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
        {/* {
          isOpen ? <FaBarsStaggered /> : <FaBars />
        } */}
      </div>
  )
}
