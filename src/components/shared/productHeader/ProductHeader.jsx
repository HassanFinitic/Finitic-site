import React from 'react'
import styles from './productHeader.module.css'
const ProductHeader = ({startDescription,endDescription,productName,title,fontSizeDescription}) => {
  return (
    <div className={ `container ${styles.header}`} >
    {title && <span className={styles.span} >{title}</span>}
    <h2 style={{fontSize: fontSizeDescription ?  fontSizeDescription : "40px"}} className={styles.h2}>{startDescription} <span className={styles["product-name"]}> {productName}</span> {endDescription}</h2>
</div>
  )
}

export default ProductHeader