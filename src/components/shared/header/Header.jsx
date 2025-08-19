import styles from './header.module.css'

const Header = ({title,decription,fontSizeDescription}) => {
    return (
        <div className={ ` ${styles.header}`} >
            {title && <h3 className={styles.span} >{title}</h3>}
            <h4 style={{fontSize: fontSizeDescription ?  fontSizeDescription : "30px"}} className={styles.h2}>{decription}</h4>
        </div>
    )
}

export default Header