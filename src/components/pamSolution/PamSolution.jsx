import Image from 'next/image'
import React from 'react'
import style from "./PamSolution.module.css"
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
const PamSolution = ({highLightTitle,image,title,description}) => {
  return (
    <div className={`container ${style["pam-solution__container"]}`}>
        <div>
           <h6 className={style["pam-solution__title"]}>{highLightTitle}</h6>
            <span >
            {title}
            </span>
            <p className={style["pam-solution__description"]}>{description}</p>
            <Link href={`/registration`}><button className={style.demoButton}>Get a Demo </button></Link>
        </div>
        <div>
            <Image  src={image} width={500} height={300}   alt="PAMM" />
        </div>
    </div>
  )
}

export default PamSolution