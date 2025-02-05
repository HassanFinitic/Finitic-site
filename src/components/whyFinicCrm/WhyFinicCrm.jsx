import { whyFinticCrmData } from "@/data/whyFinticCrm"
import Grid from "../grid/Grid"
import Header from "../shared/header/Header"
import style from "./whyFinicCrm.module.css"
import Image from "next/image"

const WhyFinicCrm = () => {
  return (
    <div className={style["whyFinicCrm-container"]}>
        <Header fontSizeDescription="45px" decription={"Why Choose FINITIC's Forex CRM?"}/>
        <Grid className="container" colsLarge={3} colsMedium={2} colsSmall={1} gap="24px">
        {whyFinticCrmData.map((card) => (
        <div key={card.id} className={style.card}>
          <div className={style.iconContainer}>
            <Image width={250} height={150}  src={card.icon} alt={card.title} className={style.icon} />
          </div>
          <h6 className={style.title}>{card.title}</h6>
          <p className={style.description}>{card.description}</p>
        </div>
      ))}
        </Grid>
    </div>
  )
}

export default WhyFinicCrm