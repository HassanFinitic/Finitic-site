import Header from "@/components/shared/header/Header";
import React from "react";
import style from "./physical-gold.module.css";
import Cards from "@/components/productsRoute/IB/Cards";
import Heading from "@/components/productsRoute/shared/Heading";
import { metalsSolutionsData } from "@/data/metalsSolutionsData";
import Image from "next/image";
import WhyFiniticGold from "@/components/whyFiniticGold/WhyFiniticGold";
import Confidence from "@/components/confidence/Confidence";
import { featuresGoldData } from "@/data/featuresGoldData";
import ProductButton from "@/components/shared/productButton/ProductButton";
import ProductHeader from "@/components/shared/productHeader/ProductHeader";
const page = () => {
  return (
    <div className={` ${style["physical-gold-container"]}`}>
      <ProductHeader title={"Top-Tier Provider of Gold Trading Platforms"} productName={"Physical Gold"} startDescription={"Comprehensive "} endDescription={"Trading Platform"} />
      <p className={style.decription}>
        Secure, Scalable, and Fully Integrated System.
      </p>
      <ProductButton title={"Request Your Demo"} />
      <div style={{ background: "#F3F3F3" }}>
        <div
          className="container">
          <Heading title={"Comprehensive Precious Metals Solutions"} />

          <Cards data={metalsSolutionsData} />

          <div style={{ marginTop: "50px" }}>
            <Header decription={"Trade Gold Forex and Precious Metals with Ease."} />
            <div className={style["forex-container"]}>
              <div className={style["forex-item"]}>
                <Image alt="Margin Requirement" src="/assets/images/physical1.png" height={20} width={20} />
                Margin Requirement from 0.5%
              </div>
              <div className={style["forex-item"]}>
                <Image alt="Connectivity Options" src="/assets/images/physical2.png" height={20} width={20} />
                14+ Connectivity Options
              </div>
              <div className={style["forex-item"]}>
                <Image alt="Instruments" src="/assets/images/physical3.png" height={20} width={20} />
                13 Instruments
              </div>
              <div className={style["forex-item"]}>
                <Image alt="Trading" src="/assets/images/physical4.png" height={20} width={20} />
                23/5 Trading hours
              </div>

            </div>
            
          </div>
          <WhyFiniticGold />

        </div>
        <Confidence Data={featuresGoldData} title="Features That Set Us Apart" decription="Expand your portfolio with FINITIC’s gold trading platform and provide your clients with trusted solutions to diversify investments in precious metals trading." />
      </div>
    </div>
  );
};

export default page;
