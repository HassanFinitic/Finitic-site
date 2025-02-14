import React from 'react'
import style from '../../howItWorksPartnership/howItWorksPartnership.module.css'
import PartnershipTwo from '../../../../public/assets/icons/partnership2.png';
import PartnershipThree from '../../../../public/assets/icons/partnership3.png';
import PartnershipOne from '../../../../public/assets/icons/partnership1.png';
import Grid from '@/components/grid/Grid';
import Image from 'next/image';
const WhyFinitic = () => {
    const Whys = [
        {
          number: "01",
          title: "Scalability",
          description: "Expand your Partner network without limits in the forex space.",
          icon:  PartnershipOne
        },
        {
          number: "02",
          title: "Partner Empowerment",
          description: "Offer flexible rewards and innovative tools to attract and ratain top-performing IBs in the forex market.",
          icon:   PartnershipTwo
        },
        {
          number: "03",
          title: "Real-Time Insights",
          description: "Access live data for informed decision-making in currency trading.",
          icon:PartnershipThree
        }
      ];
  return (
    <div className={style.container}>
     <div className={style.header}>
      <span>HOW IT WORKS</span>
      <h2 className={style.heading}>Steps to Partnership</h2>
      </div>
      {/* <div className={style.stepsContainer}> */}
        <Grid colsLarge={3} >
        {Whys.map((step, index) => (
          <div key={index} className={style.step}>
            <span className={style.stepNumber}>{step.number}</span>
            <span className={style.stepIcon}><Image src={step.icon} width={50} height={50} alt="" /></span>
            <h6 className={style.stepTitle}>{step.title}</h6>
            <p className={style.stepDescription}>{step.description}</p>
          </div>
        ))}
        </Grid>
      {/* </div> */}
    </div>
  )
}

export default WhyFinitic