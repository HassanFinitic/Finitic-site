"use client"
import User from "../../../public/assets/icons/User"
import Header from "../shared/header/Header"
import style from "./howItWorks.module.css"
import Keyboard from "../../../public/assets/icons/Keyboard"
import Guide from "../../../public/assets/icons/Guide"
import { howItWorksData } from "@/data/howItWorksData"
import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect } from "react"

const HowItWorks = () => {
  const sectionRefs = useRef([]);
  const scroll2El = (elID) => {
    const element = document.getElementById(elID);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: 'smooth',
      });
    } else {
      console.error(`Element with ID "${elID}" not found.`);
    }
  };
  const onBtnClick = (e) => {
    e.preventDefault();
    console.log(e.target, "togo");
    const goto = e.target.getAttribute('goto');
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  }

  useEffect(() => {
    const sections = sectionRefs.current;
    const options = {
      root: null,
      threshold: 1,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const iconId = `icon-${entry.target.id}`;
        if (entry.isIntersecting) {
          document.querySelectorAll(".icon").forEach((icon) => {
            if(  entry.target.id === "one"){
              getElementById("icon-one").classList.add("active");
            }
            if(entry.target.id === "two"){
              getElementById("icon-one").classList.add("active");
              getElementById("icon-two").classList.add("active");
            }
            if( entry.target.id === "three"){
              getElementById("icon-one").classList.add("active");
              getElementById("icon-two").classList.add("active");
              getElementById("icon-three").classList.add("active");
            }
          });
        } else {
          document.getElementById(iconId)?.classList.remove("active");
        }
      });
    }, options);
    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={style["how-it-works__container"]}>
      <Header title="How it works" decription="Customizable, efficient Forex trading CRM solutions." />
      <div id="how-it-works" className={` how-it-works__layout `}>
        <div className={`how-it-works__sidebar `}>
          <div className={"sidebar-content"}>
            <Link goto={"one"} id="icon-one"
              className="icon"
              href="#one" onClick={onBtnClick}><User /> </Link>
            <Link goto={"two"} id="icon-two"
              className="icon"
              href="#two" onClick={onBtnClick}><Keyboard /></Link>
            <Link
              id="icon-three"
              className="icon"
              goto={"three"}
              href="#three"
              onClick={onBtnClick}>
              <Guide />
            </Link>
          </div>
        </div>
        <div className={style["how-it-works__content"]}>
          {howItWorksData.map((feature, index) => (
            <div key={feature.id} ref={(el) => (sectionRefs.current[index] = el)} id={feature.link} className={style.feature}>
              <div className={style.textContainer}>
                <div className={style.iconAndNumber}>
                  <span className={style.number}>{`0${feature.id}`}</span>
                </div>
                <h2 className={style.title}>{feature.title}</h2>
                <p className={style.description}>{feature.description}</p>
              </div>
              <Image
                src={feature.image}
                alt={feature.title}
                width={454}
                height={300}
                className={style.featureImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks