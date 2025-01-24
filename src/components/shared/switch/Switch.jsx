import style from "./switch.module.css"
const Switch = ({setValue,value}) => {
  return (
    <label  className={style["switch"]}>
    <input onChange={(e)=>setValue(e.target.checked)} checked={value} type="checkbox" />
    <span className={`${style["slider"]} ${style["round"]}`}></span>
  </label>
  )
}

export default Switch