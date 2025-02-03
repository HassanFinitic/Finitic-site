"use client"
import { useEffect, useRef, useState } from "react";
import Qoute from "../../../public/assets/icons/Qoute";
import style from "./subscribe.module.css";
import Aos from "aos";
const Subscribe = () => {
    const [email, setEmail] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email) {
            document.getElementById("subscribe-input").classList.toggle(style["animation"]);
        }
    }
    useEffect(() => {
        Aos.init({
            duration: 500,
            once: true
        });
    }, []);
    return (
        <div className={style["subscribe"]}>
            <div className={style["subscribe-container"]} data-aos="zoom-in-up">
                <Qoute />
                <h3>Stay Ahead in Forex Innovation</h3>
                <p>Get ready to streamline operations, enhance trading strategies, and elevate your brokerage—all with FINITIC’s cutting-edge solutions. Subscribe now and stay informed.</p>
                <div className={style["subscribe-form"]}>
                    <input id="subscribe-input" value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" required placeholder="Enter your email address" />
                    <button className={style["absolute-btn"]} type="submit" onClick={handleSubmit}>Subscribe</button>

                </div>
            </div>
        </div>
    )
}

export default Subscribe