import React from 'react'
import styles from "./whyChooseFinitic.module.css"
import { whyChooseFinitic } from '@/data/whyChooseFinitic'
import ProductHeader from '../shared/productHeader/ProductHeader'
import Image from 'next/image'
import Flex from '../flex/Flex'
import Grid from '../grid/Grid'
import Aos from 'aos'
import 'aos/dist/aos.css'

const categories = [
  "Robust Security",
  "Customizable",
  "Accessibility",
  "Integration",
  "Centralized Data",
]

const WhyChooseFinitic = () => {
  
  return (
    <section className={`container ${styles["choose-finitic__container"]}`}>
     <ProductHeader  productName={" PAMM/MAM?"} startDescription={"Why Choose FINITIC"} />
     <Flex className={styles.categoriesContainer} gap="40px" align="center" justify="center" wrap='wrap'>
      {categories.map((category, index) => (
        <div data-aos="fade-up" data-aos-duration={500 + index * 500} key={index} className={styles.category}>
          <h6>{category}</h6>
        </div>
      ))}
     </Flex>
    <p data-aos="fade-up" data-aos-duration="2000" className={styles.subheading}>
      PAMM/MAM Copy Trading for Smart Forex Management
    </p>

    <Grid direction="row" gap="40px" align="center" justify="center" wrap='wrap' colsLarge={3} colsMedium={2} colsSmall={1}>
      {whyChooseFinitic.map((feature, index) => (
        <div data-aos="fade-up" data-aos-duration={500 + index * 500} key={index} className={styles.card}>
          <div className={styles.content}>
            <Flex direction="row" gap="10px" align="center" justify="left">
              <div className={styles.imgContainer}>
                <Image width={20} height={20} src={feature.image} alt={feature.title} className={styles.image} />
              </div>
              <h6>{feature.title}</h6>
            </Flex>
            
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </Grid>
  </section>
  )
}

export default WhyChooseFinitic