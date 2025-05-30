// export const featuresIB =[
//     {
//         id: 1,
//         title: "Integrated Partner Referral System",
//         description: "Leverage infinite-level referral programs to help forex brokers expand their networks seamlessly"
//     },
//     {
//         id: 2,
//         title: "Unique Partner Referral Links",
//         description: "Provide partners with links to drive traffic from ads, emails, social media, and messengers"
//     },
//     {
//         id: 3,
//         title: "Custom QR Code Generator",
//         description: "Create QR codes to promote forex services via flyers, business cards, ads, and events"
//     },
//     {
//         id: 4,
//         title: "Accurate Geolocation Tracking",
//         description: "Access geolocation data to analyze market trends and track partner activity with precision"
//     },
//     {
//         id: 5,
//         title: "Advanced Performance Analytics",
//         description: "Monitor client sources, partner activity, and media channel performance effectively"
//     },
//     {
//         id: 6,
//         title: "Mobile App Integration",
//         description: "Provide partners with an app to manage referrals, track performance, and access tools seamlessly"
//     }
// ]


import { useTranslations } from "next-intl";
// ✅ This must be called inside a React component
export function useFeaturesIB() {
    const t = useTranslations("IB_Portal_Page");
  return [
    {
        id: 1,
        title: t("Integrated Partner Referral System"),
        description: t("Leverage infinite-level referral programs to help forex brokers expand their networks seamlessly")
    },
    {
        id: 2,
        title: t("Unique Partner Referral Links"),
        description: t("Provide partners with links to drive traffic from ads, emails, social media, and messengers")
    },
    {
        id: 3,
        title: t("Custom QR Code Generator"),
        description: t("Create QR codes to promote forex services via flyers, business cards, ads, and events")
    },
    {
        id: 4,
        title: t("Accurate Geolocation Tracking"),
        description: t("Access geolocation data to analyze market trends and track partner activity with precision")
    },
    {
        id: 5,
        title: t("Advanced Performance Analytics"),
        description: t("Monitor client sources, partner activity, and media channel performance effectively")
    },
    {
        id: 6,
        title: t("Mobile App Integration"),
        description: t("Provide partners with an app to manage referrals, track performance, and access tools seamlessly")
    }
  ];
}
