import React from 'react'
import style from './howItWorksPartnership.module.css'
import PartnershipTwo from '../../../public/assets/icons/PartnershipTwo';
import PartnershipThree from '../../../public/assets/icons/PartnershipThree';
import PartnershipFour from '../../../public/assets/icons/PartnershipFour';
import PartnershipOne from '../../../public/assets/icons/PartnershipOne';
const HowItWorksPartnership = () => {
    const steps = [
        {
          number: "01",
          title: "Initial Consultation",
          description: "Reach out to discuss potential collaboration opportunities and align on objectives related to currency trading.",
          icon:  <PartnershipOne />
        },
        {
          number: "02",
          title: "Due Diligence",
          description: "Undergo a thorough assessment to ensure a mutually beneficial partnership.",
          icon:   <PartnershipTwo />
        },
        {
          number: "03",
          title: "Agreement Formalization",
          description: "Define the terms of our collaboration and execute a formal agreement to integrate forex trading CRM.",
          icon:<PartnershipThree />
        },
        {
          number: "04",
          title: "Integration & Launch",
          description: "Work together to integrate our forex CRM solutions and launch initiatives that drive success in online trading.",
          icon:<PartnershipFour />
        }
      ];
  return (
    <div className={`container ${style.container}`}>
     <div className={style.header}>
      <span>HOW IT WORKS</span>
      <h2 className={style.heading}>Steps to Partnership</h2>
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