import Forex from "../../public/assets/icons/Forex";
import Gold from "../../public/assets/icons/Gold";
import Ib from "../../public/assets/icons/Ib";
import Mam from "../../public/assets/icons/Mam";
import Mt4 from "../../public/assets/icons/Mt4";
import Prop from "../../public/assets/icons/Prop";
import { useTranslations } from "next-intl";

export function useProductsData() {
  const t = useTranslations();

  return [
    {
      icon: <Forex />,
      title: t("Forex CRM"),
      description: t(
        "A centralized platform tailored for brokers to manage client relationships, streamline operations, and implement effective Forex trading strategies"
      ),
      delay: "0",
    },
    {
      icon: <Ib />,
      title: t("IB Portal"),
      description: t(
        "Equip Brokers with a user-friendly system to track performance, manage commissions, and leverage advanced Forex analysis tools"
      ),
      delay: "500",
    },
    {
      icon: <Gold />,
      title: t("Physical Gold System"),
      description: t(
        "Offer secure trading and management of gold assets, providing brokers with a reliable solution alongside Forex trading platforms"
      ),
      delay: "1000",
    },
    {
      icon: <Mam />,
      title: t("PAMM/MAM"),
      description: t(
        "Enable efficient management of pooled accounts with customizable tools that align with your brokerage’s Forex trading strategies"
      ),
      delay: "1000",
    },
    {
      icon: <Mt4 />,
      title: t("MT4/MT5 Administration"),
      description: t(
        "Seamlessly integrate with leading Forex trading platforms, optimizing broker operations and enhancing strategic trading"
      ),
      delay: "500",
    },
    {
      icon: <Prop />,
      title: t("Prop Firm Solutions"),
      description: t(
        "Empower brokers to design proprietary trading programs with tools for evaluating performance, implementing Forex signals, and fostering trader success"
      ),
      delay: "0",
    },
  ];
}
