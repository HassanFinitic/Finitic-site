"use client"
import React, { useEffect } from 'react'
import styles from './productHeader.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ProductHeader = ({startDescription, endDescription, productName, title, fontSizeDescription}) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    })
  }, [])

  return (
    <div className={ `container ${styles.header}`} >
      {title && <h1 data-aos="fade-up" data-aos-duration="1000" className={styles.span} >{title}</h1>}
      <h2 data-aos="fade-up" data-aos-duration="2000" style={{fontSize: fontSizeDescription ? fontSizeDescription : "40px"}} className={styles.h2}>
        {startDescription} <span className={styles["product-name"]}> {productName}</span> {endDescription}
      </h2>
    </div>
  )
}

export default ProductHeader
