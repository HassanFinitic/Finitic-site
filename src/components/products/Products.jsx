"use client";
import Header from "../shared/header/Header"
import styles from "./products.module.css"
import React, { useEffect } from "react";
import Aos from "aos";
import Grid from "../grid/Grid";
const Products = ({productsData,subDescription,description,title}) => {
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true
        });
      }, []);
  return (
    <div className={` ${styles["products-container"]}`}>
        <Header title={title} decription={description} />
        {subDescription && <p className={styles.p}>{subDescription}</p>}
        <Grid className={"container"} colsLarge={3} colsMedium={2} colsSmall={1} gap="24px">
            {productsData.map((product,index) => (
                <div key={index}  className={styles["grid-item"]} data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration={product.delay}>
                    <div>{product.icon}</div>
                    <h6>{product.title}</h6>
                    <p>{product.description}</p>
                </div>
            ))}
        </Grid>
    </div>
  )
}

export default Products