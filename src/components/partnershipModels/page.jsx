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
            <p>
            Collaborate as an agent by introducing clients to FINITIC and earn competitive commissions. This model fosters mutual growth in the forex trading industry and rewards your network-building efforts.
            </p>
            <button type="button"> 
            Product Integration
            </button>
            <p>
            Integrate your technology or services with FINITIC’s ecosystem to offer comprehensive solutions to forex brokers. Together, we can provide seamless experiences that drive success in currency exchange.
            </p>
            <button type="button">
            Affiliate Referrals
            </button>
            <p>
            Refer potential clients to FINITIC and earn attractive referral commissions. Share our forex trading strategies and innovative solutions with your network and watch your efforts translate into real rewards. 
            </p>
            <button type="button">
            Reseller Opportunities
            </button>
            <p>
            Become a reseller of FINITIC’s cutting-edge forex CRM software and services. Strengthen your portfolio by offering proven forex trading CRM solutions while leveraging our global reputation. 
            </p>
        </div>
        </div>
    </div>
  )
}

export default PartnershipModels