import Faq from '@/components/faq/Faq'
import React from 'react'
import { useTranslations } from "next-intl";

export const metadata = {
  title: "FAQs | Finitic Technologies",
  description:"Find answers to common questions about Finitic's comprehensive financial brokerage software, including our Forex CRM, IB Portal, Physical Gold System, PAMM/MAM, and Prop Firm solutions.",
  keywords: ["Finitic FAQ", "financial brokerage software questions", "Forex CRM FAQ", "IB Portal FAQ", "Physical Gold System FAQ", "PAMM/MAM FAQ", "Prop Firm FAQ"],
};

const page = () => {
    const t = useTranslations("faq_page");
  return (
    <div>
        <Faq landingPage={false} description={t("Get quick answers to your questions")} />
    </div>
  )
}

export default page