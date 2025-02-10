import Image from 'next/image'
import React from 'react'
import style from "./PamSolution.module.css"
import { FaArrowRight } from "react-icons/fa";
const PamSolution = () => {
  return (
    <div className={`container ${style["pam-solution__container"]}`}>
        <div>
           <h6 className={style["pam-solution__title"]}>PAMM/MAM</h6>
            <span >
             Solutions
            </span>
            <p className={style["pam-solution__description"]}>Our PAMM (Percentage Allocation Management Module) and MAM (Multi-Account Manager) systems revolutionize asset and forex trading portfolio management. Designed for brokers, they provide efficient, scalable, and customizable solutions tailored for modern trading platforms.</p>
            <button className={style.demoButton}>Get a Demo </button>
        </div>
        <div>
            <Image  src={"/assets/images/pam.png"} width={500} height={300}   alt="PAMM" />
        </div>
    </div>
  )
}

export default PamSolution