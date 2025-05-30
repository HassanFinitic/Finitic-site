import { useTranslations } from "next-intl";

export function useFeaturesGold() {
    const t = useTranslations("physical_gold_page");
    return {
    title: t("Why Choose FINITIC’s Physical Gold System?"),
    description: t("Discover how we've helped businesses scale and innovate with Finitic technology"),
    features: [
        {
            title: t("Seamless Trade Execution"),
            description: t("Empower your business with a high-performance platform that ensures efficient gold trading, minimizing slippage and enhancing trade accuracy")
        },
        {
            title: t("Regulatory Compliance & Transparency"),
            description: t("Built with strict adherence to global financial regulations, ensuring audit trails and real-time reporting for full transparency")
        },
        {
            title: t("Unmatched Security"),
            description: t("Utilizing advanced encryption and multi-layer security protocols to safeguard every trade, transaction, and client data")
        }
    ]
    }
}