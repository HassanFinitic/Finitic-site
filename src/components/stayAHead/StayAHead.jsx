import style from "./stayAHead.module.css"

const StayAHead = () => {
  return (
    <div className={` container ${style.stayAheadContainer}`}>
        <h3 className={style["title"]}>Stay Ahead with FINITIC</h3>
        <p className={style.p}>Explore how our cutting-edge technology, tailored solutions, and dedication to excellence can transform your business operations.</p>
        <div className={style["grid-container"]}>
            <div className={style["stayAhead__Card"]}>
                <h6>Seamless Integration</h6>
                <p>FINITIC’s advanced integration options streamline workflows for unmatched efficiency in Forex trading.</p>
                <div className={style["stayAhead__Card-content"]}>
                    <span>100%</span>
                    <div>Faster Integration  &nbsp;&nbsp; Custom Solutions</div>
                </div>
            </div>
            <div className={style["stayAhead__Card"]}>
                <h6>Scalable Infrastructure</h6>
                <p>Our robust infrastructure is designed to grow with your business, no matter the size, making it ideal for forex brokers.</p>
                <div className={style["stayAhead__Card-content"]}>
                    
                </div>
            </div>
            </div>
    </div>
  )
}

export default StayAHead