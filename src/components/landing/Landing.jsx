"use client";
import React, { useEffect } from "react";
import style from "./landing.module.css";
import data from "../../data/landingPage.json";
import Aos from "aos";
import Button from "../shared/button/Button";
import { useTranslations } from "next-intl";


export default function Landing() {
  const t = useTranslations();

  useEffect(() => {
    Aos.init({
      duration: 2000, 
    });
  }, []);

  return (
    <div className={style["full-landing-container"]}>
      <div className={`container ${style["landing-container"]}`}>
        <div className={style["content"]}>
          <p data-aos="fade-up" className={style["text"]}>
            {t(data.text)}
          </p>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className={style["title"]}>
            {t(data.title)}
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className={style["description"]}
          >
            {t(data.description)}
          </p>

          <Button url={"/registration"} text={t(data.buttonText)} />

        </div>
      </div>
    </div>
  );
}