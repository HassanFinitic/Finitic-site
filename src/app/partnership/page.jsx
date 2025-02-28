import Header from "@/components/shared/header/Header"
import style from "./partnership.module.css"
import Image from "next/image"
import img from "./../../../public/assets/images/partnershipImg.jpg"
import WhyFintic from "@/components/whyFintic/WhyFintic"
import PartnershipModels from "@/components/partnershipModels/page"
import HowItWorksPartnership from "@/components/howItWorksPartnership/HowItWorksPartnership"
import Subscribe from "@/components/subscribe/Subscribe"
import Faq from "@/components/faq/Faq"
import { partnershipModels } from "@/data/partnershipData";

export const metadata = {
  title: "Partner with Us | Finitic Partnership Programs",
  description:"Grow your business with our forex and fintech partnership programs. Earn commissions, expand your reach, and collaborate with a trusted industry leader. Join our partnership program today! ",
  keywords: ["forex partnership", "fintech affiliate program", "forex IB program","trading partnerships", "forex broker partnership", "fintech business collaboration" ],
};

const page = () => {
  return (
    <div >
        <Header title={"FINITIC Partnership Program"} decription={"Collaborate, Earn, and Grow"} />
        <p className={style.p}>with Finitic Information Technology</p>
        <div className={`container ${style["partnership-flex"]}` }>
             <div>
                <h6>Partnership Program</h6>
                <p>We recognize the transformative power of partnerships. By aligning with innovators and industry leaders in forex trading, we deliver solutions that empower forex brokers and create opportunities for our partners to earn and grow with us in the forex market.</p>
             </div>
             <div>
                <Image src={img}  width={400} height={300} alt="image" />
             </div>
        </div>
        <WhyFintic />
        <PartnershipModels toggleData={partnershipModels}/>
        <HowItWorksPartnership />
        <Subscribe />
        <Faq  landingPage={true} /> 
    </div>
  )
}

export default page