import React from 'react'
import Header from '../shared/header/Header'
import style from './our-feature.module.css'
import Image from 'next/image'
const OurFeature = () => {
    return (
        <section className=''>
            <Header title={"Our Features"} decription={"Why Choose FINITIC?"} />
            <div className={style["feature-grid-row-one"]}>
            <div className={style["feature-card"]}>
                    <Image
                        src="/assets/images/innovation.jpg"
                        sizes="100vw"
                        style={{ width: "100%", borderRadius: "24px" }}
                        className={style["feature-img"]}
                        alt="about-us"
                        width={0}
                        height={117}
                    />
                    <h6 className={style["feature-title"]}>Innovation</h6>
                    <p>Continually adopting emerging technologies, including solutions for online trading and currency exchange.</p>
                </div>
                <div className={style["feature-card"]}>
                    <Image
                        src="/assets/images/security.jpg"
                        sizes="100vw"
                        style={{ width: "100%", borderRadius: "24px" }}
                        className={style["feature-img"]}
                        alt="Data Security"
                        width={0}
                        height={117}
                    />
                    <h6 className={style["feature-title"]}>Data Security</h6>
                    <p>Unparalleled protection for sensitive information, ensuring compliance with Forex technical analysis standards.</p>
                </div>
           
            </div>
            <div className={style["feature-grid-row-two"]}>
                
                <div className={style["feature-card"]}>
                    <Image
                        src="/assets/images/reliability.jpg"
                        sizes="100vw"
                        style={{ width: "100%", borderRadius: "24px" }}
                        className={style["feature-img"]}
                        alt="about-us"
                        width={0}
                        height={117}
                    />
                    <h6 className={style["feature-title"]}>Reliability</h6>
                    <p>Dependable products built with precision and care, such as our Forex trading CRM and advanced analytics tools.</p>
                </div>
                <div className={style["feature-card"]}>
                    <Image
                        src="/assets/images/customization.jpg"
                        sizes="100vw"
                        style={{ width: "100%", borderRadius: "24px" }}
                        className={style["feature-img"]}
                        alt="Data Security"
                        width={0}
                        height={117}
                    />
                    <h6 className={style["feature-title"]}>Customization</h6>
                    <p> Tailored solutions designed to enhance operations for brokers in the forex market.</p>
                </div>
            </div>
        </section>
    )
}

export default OurFeature