"use client";
import { productsData } from "@/data/products"
import Header from "../shared/header/Header"
import styles from "./products.module.css"
import React, { useEffect } from "react";
import Aos from "aos";
const Products = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true
        });
      }, []);
  return (
    <div className={`container ${styles["products-container"]}`}>
        <Header title="Products" decription="Optimize Your Brokerage with FINITIC" />
        <p className={styles.p}>Explore our diverse range of products tailored to optimize operations, enhance client relationships, and drive success in the trading business</p>
        <div className={styles["grid-container"]}>
            {productsData.map((product,index) => (
                <div key={index} className={styles["grid-item"]} data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration={product.delay}>
                    <div>{product.icon}</div>
                    <h6>{product.title}</h6>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products