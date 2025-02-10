import Header from '@/components/shared/header/Header'
import ProductHeader from '@/components/shared/productHeader/ProductHeader'
import React from 'react'

const page = () => {
  return (
    <div className=''>
        <ProductHeader  title={"Prop Firm System"} productName={"PAMM/MAM"} startDescription={"Advanced "} endDescription={"Systems for Scalable Forex Management"}/>
        <p className=''>Build, manage, and scale your proprietary trading firm with a fully customizable and automated system.</p>
    </div>
  )
}

export default page