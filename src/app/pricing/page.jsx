import Pricing from "@/components/pricing/Pricing"
import PricingTable from "@/components/pricingTable/PricingTable"

export const metadata = {
  title: "Plans - Finitic Technology",
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