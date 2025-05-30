import Header from "@/components/shared/header/Header";
import DataAccessOptions from "@/components/dataAccessOptions/DataAccessOptions";
import Grid from "@/components/grid/Grid";
import Button from "@/components/shared/button/Button";
import Flex from "@/components/flex/Flex";
import Subscribe from "@/components/subscribe/Subscribe";
import styles from "./dataTools.module.css";
import Check from "../../../../public/assets/icons/Check";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Finitic Data Tools – Powerful Data Management & Analysis Solutions",
  description: "Boost productivity with AI-driven data tools from Finitic. Optimize data management, analytics, automation, and visualization for smarter business decisions. Enhance efficiency with big data processing, predictive analytics, and seamless data integration.",
  keywords: [
    "AI data tools",
    "data management software",
    "data analytics solutions",
    "big data processing",
    "predictive analytics",
    "data automation",
    "machine learning analytics",
    "business intelligence tools",
    "cloud data integration",
    "real-time data analysis",
    "data visualization software",
    "enterprise data solutions",
    "data science tools",
    "Finitic data platform",
    "advanced data insights"
  ]
};

const data = [
  {
    planTitle: "Basic",
    subTitle: "Best for trying our APIs",
    price: 500,
    features: [
      "10 Product",
      "10 API calls per minute (6 seconds each)",
      "1 Websockets",
      "1 Years Historical K-line",
      "Last Price",
      "End of Day Data",
    ],
  },
  {
    planTitle: "Starter",
    subTitle: "Best for WebSocket",
    price: 1000,
    features: [
      "100 products available",
      "Supports Forex, Commodities, Stocks, Cryptocurrencies",
      "60 API calls per minute (1 second each)",
      "1 Websockets",
      "1 Years Historical K-line",
      "Last Price",
      "End of Day Data",
      "Real-time K-line",
      "Order Book",
      "Real-time tick-by-tick",
    ],
  },
  {
    planTitle: "Premium",
    subTitle: "Best for Trades",
    price: 2000,
    features: [
      "200 products available",
      "Supports Forex, Commodities, Stocks, Cryptocurrencies",
      "600 API calls per minute (10 second each)",
      "3 Websockets",
      "3 Years Historical K-line",
      "Last Price",
      "End of Day Data",
      "Real-time K-line",
      "Order Book",
      "Real-time tick-by-tick",
    ],
  },
  {
    planTitle: "Professional",
    subTitle: "Best for exchanges",
    price: 3000,
    features: [
      "3000 products available",
      "Supports Forex, Commodities, Stocks, Cryptocurrencies",
      "1200 API calls per minute (20 second each)",
      "10 Websockets",
      "5 Years Historical K-line",
      "Last Price",
      "End of Day Data",
      "Real-time K-line",
      "Order Book",
      "Real-time tick-by-tick",
    ],
  },
];

export default function page() {
  const t = useTranslations("data_tools_page");

  const data = [
    {
      planTitle: t("Basic"),
      subTitle: t("Best for trying our APIs"),
      price: 500,
      features: [
        t("10 Product"),
        t("10 API calls per minute (6 seconds each)"),
        t("1 Websockets"),
        t("1 Years Historical K-line"),
        t("Last Price"),
        t("End of Day Data"),
      ],
    },
    {
      planTitle: t("Starter"),
      subTitle: t("Best for WebSocket"),
      price: 1000,
      features: [
        t("100 products available"),
        t("Supports Forex, Commodities, Stocks, Cryptocurrencies"),
        t("60 API calls per minute (1 second each)"),
        t("1 Websockets"),
        t("1 Years Historical K-line"),
        t("Last Price"),
        t("End of Day Data"),
        t("Real-time K-line"),
        t("Order Book"),
        t("Real-time tick-by-tick"),
      ],
    },
    {
      planTitle: t("Premium"),
      subTitle: t("Best for Trades"),
      price: 2000,
      features: [
        t("200 products available"),
        t("Supports Forex, Commodities, Stocks, Cryptocurrencies"),
        t("600 API calls per minute (10 second each)"),
        t("3 Websockets"),
        t("3 Years Historical K-line"),
        t("Last Price"),
        t("End of Day Data"),
        t("Real-time K-line"),
        t("Order Book"),
        t("Real-time tick-by-tick"),
      ],
    },
    {
      planTitle: t("Professional"),
      subTitle: t("Best for exchanges"),
      price: 3000,
      features: [
        t("3000 products available"),
        t("Supports Forex, Commodities, Stocks, Cryptocurrencies"),
        t("1200 API calls per minute (20 second each)"),
        t("10 Websockets"),
        t("5 Years Historical K-line"),
        t("Last Price"),
        t("End of Day Data"),
        t("Real-time K-line"),
        t("Order Book"),
        t("Real-time tick-by-tick"),
      ],
    },
  ];

  return (
    <div>
      <Header
        title={t("Advanced Market Data Tools")}
        decription={t("Real-Time Market Data APIs")}
        fontSizeDescription={"3rem"}
      />
      <Header
        title={t("Forex, Commodities, and Crypto")}
        decription={t("Ultra-fast, highly accurate, and seamlessly integrated for uninterrupted trading")}
        fontSizeDescription={"1rem"}
      />

      <Flex gap="40px" align="center" justify="center">
        <Button
          background={"black"}
          text={t("Get your Free API Key")}
          url="/registration"
        />
        <Button text={t("View Pricing")} url="/registration" />
      </Flex>

      <br />
      <br />
      <br />

      <Header
        title={t("Real-time & Historical")}
        decription={t("Extensive Market Data APIs")}
        fontSizeDescription={"1.5rem"}
      />

      <DataAccessOptions />

      <Header
        title="Pricing"
        decription="Instant Access Cancel Anytime"
        fontSizeDescription={"1.5rem"}
      />

      <Grid
        className={`container ${styles["cards"]}`}
        key={55}
        gap="10px"
        colsLarge={4}
        colsMedium={2}
        colsSmall={1}
      >
        {data.map((item, index) => (
          <Flex
            className={styles.card}
            key={index}
            gap="25px"
            justify="start"
            direction="column"
          >
            <h6 className={styles.title}>{item.planTitle}</h6>
            <p className={styles.subTitle}>{item.subTitle}</p>
            <p className={styles.description}>{item.price} {t("USD")} <span> {t("/Month")}</span></p>
            <ul>
              {item.features.map((feature, index) => (
                <li key={index}>
                  <Flex direction="row" gap="10px">
                    <div>
                      <Check color="white" />
                    </div>
                    {feature}
                  </Flex>
                </li>
              ))}
            </ul>
          </Flex>
        ))}
      </Grid>

      <Subscribe />
    </div>
  );
}
