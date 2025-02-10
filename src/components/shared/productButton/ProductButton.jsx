import React from 'react'
import style from "./productButton.module.css"
import Link from 'next/link'
const ProductButton = ({title}) => {
  return (
  <div style={{
          textAlign
            : "center"
        }}>
          <Link href={"/registration"} className={style.button}>{title}</Link>
        </div>
  )
}

export default ProductButton