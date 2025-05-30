import { useTranslations } from "next-intl";

export function usePartnershipModels() {


  const t = useTranslations("partner_ship_page");

  return {
    title : t("Our Partnership Models"),
    data:[
    {
      title: t("Agency Model"),
      description:
        t("Collaborate as an agent by introducing clients to FINITIC and earn competitive commissions This model fosters mutual growth in the forex trading industry and rewards your network-building efforts"),
      image: "/assets/images/partner-agency model.svg",
    },
    {
      title: t("Product Integration"),
      description:
        t("Integrate your technology or services with FINITIC’s ecosystem to offer comprehensive solutions to forex brokers Together, we can provide seamless experiences that drive success in currency exchange"),
        image: "/assets/images/Partner-integration.svg",
    },
    {
      title: t("Affiliate Referrals"),
      description:
        t("Refer potential clients to FINITIC and earn attractive referral commissions Share our forex trading strategies and innovative solutions with your network and watch your efforts translate into real rewards"),
        image: "/assets/images/Partner-referral.svg",
    },
    {
      title: t("Reseller Opportunities"),
      description:
        t("Become a reseller of FINITIC’s cutting-edge forex CRM software and services Strengthen your portfolio by offering proven forex trading CRM solutions while leveraging our global reputation"),
        image: "/assets/images/Partner-Opportunities.svg",
    },
  ]};
}