import React, { useEffect } from 'react'
import style from "./button.module.css"
import { FaArrowRight } from "react-icons/fa";

export default function Button({ text }) {

  return (
    <div data-aos="fade-up" className={style["button-container"]}>
      <button>{text}</button>
      <FaArrowRight />
    </div>
  )
}
