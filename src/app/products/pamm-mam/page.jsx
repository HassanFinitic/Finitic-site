import Header from '@/components/shared/header/Header'
import ProductHeader from '@/components/shared/productHeader/ProductHeader'
import React from 'react'
import style from "./pamm.module.css"
import ProductButton from '@/components/shared/productButton/ProductButton'
const page = () => {
  return (
    <div className=''>
        <ProductHeader  title={"Prop Firm System"} productName={"PAMM/MAM"} startDescription={"Advanced "} endDescription={"Systems for Scalable Forex Management"}/>
        <p className={style["pam__description"]}>Optimize Portfolio Performance with Smart Investment Allocation</p>
         <ProductButton title={"Book A Demo"} />
    </div>
  )
}

export default page