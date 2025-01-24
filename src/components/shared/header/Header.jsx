import styles from './header.module.css'

const Header = ({title,decription}) => {
    return (
        <div className={styles.header}>
            {title && <span className={styles.span} >{title}</span>}
            <h2 className={styles.h2}>{decription}</h2>
        </div>
    )
}

export default Header