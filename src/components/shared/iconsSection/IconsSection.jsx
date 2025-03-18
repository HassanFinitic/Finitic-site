import React from 'react'
import style from "./iconSection.module.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

const IconsSection = ({ iconsInfo }) => {
    return (
        <div className={`container ${style["pamm-container"]}`}>
            {
                iconsInfo.map((item, index) => (
                    <div data-aos="fade-up" data-aos-duration={`${500 * (index + 1)}`} key={item.title} className={style["pamm-item"]}>
                        {item.icon}
                        {item.title}
                    </div>
                ))
            }
        </div>
    )
}

export default IconsSection
