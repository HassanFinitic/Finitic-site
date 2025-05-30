"use client"
import Header from "../shared/header/Header"
import styles from "./confidence.module.css"
import React, { useEffect } from "react";
import Aos from "aos";
import Grid from "../grid/Grid";
import Image from "next/image";
import { useTranslations } from "next-intl";
const Confidence = ({Data,title,decription}) => {
    const t = useTranslations();
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: true
        });
      }, []);
  return (
    <div className={` container ${styles["confidence-container"]}`}>
        <Header  decription={title || t("We Ensure Your Business Operates with Confidence")} />
        {decription && <p className={styles["confidence-decription"]}>{decription}</p>}
        <Grid colsLarge={3} colsMedium={2} colsSmall={1} gap={"10"}>
            {Data.map((product,index) => (
                <div key={index} className={styles["grid-item"]} data-aos="flip-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration={product.delay}>
                    <div className={styles["image-container"]}> 
                      <Image width={50}  height={50} alt={product.imagealt || product.title} src={product.image} />
                    </div>
                    <h6>{product.title}</h6>
                    <p>{product.description}</p>
                </div>
            ))}
        </Grid>
    </div>
  )
}

export default Confidence