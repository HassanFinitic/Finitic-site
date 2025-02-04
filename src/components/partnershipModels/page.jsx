"use client";
import { useState } from "react";
import style from "./partnership.module.css";

const partnershipModels = [
  {
    title: "Agency Model",
    description:
      "Collaborate as an agent by introducing clients to FINITIC and earn competitive commissions. This model fosters mutual growth in the forex trading industry and rewards your network-building efforts.",
  },
  {
    title: "Product Integration",
    description:
      "Integrate your technology or services with FINITIC’s ecosystem to offer comprehensive solutions to forex brokers. Together, we can provide seamless experiences that drive success in currency exchange.",
  },
  {
    title: "Affiliate Referrals",
    description:
      "Refer potential clients to FINITIC and earn attractive referral commissions. Share our forex trading strategies and innovative solutions with your network and watch your efforts translate into real rewards.",
  },
  {
    title: "Reseller Opportunities",
    description:
      "Become a reseller of FINITIC’s cutting-edge forex CRM software and services. Strengthen your portfolio by offering proven forex trading CRM solutions while leveraging our global reputation.",
  },
];

const PartnershipModels = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (title) => {
    setActive(active === title ? null : title);
  };

  return (
    <div className={style["partnership-models__container"]}>
      <h6>Our Partnership Models</h6>
      <div className={style["partnership-models"]}>
        <div className={style["partnership-models__pagination"]}>
          {partnershipModels.map(({ title, description }) => (
            <div
              key={title}
              className={`${style["pagination"]} ${active === title ? style["active"] : ""}`}
            >
              <button
                type="button"
                onClick={() => handleToggle(title)}
                aria-expanded={active === title}
              >
                {title}
              </button>
              <div className={style["content-wrapper"]}>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnershipModels;