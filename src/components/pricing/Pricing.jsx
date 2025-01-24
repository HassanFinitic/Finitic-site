"use client"
import { useState } from "react"
import Header from "../shared/header/Header"
import Switch from "../shared/switch/Switch"
import style from "./pricing.module.css"
import { pricingData } from "@/data/pricingData"
import Check from "../../../public/assets/icons/Check"
import Button from "../header/Button"


const Pricing = () => {
    const [value, setValue] = useState(false)
  
    return (
        <div className="pricing-container">
            <Header title="Pricing" decription="Choose your plan " />
            <div className={style["switch-container"]}>
                <span className={value ? `${style["span"]}  ` :
                    `${style["span"]} ${style["active"]}`}>Monthly</span>
                <Switch setValue={setValue} value={value} />
                <span className={value ? `${style["span"]}  ${style["active"]}` :
                    `${style["span"]}`}>Yearly</span>
            </div>
            <div className={style.pricingContainer}>
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
                    <div className={style["button-container"]}>
                    <Button title="Get Started" />
                    </div>
                </div>
            ))}
            </div>

        </div>
    )
}

export default Pricing