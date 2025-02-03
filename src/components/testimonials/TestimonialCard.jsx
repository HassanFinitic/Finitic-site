import Image from 'next/image'
import React from 'react'
import style from "./testimonials.module.css"
const TestimonialCard = ({ item }) => {
    return (
        <div data-aos="zoom-in" className={style.card} >
            <div className={style.header}>
                <Image className={style.avatar} width={50} height={50} src={item?.image} alt={item?.name} />
                <h3 className={style.name}>{item?.name}</h3>

            </div>
            <p className={style.text}>{item?.text}</p>
            <div className={style.footer}>
                {"⭐".repeat(item?.rating)}
            </div>
        </div>
    )
}

export default TestimonialCard