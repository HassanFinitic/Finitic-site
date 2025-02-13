import Pricing from "@/components/pricing/Pricing"
import PricingTable from "@/components/pricingTable/PricingTable"

export const metadata = {
  title: "Affordable Plans | Transparent & Competitive Rates",
  description:"Explore our flexible and transparent pricing plans for forex trading and fintech services. No hidden fees—just competitive rates tailored for traders and businesses. Choose your plan today!",
  keywords: ["forex pricing plans", "fintech pricing","trading fees", "forex account costs", "trading platform pricing", "best forex rates", "low-cost trading"],
};

const page = () => {
  return (
    <div className="">
          <Pricing />
        <div className="container"> 
          <PricingTable />
        </div>
        
    </div>
  )
}

export default page