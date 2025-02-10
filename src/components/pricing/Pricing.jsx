"use client"
import { useEffect, useState } from "react"
import Header from "../shared/header/Header"
// import Switch from "../shared/switch/Switch"
import style from "./pricing.module.css"
import { pricingData } from "@/data/pricingData"
import Check from "../../../public/assets/icons/Check"
import Button from "../header/Button"
import Aos from "aos"
import Link from "next/link"

const Pricing = () => {
    const [value, setValue] = useState(false)
     useEffect(() => {
          Aos.init({
            duration: 1000, 
            once: true
          });
        }, []);
    return (
        <div className={` container pricing-container`} >
            <Header title="Pricing" decription="Choose your plan " />
            <div className={style.pricingContainer} data-aos="zoom-in-up">
            {pricingData.map((plan, index) => (
                <div key={index} className={index === 1 ? `${style["pricingCard"]} ${style["active"]}` : `${style["pricingCard"]}`}>
                    <h6 className={style.planTitle}>{plan.icon}{plan.title} </h6>
                    <ul className={style.featuresList}>
                        {plan.features.map((feature, idx) => (
                            <li key={idx} className={style.featureItem}>
                              <div> <Check /> </div>{feature}
                            </li>
                        ))}
                    </ul>
                    <div className={`${style["button-container"]}`}>
                       <Link className={style.link} href={"/registration"} >Get Started</Link>
                    </div>
                </div>
            ))}
            </div>

        </div>
    )
}

export default Pricing