
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
const page = () => {
  return (
    <div className=''>
        <ProductHeader  title={"Prop Firm System"} productName={"PAMM/MAM"} startDescription={"Advanced "} endDescription={"Systems for Scalable pamm Management"}/>
        <p className={style["pam__description"]}>Optimize Portfolio Performance with Smart Investment Allocation</p>
         <ProductButton title={"Book A Demo"} />
         <div className={`container ${style["pamm-container"]}`}>
              <div className={style["pamm-item"]}>
                <Pamm1 />
                Margin Requirement from 0.5%
              </div>
              <div className={style["pamm-item"]}>
              <Pamm2 />
                14+ Connectivity Options
              </div>
              <div className={style["pamm-item"]}>
              <Pamm3 />
                13 Instruments
              </div>
              <div className={style["pamm-item"]}>
              <Pamm4 />
                23/5 Trading hours
              </div>

            </div>
            <PamSolution />
            <PamBenefits />
            <WhyChooseFinitic />
    </div>
  )
}

export default page