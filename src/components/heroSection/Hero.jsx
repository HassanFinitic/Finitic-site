import React from 'react'
import style from "./hero.module.css"
import Image from 'next/image'
import banner from "../../../public/assets/images/banner.jpg"

export default function Hero() {
  return (
    <div className={`container ${style["full-hero-container"]}`}>
        <div className={ `container ${style["hero-container"]}`}>  
            <Image src={banner} alt="banner Image" />
        </div>
    </div>
  )
}
