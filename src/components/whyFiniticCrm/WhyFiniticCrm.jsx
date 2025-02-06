import { whyFinticCrmData } from "@/data/whyFinticCrm"
import Grid from "../grid/Grid"
import Header from "../shared/header/Header"
import style from "./whyFiniticCrm.module.css"
import Image from "next/image"

const WhyFiniticCrm = () => {
  return (
    <div className={ `     ${style["whyFinicCrm-container"]}`}>
      <Header fontSizeDescription="35px" decription={"Why Choose FINITIC's Forex CRM?"} />
      <div className={`container ${style["finitic-crm__grid-container"]}`}>
        <Grid  colsLarge={3} colsMedium={2} colsSmall={1} gap="24px">
          {whyFinticCrmData.slice(0, 3).map((card) => (
            <div key={card.id} className={style.card}>
              <div className={style.iconContainer}>
                <Image width={100} height={200} src={card.icon} alt={card.title} className={style.icon} />
              </div>
              <h6 className={style.title}>{card.title}</h6>
              <p className={style.description}>{card.description}</p>
            </div>
          ))}
        </Grid>
      </div>
      <div className={`container ${style["finitic-crm__grid-container"]}`}>
        <Grid colsLarge={2} colsMedium={2} colsSmall={1} gap="24px">
          {whyFinticCrmData.slice(3, 5).map((card) => (
            <div key={card.id} className={style.card}>
              <div className={style.iconContainer}>
                <Image width={100} height={200} src={card.icon} alt={card.title} className={style.icon} />
              </div>
              <h6 className={style.title}>{card.title}</h6>
              <p className={style.description}>{card.description}</p>
            </div>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default WhyFiniticCrm