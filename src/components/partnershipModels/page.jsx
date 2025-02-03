import style from "./partnership.module.css"
const PartnershipModels = () => {
  return (
    <div className={style["partnership-models__container"]}>
        <h6>Our Partnership Models</h6>
        <div className={style["partnership-models"]}>
        <div className={style["partnership-models__pagination"]}>
            <button type="button">
            Agency Model
            </button>
            <button type="button"> 
            Product Integration
            </button>
            <button type="button">
            Affiliate Referrals
            </button>
            <button type="button">
            Reseller Opportunities
            </button>
        </div>
        </div>
    </div>
  )
}

export default PartnershipModels