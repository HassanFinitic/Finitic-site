import React from 'react'
import Image from 'next/image'

export default function Logo({ logo, alt }) {
  return (
    <div className="logo-container">
        <Image src={logo} alt={alt} width={100}  />
    </div>
  )
}
