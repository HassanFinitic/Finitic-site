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
import Aos from "aos"
import Grid from "../grid/Grid"
const HowItWorks = () => {
  const sectionRefs = useRef([]);
  // const scroll2El = (elID) => {
  //   const element = document.getElementById(elID);
  //   if (element) {
  //     window.scrollTo({
  //       top: element.offsetTop - 60,
  //       behavior: 'smooth',
  //     });
  //   } else {
  //     console.error(`Element with ID "${elID}" not found.`);
  //   }
  // };
  // const onBtnClick = (e) => {
  //   e.preventDefault();
  //   console.log(e.target, "togo");
  //   const goto = e.target.getAttribute('goto');
  //   setTimeout(() => {
  //     scroll2El(goto);
  //   }, 100);
  // }

  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true
  });
    // const sections = sectionRefs.current;
    // const options = {
    //   root: null,
    //   threshold: 1,
    // };
    
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     const iconId = `icon-${entry.target.id}`;
    //     if (entry.isIntersecting) {
    //       document.querySelectorAll(".icon").forEach((icon) => {
    //         if (icon.id === iconId ||
    //           (entry.target.id === "two" && icon.id === "icon-one") ||
    //           (entry.target.id === "three" && ["icon-one", "icon-two"].includes(icon.id))) {
    //           icon.classList.add("active");
    //         }
    //       });
    //     } else {
    //       document.getElementById(iconId)?.classList.remove("active");
    //     }
    //   });
    // }, options);
    // sections.forEach((section) => observer.observe(section));
    // return () => {
    //   observer.disconnect();
    // };
  }, []);
 
  return (
    <div className={ `container ${style["how-it-works__container"]}`}>
      <Header title="How it works" decription="Customizable, efficient Forex trading CRM solutions." />
      <Grid colsLarge={3} colsMedium={2} colsSmall={1} gap="20px">
        {
          howItWorksData.map((item, index) => (
            <div className={style["how-it-works__item"]} key={index} data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration={item?.delay}>
              <div className={style["how-it-works__item-icon"]}>
                <Image width={40} height={40} src={item.image} alt={item.imagealt} />
                <h6 className={style["how-it-works__item-title"]}>{item.title}</h6>
              </div>
              
              <p className={style["how-it-works__item-description"]}>{item.description}</p>
            </div>
          ))
        }
      </Grid>
    </div>
  )
}

export default HowItWorks