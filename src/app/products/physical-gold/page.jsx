import Header from "@/components/shared/header/Header";
import React from "react";
import style from "./physical-gold.module.css";
import Cards from "@/components/productsRoute/IB/Cards";
import Heading from "@/components/productsRoute/shared/Heading";
import Image from "next/image";
import WhyFiniticGold from "@/components/whyFiniticGold/WhyFiniticGold";
import Confidence from "@/components/confidence/Confidence";
import { useFeaturesGoldData } from "@/data/featuresGoldData";
import ProductButton from "@/components/shared/productButton/ProductButton";
import ProductHeader from "@/components/shared/productHeader/ProductHeader";
import { useFeaturesGold } from "@/data/featuresGold";
import { useTranslations } from "next-intl";
import { useMetalsSolutionsData } from "@/data/metalsSolutionsData";
export const metadata = {
  title: "Physical Gold System | Buy & Sell Physical Gold | Finitic Technologies",
  description:"Trade physical gold with Finitic Technologies. Securely buy, sell, and store physical gold with competitive pricing and reliable service.",
  keywords: [ "Physical gold trading", "buy physical gold", "sell physical gold", "gold trading", "gold investment"  ],
};

const page = () => {
  const metalsSolutionsData = useMetalsSolutionsData();
  const featuresGold = useFeaturesGold();
  const featuresGoldData = useFeaturesGoldData();
  const t = useTranslations("physical_gold_page");
  return (
    <div className={` ${style["physical-gold-container"]}`}>
      <ProductHeader
        title={t("Top-Tier Provider of Gold Trading Platforms")}
        productName={t("Physical Gold")}
        startDescription={t("Comprehensive")}
        endDescription={t("Trading Platform")}
      />
      <p className={style.decription}>
        {t("Secure, Scalable, and Fully Integrated System")}
      </p>
      <ProductButton title={t("Request Your Demo")} />
      <div style={{ background: "#F3F3F3" }}>
        <div className="container" style={{ paddingTop: "120px" }}>
          <Heading title={t("Comprehensive Precious Metals Solutions")} />

          <Cards data={metalsSolutionsData} />

          <div style={{ marginTop: "50px" }}>
            <Header
              decription={t("Trade Gold Forex and Precious Metals with Ease")}
            />
            <div className={style["forex-container"]}>
              <div className={style["forex-item"]}>
                <Image
                  alt="Margin Requirement"
                  src="/assets/images/physical1.png"
                  height={20}
                  width={20}
                />
                {t("Margin Requirement from 1/2%")}
              </div>
              <div className={style["forex-item"]}>
                <Image
                  alt="Connectivity Options"
                  src="/assets/images/physical2.png"
                  height={20}
                  width={20}
                />
                {t("14+ Connectivity Options")}
              </div>
              <div className={style["forex-item"]}>
                <Image
                  alt="Instruments"
                  src="/assets/images/physical3.png"
                  height={20}
                  width={20}
                />
                {t("13 Instruments")}
              </div>
              <div className={style["forex-item"]}>
                <Image
                  alt="Trading"
                  src="/assets/images/physical4.png"
                  height={20}
                  width={20}
                />
                {t("23/5 Trading hours")}
              </div>
            </div>
          </div>
          <WhyFiniticGold features={featuresGold} />
        </div>
        <Confidence
          Data={featuresGoldData}
          title={t("Features That Set Us Apart")}
          decription={t("Expand your portfolio with FINITIC’s gold trading platform and provide your clients with trusted solutions to diversify investments in precious metals trading")}
        />
      </div>
    </div>
  );
};

export default page;
