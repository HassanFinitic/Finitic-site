import { useTranslations } from "next-intl";

export function useMetalsSolutionsData() {
    const t = useTranslations("physical_gold_page");
    return [
    {
        id: 1,
        title: t("Real-Time Market Access"),
        description: t("Gain instant access to live gold and precious metals prices, market trends, and trading data, ensuring your clients make informed decisions with up-to-the-minute insights")
    },
    {
        id: 2,
        title: t("Secure Storage & Delivery Integration"),
        description: t("Partner with globally recognized vault providers to offer insured, secure storage and seamless physical gold delivery options, ensuring safe asset management for your clients")
    },
    {
        id: 3,
        title: t("Customizable Client Portals"),
        description: t("Provide a user-friendly, fully branded trading environment where clients can track portfolios, analyze market trends, execute trades, and access historical data in real-time")
    },
  
]
}
