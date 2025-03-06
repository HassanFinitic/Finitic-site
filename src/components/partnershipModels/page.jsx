"use client";
import { useEffect, useState } from "react";
import style from "./partnership.module.css";
import Image from "next/image";
import Grid from "../grid/Grid";
import Flex from "../flex/Flex";

const PartnershipModels = ({ toggleData }) => {
  const [active, setActive] = useState("");

  const handleToggle = (title) => {
    setActive(active === title ? toggleData["data"][0].title : title);
  };
  useEffect(() => {
    setActive(toggleData["data"][0].title);
  }, []);
  const activeModel = toggleData["data"].find(
    (model) => model.title === active
  );

  return (
    // <div className={` container ${style["partnership-models__container"]}`}>
    //   <h6>{toggleData.title}</h6>
    //   <div className={style["partnership-models"]}>
    //     <div className={style["partnership-models__pagination"]}>
    //       {toggleData["data"].map(({ title, description }) => (
    //         <div
    //           key={title}
    //           className={`${style["pagination"]} ${active === title ? style["active"] : ""}`}
    //         >
    //           <button
    //             type="button"
    //             onClick={() => handleToggle(title)}
    //             aria-expanded={active === title}
    //           >
    //             {title}
    //           </button>
    //           <div className={style["content-wrapper"]}>
    //             <p>{description}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //     {activeModel && (
    //       <Image
    //         src={activeModel.image}
    //         width={625}
    //         objectFit="cover"
    //         height={474}
    //         alt={activeModel.title}
    //         className={`${style["partnership-image"]} ${active ? style["active"] : ""}`}
    //       />
    //     )}
    //   </div>
    // </div>
    // <div className={` container ${style["partnership-models"]}`}>
    //   <h6>{toggleData.title}</h6>
    //   <Grid gap={"20px"} colsLarge={4} colsMedium={1} colsSmall={1} className={` container ${style["partnership-models"]}`}>
    //     {toggleData["data"].map((item) => (
    //       <Flex key={item.title} direction={"column"} gap={"20px"}>
    //         <div className={style.img}>
    //           <Image src={item.image} width={25} height={25} alt={item.title} />
    //         </div>
    //         <p className={style.title}>{item.title}</p>
    //         <p className={style.description}>{item.description}</p>
    //       </Flex>
    //     ))}
    //   </Grid>
    // </div>
    <div className={` container`} style={{ marginTop: "60px" }}>
      <h3>{toggleData.title}</h3>
      <Grid
        gap={"20px"}
        colsLarge={4}
        colsMedium={1}
        colsSmall={1}
        className={`${style["partnership-models"]}`}
      >
        {toggleData["data"].map((item) => (
          <Flex key={item.title} direction={"column"} gap={"20px"}>
            <div className={style.img}>
              <Image src={item.image} width={25} height={25} alt={item.title} />
            </div>
            <p className={style.title}>{item.title}</p>
            <p className={style.description}>{item.description}</p>
          </Flex>
        ))}
      </Grid>
    </div>
  );
};

export default PartnershipModels;
