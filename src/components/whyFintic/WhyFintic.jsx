import React from 'react'
import style from "./whyFintic.module.css"
import { useFeaturesData } from '@/data/myFinitic'
import { useTranslations } from 'next-intl'
const WhyFintic = () => {
    const t = useTranslations("partner_ship_page")
    const featuresData = useFeaturesData()
  return (
    <section className='container'>
          <div className={style.header}>
      <span>{t("Partner with FINITIC")}</span>
      <h2 className={style.heading}>{t("Why Partner with FINITIC?")}</h2>
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