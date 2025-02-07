import React from 'react'
import style from "./whyFiniticGold.module.css";
import { FaArrowRight } from "react-icons/fa";
const WhyFiniticGold = () => {
  return (
    <section className={style.featuresSection}>
      <div className={style.content}>
        <div className={style.badge}>Features</div>
        <h4 className={style.heading}>Why Choose FINITIC’s Physical Gold System?</h4>
        <p className={style.description}>
          Discover how we’ve helped businesses scale and innovate with Finitic technology.
        </p>
        <button className={style.demoButton}>Get a Demo <span>     <FaArrowRight className={style["arrow"]} /></span></button>
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <h6 className={style.cardTitle}>Seamless Trade Execution</h6>
          <p className={style.cardText}>
            Empower your business with a high-performance platform that ensures efficient gold trading, minimizing slippage and enhancing trade accuracy.
          </p>
        </div>
        <div className={style.card}>
          <h6 className={style.cardTitle}>Regulatory Compliance & Transparency</h6>
          <p className={style.cardText}>
            Built with strict adherence to global financial regulations, ensuring audit trails and real-time reporting for full transparency.
          </p>
        </div>
        <div className={style.card}>
          <h6 className={style.cardTitle}>Unmatched Security</h6>
          <p className={style.cardText}>
            Utilizing advanced encryption and multi-layer security protocols to safeguard every trade, transaction, and client data.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyFiniticGold