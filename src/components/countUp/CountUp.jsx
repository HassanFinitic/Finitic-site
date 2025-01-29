"use client";
import CountUp from "react-countup"
import style from "./count-up.module.css"


const Count = () => {
    return (
        <section className={`container ${style["count-container"]}`}>
            <CountUp  end={98} startOnMount delay={2}>
                {({ countUpRef }) => (
                    <div className={style["count-up__item"]}>
                        <span className={style.count} ref={countUpRef} /> <span className={style.suffix}>%</span> 
                        <p className={style.text}>Satisfaction rate</p>
                    </div>
                )}
            </CountUp>
            <CountUp end={80} startOnMount delay={2}>
                {({ countUpRef }) => (
                       <div className={style["count-up__item"]}>
                        <span className={style.count} ref={countUpRef} /> <span className={style.suffix}>%</span> 
                        <p className={style.text}>Increase in Revenue</p>
                    </div>
                )}
            </CountUp>
            <CountUp  end={60} startOnMount delay={2}>
                {({ countUpRef }) => (
                    <div>
                        <span className={style.count} ref={countUpRef} /> <span className={style.suffix}>%</span> 
                        <p className={style.text}>New Clients</p>
                    </div>
                )}
            </CountUp>
        </section>
    )
}

export default Count