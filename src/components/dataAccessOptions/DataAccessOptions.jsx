import Image from "next/image";
import styles from "./dataAccessOptions.module.css";
import Grid from "../grid/Grid";

const options = [
  {
    icon: "/assets/icons/FLAT.svg",
    title:"Flat Files",
    description:
      "Our S3 interface lets you access our flat files easily and seamlessly. With just a few clicks, you'll have the data you need to power your applications.",
    action: "Explore datasets",
  },
  {
    icon: "/assets/icons/API.svg",
    title: "API",
    description:
      "Our Restful and WebSocket APIs provide flexible and powerful options for accessing our data. Whether you need real-time or historical data, we've got you covered.",
    action: "View docs",
  },
  {
    icon: "/assets/icons/SQL.svg",
    title: "SQL",
    description:
      "Our SQL Query option lets you harness the power of SQL to access our data. With this flexible and intuitive option, you can easily customize queries to fit your needs.",
    action: "Request access",
  },
];

const DataAccessOptions = () => {
  return (
    <div className={`container ${styles.dataAccessOptions}`}>
      <Grid gap="40px" colsLarge={3} colsMedium={2} colsSmall={1}>
        {options.map((option, index) => (
          <div key={index} className={styles.card}>
             <div className={styles.icon}> <Image src={option.icon} width={30} height={30} alt={option.title}/></div>
            <h6 className={styles.title}>{option.title}</h6>
            <p className={styles.description}>{option.description}</p>
            <button className={styles.button}>{option.action}</button>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default DataAccessOptions;
