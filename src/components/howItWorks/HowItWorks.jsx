"use client"
import Header from "../shared/header/Header"
import style from "./howItWorks.module.css"
import { howItWorksData } from "@/data/howItWorksData"
import Image from "next/image"
import { useEffect } from "react"
import Aos from "aos"
import Grid from "../grid/Grid"
import { useTranslations } from "next-intl"
const HowItWorks = () => {
  const t = useTranslations();
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true
  });
  }, []);
 
  return (
    <div className={ `container ${style["how-it-works__container"]}`}>
      <Header title={t("How it works")} decription={t("Customizable, efficient Forex trading CRM solutions")} />
      <Grid colsLarge={3} colsMedium={2} colsSmall={1} gap="20px">
        {
          howItWorksData.map((item, index) => (
            <div className={style["how-it-works__item"]} key={index} data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration={item?.delay}>
              <div className={style["how-it-works__item-icon"]}>
                <Image width={40} height={40} src={item.image} alt={item.imagealt} />
                <h6  className={style["how-it-works__item-title"]}>{t(item.title)}</h6>
              </div>
              
              <p className={style["how-it-works__item-description"]}>{t(item.description)}</p>
            </div>
          ))
        }
      </Grid>
    </div>
  )
}

export default HowItWorks