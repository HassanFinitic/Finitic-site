
import style from "./input.module.css"
const Input = ({ type, placeholder, name, formData,handleChange }) => {
    return (
        <input name={name} id={name} value={formData[name]} onChange={handleChange} className={style["input-style"]} type={type} required placeholder={placeholder} />
    )
}

export default Input