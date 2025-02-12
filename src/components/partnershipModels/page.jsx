"use client";
import {  useEffect, useState } from "react";
import style from "./partnership.module.css";
import Image from "next/image";




const PartnershipModels = ({toggleData}) => {
  const [active, setActive] = useState("");

  const handleToggle = (title) => {
    setActive(active === title ? toggleData["data"][0].title: title);
  };
  useEffect(() => { 
    setActive(toggleData["data"][0].title);
  }, []);
  const activeModel = toggleData["data"].find((model) => model.title === active);

  return (
    <div className={` container ${style["partnership-models__container"]}`}>
      <h6>{toggleData.title}</h6>
      <div className={style["partnership-models"]}>
        <div className={style["partnership-models__pagination"]}>
          {toggleData["data"].map(({ title, description }) => (
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
