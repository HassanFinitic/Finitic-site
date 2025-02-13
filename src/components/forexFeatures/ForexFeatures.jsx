import React from "react";
import style from "./forexFeatures.module.css";
import smile from "../../../public/assets/icons/smile.svg";
import smileMeh from "../../../public/assets/icons/smileMeh.svg";
import Image from "next/image";
import Check from "../../../public/assets/icons/Check";
import X from "../../../public/assets/icons/X";
const ForexFeatures = () => {
  return (
    <div className={`container ${style["forex-features-container"]}`}>
      <div>
        <h4 className={style.title}>Transform Your Brokerage with</h4>
        <h4 className={style.title}>
          FINITIC's <span className={style["subtitle"]}>Forex CRM</span>
        </h4>
        <p className={style["main-description"]}>
          We provide an advanced Forex CRM tailored to enhance broker-client
          relationships, automate operations, and drive growth in the forex
          trading industry. Our innovative solutions are designed to meet the
          demands of modern forex brokers.
        </p>
        <button className={style.button}>Get a Demo</button>
      </div>
      <div className={` container ${style.features}`}>
        <div className={style.header}>
          <h6 className={style.title}> <Image src={smile} width={30} height={30} alt="smile" /> With FINITIC CRM</h6>
          <h6 className={style["title-without"]}>  <Image src={smileMeh} width={30} height={30} alt="smile" /> Without FINITIC CRM</h6>
        </div>
        <div className={style.content}>
          <div className={style.row}>
            <div className={style.cell}>
              <div className={style["feature-icon"]}><Check color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>Effortless Lead Management</h6>
              <p className={style.description}>
                Automatically track and convert leads with seamless follow-ups.
              </p>
            </div>
            <div className={style.cell}>
            <div className={style["feature-icon-x"]}><X color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>Missed Opportunities </h6>
              <p className={style.description}>
                Leads slip through due to manual tracking.
              </p>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.cell}>
            <div className={style["feature-icon"]}><Check color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>IB Portal Integration</h6>
              <p className={style.description}>
                Provide your Introducing Brokers with real-time commission and performance tracking.
              </p>
            </div>
            <div className={style.cell}>
            <div className={style["feature-icon-x"]}><X color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>IB Confusion</h6>
              <p className={style.description}>
                Lack of proper commission and performance tracking.
              </p>
            </div>
          </div>
        
          <div className={style.row}>
            <div className={style.cell}>
            <div className={style["feature-icon"]}><Check color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>Hassle-Free Payments </h6>
              <p className={style.description}>
              Ensure smooth deposits and withdrawals with secure transaction handling.
              </p>
            </div>
            <div className={style.cell}>
            <div className={style["feature-icon-x"]}><X color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>Payment Delays </h6>
              <p className={style.description}>
              Slow, inefficient deposit and withdrawal processes.
              </p>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.cell}>
            <div className={style["feature-icon"]}><Check color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>Global Reach </h6>
              <p className={style.description}>
              Multilingual support to engage and retain clients worldwide.
              </p>
            </div>
            <div className={style.cell}>
            <div className={style["feature-icon-x"]}><X color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>Limited Growth </h6>
              <p className={style.description}>
              Language barriers restrict client expansion.
              </p>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.cell}>
            <div className={style["feature-icon"]}><Check color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>Anywhere Access  </h6>
              <p className={style.description}>
              Mobile-friendly platform for managing your brokerage on the go.
              </p>
            </div>
            <div className={style.cell}>
            <div className={style["feature-icon-x"]}><X color={"#fff"} size={15}/></div>
              <h6 className={style["feature-title"]}>Restricted Access  </h6>
              <p className={style.description}>
              No flexibility to manage operations from mobile devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForexFeatures;
