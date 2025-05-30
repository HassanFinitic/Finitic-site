
import { useTranslations } from "next-intl";
export function useWhyChooseFinitic() {
    const t = useTranslations("pamm_mam_page");
    return [
    {
      title: t("Flexible Allocation Methods"),
      description:
        t("Choose equity-based, lot-based, or percentage-based allocation for personalized currency trading strategies"),
      image: "/assets/images/pamm1.svg",
    },
    {
      title: t("Multi-Account Management"),
      description:
        t("Manage multiple client accounts from a single interface and execute bulk orders efficiently, simplifying trading software management"),
        image: "/assets/images/pamm2.svg",
    },
    {
      title: t("Advanced Risk Management"),
      description:
        t("Protect investments with customizable risk parameters and compliance tools, supporting secure and reliable trading platforms"),
        image: "/assets/images/pamm3.svg",
    },
    {
      title: t("Seamless Platform Integration"),
      description:
        t("Easily integrate with industry-standard platforms like MT4 and MT5 without interrupting your current forex trading operations"),
        image: "/assets/images/pamm4.svg",
    },
    {
      title: t("Real-Time Performance Tracking"),
      description:
        t("Track live performance metrics, analyze data, and access transparent reporting to enhance forex copy trading outcomes"),
        image: "/assets/images/pamm5.svg",
    },
    {
      title: t("Transparent Reporting"),
      description:
        t("Build trust with your clients through clear and accurate reporting Provide detailed insights for both investors and managers to ensure accountability and confidence"),
        image: "/assets/images/pamm6.svg",
    },
  ];
}