"use client";
import style from "./stayAHead.module.css"
import timer from "../../../public/assets/icons/timer.png"
import integration from "../../../public/assets/icons/integration.png"
import setting from "../../../public/assets/icons/setting.png"
import Image from "next/image"
import Trending from "../../../public/assets/icons/Trending"
import UserPlus from "../../../public/assets/icons/UserPlus"
import Pen from "../../../public/assets/icons/Pen"
import { useEffect } from "react"
import Aos from "aos"
const StayAHead = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        });
    }, []);
    return (
        <div className={` container ${style.stayAheadContainer}`} >
            <h3 className={style["title"]}>Stay Ahead with FINITIC</h3>
            <p className={style.p}>Explore how our cutting-edge technology, tailored solutions, and dedication to excellence can transform your business operations.</p>
            <div className={style["grid-container"]}>
                <div className={style["stayAhead__Card"]} data-aos="zoom-in-up">
                    <h6>Seamless Integration</h6>
                    <p>FINITIC’s advanced integration options streamline workflows for unmatched efficiency in Forex trading.</p>
                    <div className={style["stayAhead__Card-content"]}>
                        <span>100%</span>
                        <div>Faster Integration  &nbsp;&nbsp;&nbsp;&nbsp; Custom Solutions</div>
                        <div className={style["stayAhead__Card-content-icons"]}>
                             <Image src={"/assets/images/stayAhead.png"} width={300} height={80} alt="Custom Solutions" />
                        </div>
                        <p>Our mission is to empower brokers to thrive in a competitive market with ease and confidence.</p>
                    </div>
                </div>
                <div className={style["stayAhead__Card"] } data-aos="zoom-in-up">
                    <h6>Scalable Infrastructure</h6>
                    <p>Our robust infrastructure is designed to grow with your business, no matter the size, making it ideal for forex brokers.</p>
                    <div className={style["stayAhead__Card-content"]}>
                        <div className={style["stayAhead__Card-content-title"]}>
                            <span>120k+</span>
                            <Trending />
                            <span style={{ fontSize: "14px" }}>9.2%</span>
                        </div>
                        <p>Happy customers worldwide</p>
                        <div className={style["stayAhead__Card-content-feature"]}>
                            <div className={style["stayAhead__Card-content-feature-icon"]}><UserPlus /></div>
                            <div>
                                <h6>Dynamic User Experiences</h6>
                                <p>Personalized to fit your business goals.</p>
                            </div>
                        </div>
                        <div className={style["stayAhead__Card-content-feature"]}>
                            <div className={style["stayAhead__Card-content-feature-icon"]}><Pen /></div>
                            <div>
                                <h6>24/7 Customer Support</h6>
                                <p>Dedicated Support Ready to Assist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StayAHead