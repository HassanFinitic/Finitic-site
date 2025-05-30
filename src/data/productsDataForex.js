import Forex from "../../public/assets/icons/Forex";
import Gold from "../../public/assets/icons/Gold";
import Ib from "../../public/assets/icons/Ib";
import { useTranslations } from "next-intl";

// ✅ This must be called inside a React component
export function useProductsDataForex() {
  const t = useTranslations('Forex_CRM_Page');
  return [
    {
      icon: <Forex />,
      title: t("Boost Client Retention"),
      description:
        t("Personalize forex trading experiences to keep clients loyal"),
      delay: "0",
    },
    {
      icon: <Gold />,
      title: t("Scale Seamlessly"),
      description:
        t("Grow effortlessly, whether you're launching a new brokerage or scaling an established one"),
      delay: "500",
      height: true,
    },
    {
      icon: <Ib />,
      title: t("Increase Efficiency"),
      description: t("Automate tasks, streamlining currency trading operations"),
      delay: "1000",
    },
  ];
}
