"use client"
import { confidenceData } from "@/data/confidenceData"
import Header from "../shared/header/Header"
import styles from "./confidence.module.css"
import React, { useEffect } from "react";
import Aos from "aos";

const Confidence = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true
        });
      }, []);
  return (
    <div className={`  ${styles["confidence-container"]}`}>
        <Header  decription="We Ensure Your Business Operates with Confidence" />
        <div className={styles["grid-container"]}>
            {confidenceData.map((product,index) => (
                <div key={index} className={styles["grid-item"]} data-aos="flip-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration={product.delay}>
                    <div></div>
                    <h6>{product.title}</h6>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Confidence