"use client";
import { testimonialsData } from "@/data/testimonialsData"
import Header from "../shared/header/Header"
import style from "./testimonials.module.css"
import x from "./../../../public/assets/icons/x.png"
import Image from "next/image"
import Button from "../shared/button/Button"
import { useEffect } from "react"
import Aos from "aos";

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
            <div className={style["testimonials-grid"]}>
                {testimonialsData.map(({ id, name, image, text, rating }) => (
                    <div data-aos="zoom-in" className={style.card} key={id}>
                        <div className={style.header}>
                            <Image className={style.avatar} width={50} height={50} src={image} alt={name} />
                            <h3 className={style.name}>{name}</h3>

                        </div>
                        <p className={style.text}>{text}</p>
                        <div className={style.footer}>
                            {"⭐".repeat(rating)}
                        </div>
                    </div>
                ))}
            </div>
            <div className="overlay"></div>
            <div>
                <Button text={"See All Reviews"} center={true} background={"black"} />
            </div>
        </div>
    )
}

export default Testimonials