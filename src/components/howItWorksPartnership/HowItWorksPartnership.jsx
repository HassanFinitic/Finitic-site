import React from 'react'
import style from './howItWorksPartnership.module.css'
import PartnershipTwo from '../../../public/assets/icons/PartnershipTwo';
import PartnershipThree from '../../../public/assets/icons/PartnershipThree';
import PartnershipFour from '../../../public/assets/icons/PartnershipFour';
import PartnershipOne from '../../../public/assets/icons/PartnershipOne';
import { useTranslations } from 'next-intl';
const HowItWorksPartnership = () => {
    const t = useTranslations("partner_ship_page");
    const steps = [
        {
          number: "01",
          title: t("Initial Consultation"),
          description: t("Reach out to discuss potential collaboration opportunities and align on objectives related to currency trading"),
          icon:  <PartnershipOne />
        },
        {
          number: "02",
          title: t("Due Diligence"),
          description: t("Undergo a thorough assessment to ensure a mutually beneficial partnership"),
          icon:   <PartnershipTwo />
        },
        {
          number: "03",
          title: t("Agreement Formalization"),
          description: t("Define the terms of our collaboration and execute a formal agreement to integrate forex trading CRM"),
          icon:<PartnershipThree />
        },
        {
          number: "04",
          title: t("Integration & Launch"),
          description: t("Work together to integrate our forex CRM solutions and launch initiatives that drive success in online trading"),
          icon:<PartnershipFour />
        }
      ];
  return (
    <div className={`container ${style.container}`}>
     <div className={style.header}>
      <span>{t("HOW IT WORKS")}</span>
      <h2 className={style.heading}>{t("Steps to Partnership")}</h2>
      </div>
      <div className={style.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} className={style.step}>
            <span className={style.stepNumber}>{step.number}</span>
            <span className={style.stepIcon}>{step.icon}</span>
            <h6 className={style.stepTitle}>{step.title}</h6>
            <p className={style.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorksPartnership