import React from 'react'
import style from "./pamBenefits.module.css"
import Light from '../../../public/assets/icons/Light'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslations } from 'next-intl';
const PamBenefits = () => {
    const t = useTranslations("pamm_mam_page");
    return (
        <section className={"container"}>
            <h4 data-aos="fade-up" data-aos-duration="1000" className={style.title}>{t("Benefits for Brokers and Clients")}</h4>
            <p data-aos="fade-up" data-aos-duration="2000" className={style.subtitle}>
                {t("Enhance Broker Operations with Advanced Trading Tools and Offer Clients Transparent, Customized Forex Strategies")}
            </p>

            <div className={style.grid}>
                <div data-aos="fade-right" data-aos-duration="3000" className={style.column}>
                    <h3 className={style.heading}>{t("For Brokers")}</h3>
                    <ul className={style.list}>
                        <li>
                            <span className={style.icon}><Light /></span> {t("Elevate your trading business with advanced trading software")}
                        </li>
                        <li>
                            <span className={style.icon}><Light /></span> {t("Streamline operations with tools optimized for copy trading platforms")}
                        </li>
                    </ul>
                </div>
                <div data-aos="fade-left" data-aos-duration="3000" className={style.column}>
                    <h3 className={style.heading}>{t("For Clients")}</h3>
                    <ul className={style.list}>
                        <li>
                            <span className={style.icon}><Light /></span> {t("Gain professional forex copy trading management with full transparency")}
                        </li>
                        <li>
                            <span className={style.icon}><Light /></span> {t("Benefit from flexible and personalized currency trading strategies")}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PamBenefits