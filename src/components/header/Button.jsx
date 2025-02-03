import Link from 'next/link'
import React from 'react'

export default function Button({ title, url }) {
  return (
    <>
      {url ?
        <Link href={url}>{title}</Link>
        :
        <button>{title}</button>
      }
    </>
  )
}
