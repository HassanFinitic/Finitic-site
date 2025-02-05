import React from 'react'
import Header from '../shared/header/Header'
import style from "./whyFintic.module.css"
import featuresData from '@/data/myFinitic'
const WhyFintic = () => {
  return (
    <section className='container'>
          <div className={style.header}>
      <span>HOW IT WORKS</span>
      <h2 className={style.heading}>Steps to Partnership</h2>
      </div>
      <div className={style.container}>
      {featuresData.map((group, index) => (
        <div key={index} className={style.box}>
          {group.features.map((feature) => (
            <div key={feature.id} className={style.feature}>
              <span className={style.dot} style={{ backgroundColor: feature.color }}></span>
              <h6>{feature.title}</h6>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
    </section>
  )
}

export default WhyFintic