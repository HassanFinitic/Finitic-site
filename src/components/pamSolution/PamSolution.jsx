import Image from 'next/image'
import React from 'react'
import style from "./PamSolution.module.css"
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';
const PamSolution = ({highLightTitle,image,title,description}) => {
  return (
    <div className={`container ${style["pam-solution__container"]}`}>
        <div data-aos="fade-right" data-aos-duration="1000">
           <h6 className={style["pam-solution__title"]}>{highLightTitle}</h6>
            <span >
            {title}
            </span>
            <p className={style["pam-solution__description"]}>{description}</p>
            <Link href={`/registration`}><button className={style.demoButton}>Book Your Demo </button></Link>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
            <Image  src={image} width={500} height={300}   alt="PAMM" />
        </div>
    </div>
  )
}

export default PamSolution