import React from 'react'
import style from "../../../app/products/ib/ib.module.css"
import Flex from '@/components/flex/Flex'

export default function Heading({title, subTitle}) {
  return (
    <div className={style.heading}>
    <Flex direction={'column'} gap={'10px'} align={'center'}>
      <p className={style.title}>{title}</p>
      <p className={style.subTitle}>{subTitle}</p>
    </Flex>
    </div>
  )
}
