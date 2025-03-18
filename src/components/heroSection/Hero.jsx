import React from 'react'
import style from "./hero.module.css"
import Image from 'next/image'
import banner from "../../../public/assets/images/banner.jpg"

export default function Hero() {
  return (
    <div className={`container ${style["full-hero-container"]}`}>
        <div data-aos="zoom-in" data-aos-duration="1000" className={ `container ${style["hero-container"]}`}>  
            <Image className={style["hero-image"]} src={banner} alt="banner Image" />
        </div>
    </div>
  )
}
