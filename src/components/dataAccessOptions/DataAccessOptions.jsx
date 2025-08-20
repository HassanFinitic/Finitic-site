import Image from "next/image";
import styles from "./dataAccessOptions.module.css";
import Grid from "../grid/Grid";
import Flex from "../flex/Flex";
import { useTranslations } from "next-intl";

const DataAccessOptions = () => {
  const t = useTranslations("data_tools_page");

  const options = [
    {
      icon: "/assets/icons/forex.svg",
      title: t("Forex API"),
      description:
        t("Real-time, tick-by-tick updates on 100+ currency pairs from leading global banks"),
      // action: t("Explore datasets"),
    },
    {
      icon: "/assets/icons/crypto.svg",
      title: t("Crypto API"),
      description:
        t("Reliable CEX & DEX market data with real-time and historical insights from top exchanges"),
      // action: t("View docs"),
    },
    {
      icon: "/assets/icons/Commodities.svg",
      title: t("Commodities API"),
      description:
        t("Comprehensive real-time and historical data on precious metals and energy markets"),
      // action: t("Request access"),
    },
  ];

  return (
    <div className={`container ${styles.dataAccessOptions}`}>
      <Grid key={55} gap="40px" colsLarge={3} colsMedium={2} colsSmall={1}>
        {options.map((option, index) => (
          <>
            <Flex key={index} gap="10px" justify="center" direction="column">
              <div className={styles.icon}>
                {" "}
                <Image
                  src={option.icon}
                  width={30}
                  height={30}
                  alt={option.title}
                />
              </div>
              <h3 className={styles.title}>{option.title}</h3>
              <h4 className={styles.description}>{option.description}</h4>
              {/* <button className={styles.button}>{option.action}</button> */}
            </Flex>
          </>
        ))}
      </Grid>
    </div>
  );
};

export default DataAccessOptions;
