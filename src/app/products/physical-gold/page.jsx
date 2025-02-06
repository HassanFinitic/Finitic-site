import Header from "@/components/shared/header/Header";
import React from "react";
import style from "./physical-gold.module.css";
import Cards from "@/components/productsRoute/IB/Cards";
import Heading from "@/components/productsRoute/shared/Heading";
import { featuresIB } from "@/data/featuresIB";
const page = () => {
  return (
    <div className={` ${style["forex-container"]}`}>
      <Header
        title={"Top-Tier Provider of Gold Trading Platforms"}
        decription={"Comprehensive Physical Gold Trading Platform"}
      />
      <p className={style.decription}>
        Secure, Scalable, and Fully Integrated System.
      </p>
      <button className={style.button}>Request Your Demo</button>
      <div className="container">
        <Heading title={"Comprehensive Precious Metals Solutions"} />

        <Cards data={featuresIB} />
      </div>
    </div>
  );
};

export default page;
