import React from 'react'
import styles from "./whyChooseFinitic.module.css"
import { whyChooseFinitic } from '@/data/whyChooseFinitic'
import ProductHeader from '../shared/productHeader/ProductHeader'
import Image from 'next/image'
const WhyChooseFinitic = () => {
  
  return (
    <section className={`container ${styles["choose-finitic__container"]}`}>
     <ProductHeader  productName={" PAMM/MAM?"} startDescription={"Why Choose FINITIC"} />
    <p className={styles.subheading}>
      PAMM/MAM Copy Trading for Smart Forex Management
    </p>

    <div className={styles.grid}>
      {whyChooseFinitic.map((feature, index) => (
        <div key={index} className={styles.card}>
          <div className={styles["img-container"]}>
          <Image width={120} height={120} src={feature.image} alt={feature.title} className={styles.image} />
          </div>
          <div className={styles.content}>
            <h6>{feature.title}</h6>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default WhyChooseFinitic