// export const confidenceData = [
//     {
//         image: "/assets/images/Customization.svg",
//         imagealt: "Customize your software to match your forex needs",
//         title: "Customizable Solutions",
//         description:
//             "Adapt our platform to meet your unique brokerage needs and growth goals",
//         delay: "0"
//     },
//     {
//         image: "/assets/images/Reports.svg",
//         imagealt: "daily live forex trading reports",
//         title: "Real-Time Data",
//         description:
//             "Access live Forex trading insights for quick decisions",
//         delay: "500"
//     },
//     {
//         image: "/assets/images/pamm5.svg",
//         imagealt: "detailed fintech reporting",
//         title: "Automated Reporting",
//         description:
//             "Simplify operations with detailed, real-time reports for smarter decision-making",
//         delay: "1000"
//     },

// ];

import { useTranslations } from "next-intl";

export function useConfidenceData() {
    const t = useTranslations();
    return [
    {
        image: "/assets/images/Customization.svg",
        imagealt: "Customize your software to match your forex needs",
        title: t("Customizable Solutions"),
        description:
            t("Adapt our platform to meet your unique brokerage needs and growth goals"),
        delay: "0"
    },
    {
        image: "/assets/images/Reports.svg",
        imagealt: "daily live forex trading reports",
        title: t("Real-Time Data"),
        description:
            t("Access live Forex trading insights for quick decisions"),
        delay: "500"
    },
    {
        image: "/assets/images/pamm5.svg",
        imagealt: "detailed fintech reporting",
        title: t("Automated Reporting"),
        description:
            t("Simplify operations with detailed, real-time reports for smarter decision-making"),
        delay: "1000"
    },
    ]
}