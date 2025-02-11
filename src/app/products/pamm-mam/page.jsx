
import ProductHeader from '@/components/shared/productHeader/ProductHeader'
import React from 'react'
import style from "./pamm.module.css"
import ProductButton from '@/components/shared/productButton/ProductButton'
import Pamm1 from '../../../../public/assets/icons/Pamm1'
import Pamm2 from '../../../../public/assets/icons/Pamm2'
import Pamm4 from '../../../../public/assets/icons/Pamm4'
import { Pamm3 } from '../../../../public/assets/icons/Pamm3'
import PamSolution from '@/components/pamSolution/PamSolution'
import PamBenefits from '@/components/pamBenefits/PamBenefits'
import WhyChooseFinitic from '@/components/whyChooseFinitic/WhyChooseFinitic'
import IconsSection from '@/components/shared/iconsSection/IconsSection'
const page = () => {
  return (
    <div className=''>
        <ProductHeader  title={"Prop Firm System"} productName={"PAMM/MAM"} startDescription={"Advanced "} endDescription={"Systems for Scalable pamm Management"}/>
        <p className={style["pam__description"]}>Optimize Portfolio Performance with Smart Investment Allocation</p>
         <ProductButton title={"Book A Demo"} />
            <IconsSection iconsInfo={[{
              icon: <Pamm1 />,
              title:"Multiple Accounts Managed"
            },
            {
              icon: <Pamm2 />,
              title:"Performance Tracking"
            },
            {
              icon: <Pamm3 />,
              title:"Allocation Methods"
            },
            {
              icon: <Pamm4 />,
              title:"System Integration"
            }
            ]} />
            <PamSolution image="/assets/images/pam.png" highLightTitle="PAMM/MAM" title="Solutions" description="Our PAMM (Percentage Allocation Management Module) and MAM (Multi-Account Manager) systems revolutionize asset and forex trading portfolio management. Designed for brokers, they provide efficient, scalable, and customizable solutions tailored for modern trading platforms." />
            <PamBenefits />
            <WhyChooseFinitic />
    </div>
  )
}

export default page