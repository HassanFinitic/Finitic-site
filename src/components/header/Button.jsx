import Link from 'next/link'
import React from 'react'
import style from "./header.module.css"

export default function Button({ title, url }) {
  return (
    <>
      {url ?
        <Link className={style.Link} href={url}>{title}</Link>
        :
        <button className={style.button}>{title}</button>
      }
    </>
  )
}
