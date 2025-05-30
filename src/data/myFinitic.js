import { useTranslations } from "next-intl";

export function useFeaturesData() {
    const t = useTranslations("partner_ship_page")
    return [
    {
      features: [
        {
          id: 1,
          title: t("Innovative Solutions"),
          description: t("Collaborate on cutting-edge technologies in the forex trading platform space that set industry standards"),
          color: "#ff7f00",
        },
        {
          id: 2,
          title: t("Mutual Growth"),
          description: t("Engage in partnerships designed for shared success and profitability in online trading"),
          color: "#ff7f00",
        },
      ],
    },
    {
      features: [
        {
          id: 3,
          title: t("Global Reach"),
          description: t("Access a broad network of forex brokers and financial institutions"),
          color: "#ff7f00",
        },
        {
          id: 4,
          title: t("Dedicated Support"),
          description: t("Receive comprehensive assistance throughout our collaboration to enhance your forex trading reviews"),
          color: "#ff7f00",
        },
      ],
    },
  ];
}