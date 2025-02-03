"use client";
import Header from "../shared/header/Header"
import Button from "../shared/button/Button"
import { useEffect } from "react"
import Aos from "aos";
import style from "./testimonials.module.css"
import TestimonialGrid from "./TestimonialGrid";

const Testimonials = () => {
    useEffect(() => {
        Aos.init({
            duration: 500,
            once: true
        });
    }, []);
    return (
        <div className={`container ${style["testimonials-container"]}`}>
            <Header title={"Testimonials"} decription={"Trusted by 14,000+ users"} />
            <TestimonialGrid />
            <div className="overlay"></div>
            <div>
                <Button url={"/reviews"} text={"See All Reviews"} center={true} background={"black"} />
            </div>
        </div>
    )
}

export default Testimonials