import React from "react";
import styles from "./whyPropFirm.module.css";
import Image from "next/image";
import Header from "../shared/header/Header";
const WhyPropFirm = () => {
  const features = [
    {
      title: "Customizable Challenge Plans",
      description:
        "Tailor trading challenges your prop trading firm’s unique strategy. Set profit targets, drawdowns, and timeframes to align with your goals and attract skilled traders.",
    },
    {
      title: "Streamlined Evaluation Process",
      description:
        "Automate trader evaluations with transparent workflows. Save time and ensure fairness, a hallmark of leading forex prop firms.",
    },
    {
      title: "Advanced Analytics & Reporting",
      description:
        "Track trader performance in real-time. Use detailed analytics to optimize trading operations and enhance the profitability of your prop trading company.",
    },
    {
      title: "Flexible Payout Structures",
      description:
        "Offer customizable rewards, intervals, and methods to retain top-performing traders and boost your firm’s reputation in the competitive forex prop firm market.",
    },
  ];
  return (
    <div className={`container `}>
      <Header decription={"Why Choose Our Prop Firm System?"} />
      <p className={styles.subheading}>
        Taking control of your Brokerage has never been easier.
      </p>
      <div className={`${styles.whyPropFirm}`}>
        <div className={styles.leftSection}>
          <div className={styles.features}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <span className={styles.circle}><span>{`0${index + 1}`}</span></span>
                <div className={styles.featureContent}>
                  <h6>{feature.title}</h6>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.card}>
            <Image
              width={300}
              height={500}
              src={"/assets/images/whyPropfirm.png"}
              alt="Prop Firm System"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPropFirm;
