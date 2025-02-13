import Faq from "@/components/faq/Faq"
import Scheduling from "@/components/scheduling/Scheduling"
import Testimonials from "@/components/testimonials/Testimonials"

export const metadata = {
  title: "Sign Up for Forex & Fintech Services | Quick & Secure Registration ",
  description:"Register now to access powerful forex trading and fintech solutions. Fast, secure, and hassle-free sign-up process for traders, investors, and businesses. Join us today! ",
  keywords: ["forex registration", "sign up for forex trading", "open trading account", "fintech sign up", "trading platform registration", "forex broker account" ],
};
const Registration = () => {
  return (
    <div>
       <Scheduling />
       <Testimonials />
       <Faq />
    </div>
  )
}

export default Registration