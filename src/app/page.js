import Landing from "@/components/landing/Landing";
import Hero from "@/components/heroSection/Hero";
import Clients from "@/components/clients/Clients";
import Scheduling from "@/components/scheduling/Scheduling";
import Products from "@/components/products/Products";
import Confidence from "@/components/confidence/Confidence";
import Pricing from "@/components/pricing/Pricing";
import HowItWorks from "@/components/howItWorks/HowItWorks";
import Testimonials from "@/components/testimonials/Testimonials";
import Subscribe from "@/components/subscribe/Subscribe";
import Faq from "@/components/faq/Faq";
import { productsData } from "@/data/products";
import { confidenceData } from "@/data/confidenceData";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <>
      <Landing />
      <Hero />
      <Clients />
      <Scheduling currentPath="home" />
      <Confidence Data={confidenceData} />
      <Products
        productsData={productsData}
        title={t("Products")}
        description={t("Optimize Your Brokerage with FINITIC")}
        subDescription={
          t("Explore our diverse range of products tailored to optimize operations, enhance client relationships, and drive success in the trading business")
        }
      />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <Subscribe />
      <Faq  />
    </>
  );
}
