
import Header from "@/components/shared/header/Header"
import style from "./reviews.module.css"
import Clients from "@/components/clients/Clients"
import TestimonialGrid from "@/components/testimonials/TestimonialGrid"
const page = () => {
  return (
    <div>
        <Header title={"Reviews"} decription={"Testimonials from our clients & partners"} />
        <Clients />
        <div className=" " style={{paddingTop: "50px"}}>
          <div className="container">
            <TestimonialGrid />    
          </div>
        </div>
    </div>
  )
}

export default page