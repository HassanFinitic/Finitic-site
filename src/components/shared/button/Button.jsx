
import style from "./button.module.css"
import { FaArrowRight } from "react-icons/fa";

export default function Button({ text, center, background }) {

  return (
    <div className={`${style["button-container"]}`} 
    style={{ 
      margin: center ? "0 auto" : "0",
      background: background ? "linear-gradient(to top, rgb(47, 47, 47), rgb(98, 98, 98))" : "linear-gradient(to top, var(--button-color), var(--button-color-hover))" 
    }}>
      <button>{text}</button>
      <FaArrowRight />
    </div>
  )
}
