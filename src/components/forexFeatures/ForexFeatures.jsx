import React from "react";
import style from "./forexFeatures.module.css";
import smile from "../../../public/assets/icons/smile.svg";
import smileMeh from "../../../public/assets/icons/smileMeh.svg";
import Image from "next/image";
import Check from "../../../public/assets/icons/Check";
import X from "../../../public/assets/icons/X";
import Link from "next/link";
import { useTranslations } from "next-intl";
const ForexFeatures = () => {
  const t = useTranslations('Forex_CRM_Page');
  return (
    <div className={`container ${style["forex-features-container"]}`}>
      <div>
        <h4 className={style.title}>{t("Transform Your Brokerage with")}</h4>
        <h4 className={style.title}>
          {t("FINITIC's")} <span className={style["subtitle"]}>{t("Forex CRM")}</span>
        </h4>
        <p className={style["main-description"]}>
        {t("Forex_Features_Main_Description")}
        </p>
        <Link href={`/registration`}><button className={style.button}>{t("Get a Demo")}</button></Link>
      </div>
      <div className={` container ${style.features}`}>
        <div className={style.header}>
          <h6 className={style.title}> <Image src={smile} width={30} height={30} alt="smile" /> {t("With FINITIC CRM")}</h6>
          <h6 className={style["title-without"]}>  <Image src={smileMeh} width={30} height={30} alt="smile" /> {t("Without FINITIC CRM")}</h6>
        </div>
        <div className={style.content}>
          <div className={style.row}>
            <div className={style.cell}>
              <div className={style["feature-icon"]}><Check color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>{t("Effortless Lead Management")}</h6>
              <p className={style.description}>
                {t("Automatically track and convert leads with seamless follow-ups")}
              </p>
            </div>
            <div className={style.cell}>
            <div className={style["feature-icon-x"]}><X color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>{t("Missed Opportunities")}</h6>
              <p className={style.description}>
                {t("Leads slip through due to manual tracking")}
              </p>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.cell}>
            <div className={style["feature-icon"]}><Check color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>{t("IB Portal Integration")}</h6>
              <p className={style.description}>
                {t("Provide your Introducing Brokers with real-time commission and performance tracking")}
              </p>
            </div>
            <div className={style.cell}>
            <div className={style["feature-icon-x"]}><X color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>{t("IB Confusion")}</h6>
              <p className={style.description}>
                {t("Lack of proper commission and performance tracking")}
              </p>
            </div>
          </div>
        
          <div className={style.row}>
            <div className={style.cell}>
            <div className={style["feature-icon"]}><Check color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>{t("Hassle-Free Payments")}</h6>
              <p className={style.description}>
              {t("Ensure smooth deposits and withdrawals with secure transaction handling")}
              </p>
            </div>
            <div className={style.cell}>
            <div className={style["feature-icon-x"]}><X color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>{t("Payment Delays")}</h6>
              <p className={style.description}>
              {t("Slow, inefficient deposit and withdrawal processes")}
              </p>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.cell}>
            <div className={style["feature-icon"]}><Check color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>{t("Global Reach")}</h6>
              <p className={style.description}>
              {t("Multilingual support to engage and retain clients worldwide")}
              </p>
            </div>
            <div className={style.cell}>
            <div className={style["feature-icon-x"]}><X color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>{t("Limited Growth")}</h6>
              <p className={style.description}>
              {t("Language barriers restrict client expansion")}
              </p>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.cell}>
            <div className={style["feature-icon"]}><Check color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>{t("Anywhere Access")}</h6>
              <p className={style.description}>
              {t("Mobile-friendly platform for managing your brokerage on the go")}
              </p>
            </div>
            <div className={style.cell}>
            <div className={style["feature-icon-x"]}><X color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>{t("Restricted Access")}  </h6>
              <p className={style.description}>
              {t("No flexibility to manage operations from mobile devices")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForexFeatures;
