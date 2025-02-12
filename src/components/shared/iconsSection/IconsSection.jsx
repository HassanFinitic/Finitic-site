import React from 'react'
import style from "./iconSection.module.css"
const IconsSection = ({ iconsInfo }) => {
    return (
        <div className={`container ${style["pamm-container"]}`}>
            {
                iconsInfo.map((item) => (
                    <div key={item?.title} className={style["pamm-item"]}>
                        {item.icon}
                        {item.title}
                    </div>
                ))
            }
        </div>
    )
}

export default IconsSection