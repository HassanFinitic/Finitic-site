import React from 'react'
import style from "../../../app/products/ib/ib.module.css"
import Flex from '@/components/flex/Flex'

export default function Heading({title, subTitle}) {
  return (
    <div className={style.heading}>
    <Flex direction={'column'} gap={'10px'} align={'center'}>
      <h2 className={style.title}>{title}</h2>
      <h3 className={style.subTitle}>{subTitle}</h3>
    </Flex>
    </div>
  )
}
