import Scheduling from '@/components/scheduling/Scheduling'
import React from 'react'
import style from "./ib.module.css"

export default function page() {
  return (
    <div className={style.ib_Full_container}>
      <div className={`container ${style.ib_container}`}>
        <div className={style.landing}>
          <div className={style.left_top}>
            <div className={style.title}><span>IB Portal</span> The best marketing tool</div>
            <p className={style.subTitle}>The Ultimate IB Portal for <span>Partner Success</span></p>
            <p className={style.description}>The most effective marketing and management tool for introducing brokers. With advanced features and customizable options, it empowers your partners to achieve more in the forex market.</p>
          </div>
          <div className={style.right_bottom}>
          <Scheduling />
          </div>
        </div>
      </div>
    </div>
  )
}
