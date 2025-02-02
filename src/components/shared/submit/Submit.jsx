import style from "./submit.module.css"

const Submit = ({children, loading, handleClick,className}) => {
  return (
    <button
    className={` ${className} ${style["loading-btn"]}`}
    type="submit"
    onClick={handleClick}
    disabled={loading} 
  >
    {loading ? <div className={style["spinner"]}></div> : children}
  </button>
  )
}

export default Submit