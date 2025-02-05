import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ logo, alt }) {
  return (
    <Link href="/" className="logo-container">

        <Image src={logo} alt={alt} width={100}  />
    </Link>
  )
}
