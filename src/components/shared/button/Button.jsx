
import style from "./button.module.css"
import { FaArrowRight } from "react-icons/fa";

export default function Button({ text,center, background}) {

  return (
    <div className={`${style["button-container"]} `}>
      <button>{text}</button>
      <FaArrowRight />
    </div>
  )
}
