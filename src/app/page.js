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
import { productsData } from "@/data/products";
import { confidenceData } from "@/data/confidenceData";
import DataAccessOptions from "@/components/dataAccessOptions/DataAccessOptions";


// export const metadata = {
//     title: "Finitic Technology",
//     description: "Finitic develops innovative FinTech solutions that empower brokers/investors to streamline your financial operations. Explore our cutting-edge products and services.",
//     keywords: ["products", "products page"],
//     icons: {
//         icon: [
//           {
//             rel: "icon",
//             url: "/favicon.png",
//             type: "image/png",
//           },
//         ],
//       },
//   };



export default function Home() {
  return (
    <>
      <Landing />
      <Hero />
      <Clients />
      <Scheduling />
      <Confidence Data={confidenceData} />
      <Products
        productsData={productsData}
        title={"Products"}
        description={"Optimize Your Brokerage with FINITIC "}
        subDescription={
          "Explore our diverse range of products tailored to optimize operations, enhance client relationships, and drive success in the trading business"
        }
      />
      <DataAccessOptions />

      <Pricing />
      <HowItWorks />
      <StayAHead />
      <Testimonials />
      <Subscribe />
      <Faq  />
    </>
  );
}
