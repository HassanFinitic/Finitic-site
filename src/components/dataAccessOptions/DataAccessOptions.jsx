import Image from "next/image";
import styles from "./dataAccessOptions.module.css";
import Grid from "../grid/Grid";
import Flex from "../flex/Flex";

const options = [
  {
    icon: "/assets/icons/forex.svg",
    title: "Forex API",
    description:
      "Real-time, tick-by-tick updates on 100+ currency pairs from leading global banks.",
    action: "Explore datasets",
  },
  {
    icon: "/assets/icons/crypto.svg",
    title: "Crypto API",
    description:
      "Reliable CEX & DEX market data with real-time and historical insights from top exchanges.",
    action: "View docs",
  },
  {
    icon: "/assets/icons/Commodities.svg",
    title: "Commodities API",
    description:
      "Comprehensive real-time and historical data on precious metals and energy markets.",
    action: "Request access",
  },
];

const DataAccessOptions = () => {
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
              <h6 className={styles.title}>{option.title}</h6>
              <p className={styles.description}>{option.description}</p>
              {/* <button className={styles.button}>{option.action}</button> */}
            </Flex>
          </>
        ))}
      </Grid>
    </div>
  );
};

export default DataAccessOptions;
