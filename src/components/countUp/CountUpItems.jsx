"use client";
import CountUp from "react-countup"
import style from "./count-up.module.css"
import { countData } from "@/data/countData";

  const CountUpItems = () => {
    return (
      <section className={`container ${style["count-container"]}`}>
        {countData.map((item, index) => (
          <CountUp
            key={index}
            startOnMount
            delay={2}
            start={0}
            end={item.end}
            duration={5}
            scrollSpyOnce
            enableScrollSpy={true}
            scrollSpyDelay={100}
          >
            {({ countUpRef }) => (
              <div className={style["count-up__item"]}>
                <span className={style.count} ref={countUpRef} />
                <span className={style.suffix}>%</span>
                <p className={style.text}>{item.text}</p>
              </div>
            )}
          </CountUp>
        ))}
      </section>
    );
  };
  export default CountUpItems
   