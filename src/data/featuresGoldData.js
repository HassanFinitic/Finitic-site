
import { useTranslations } from "next-intl";

export function useFeaturesGoldData() {
    const t = useTranslations("physical_gold_page");
    return [
    {
        title: t("Flexible Trading Options"),
        description:
          t("Facilitate spot trading, physical settlement, and leverage trading to accommodate various investment strategies"),
    image: "/assets/images/gold1.svg",
      },
      {
        title: t("24/7 Support"),
        description:
          t("Our expert team is available around the clock to assist with trading operations, technical issues, and market insights"),
          image: "/assets/images/gold2.svg",

      },
      {
        title: t("Asset Integration"),
        description:
          t("Integrate gold trading with forex, cryptocurrencies, and other financial instruments to provide a holistic investment platform"),
          image: "/assets/images/gold3.svg",

      },
    ]
}