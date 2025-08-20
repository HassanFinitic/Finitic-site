import React from "react";
import style from "./whyFiniticGold.module.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";
const WhyFiniticGold = ({ features }) => {
    const t = useTranslations("physical_gold_page");
  return (
    <section className={` container ${style.featuresSection}`}>
      <div className={style.content}>
        <div className={style.badge}>{t("Features")}</div>
        <h2 className={style.heading}>{features?.title}</h2>
        <p className={style.description}>{features?.description}</p>
        <Link href={`/registration`}>
          <button className={style.demoButton}>
            {t("Get a Demo")}{" "}
            <span>
              <FaArrowRight className={style["arrow"]} />
            </span>
          </button>
        </Link>
      </div>
      <div className={style.cards}>
        {features?.features?.map((feature, index) => (
          <div key={index} className={style.card}>
            <h3 className={style.cardTitle}>{feature.title}</h3>
            <h4 className={style.cardText}>{feature.description}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyFiniticGold;
