
import Landing from "@/components/landing/Landing";
import Hero from "@/components/heroSection/Hero";
import Clients from "@/components/clients/Clients";
import Scheduling from "@/components/scheduling/Scheduling";
import Products from "@/components/products/Products";
import Confidence from "@/components/confidence/Confidence";
import Pricing from "@/components/pricing/Pricing";
import HowItWorks from "@/components/howItWorks/HowItWorks";
import StayAHead from "@/components/stayAHead/StayAHead";
import Testimonials from "@/components/testimonials/Testimonials";
import Subscribe from "@/components/subscribe/Subscribe";
import Faq from "@/components/faq/Faq";

export default function Home() {
  return (
    <>
    <Landing />
    <Hero />
    <Clients />
    <Scheduling />
    <Confidence />
    <Products />
    <Pricing />
    <HowItWorks />
    <StayAHead />
    <Testimonials />
    <Subscribe />
    <Faq />
    </>
  );
}
