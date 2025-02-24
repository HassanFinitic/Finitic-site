import React from 'react'
import style from "./blog.module.css"
import Header from '@/components/shared/header/Header'
import Button from '@/components/shared/button/Button'

export default function page() {
  return (
    <div>
        <div className="container">
            <Header title={"Blogs"} decription={"Insights and Updates for your growth"} />
            <div style={{ padding: "1rem 0" }}>
            <Button url={"/contact-us"} text={"Contact us"} center={true} />
          </div>
        </div>
    </div>
  )
}
