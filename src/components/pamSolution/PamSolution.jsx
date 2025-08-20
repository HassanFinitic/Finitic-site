import Image from 'next/image'
import React from 'react'
import style from "./PamSolution.module.css"
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import 'aos/dist/aos.css';
import { useTranslations } from 'next-intl';
const PamSolution = ({highLightTitle,image,title,description}) => {
  const t = useTranslations("pamm_mam_page");
  return (
    <div className={`container ${style["pam-solution__container"]}`}>
        <div data-aos="fade-right" data-aos-duration="1000">
           <h2 className={style["pam-solution__title"]}>{highLightTitle}</h2>
            <span >
            {title}
            </span>
            <h4 className={style["pam-solution__description"]}>{description}</h4>
            <Link href={`/registration`}><button className={style.demoButton}>{t("Book Your Demo")}</button></Link>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
            <Image  src={image} width={500} height={300}   alt="PAMM" />
        </div>
    </div>
  )
}

export default PamSolution