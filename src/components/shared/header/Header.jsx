import styles from './header.module.css'

const Header = ({title,decription,fontSizeDescription}) => {
    return (
        <div className={ ` ${styles.header}`} >
            {title && <span className={styles.span} >{title}</span>}
            <h2 style={{fontSize: fontSizeDescription ?  fontSizeDescription : "30px"}} className={styles.h2}>{decription}</h2>
        </div>
    )
}

export default Header