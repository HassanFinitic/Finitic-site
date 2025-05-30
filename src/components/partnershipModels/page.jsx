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
