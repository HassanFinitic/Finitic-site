"use client";
import { useState } from "react";
import style from "./partnership.module.css";
import Image from "next/image";
import { partnershipModels } from "@/data/partnershipData";



const PartnershipModels = () => {
  const [active, setActive] = useState("Agency Model");

  const handleToggle = (title) => {
    setActive(active === title ? "Agency Model": title);
  };

  const activeModel = partnershipModels.find((model) => model.title === active);

  return (
    <div className={` container ${style["partnership-models__container"]}`}>
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
        {activeModel && (
          <Image
            src={activeModel.image}
            width={625}
            objectFit="cover"
            height={474}
            alt={activeModel.title}
            className={`${style["partnership-image"]} ${active ? style["active"] : ""}`}
          />
        )}
      </div>
    </div>
  );
};

export default PartnershipModels;
