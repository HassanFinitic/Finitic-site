"use client";
import style from "./footer.module.css";
import { RiTwitterXFill } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Logo from "../header/Logo";
import logo from "../../../public/assets/images/logo.png";
import { quickLinksData } from "../../data/quickLinks";
import CurrentYear from "./CurrentYear";
import Link from "next/link";
import Header from "../shared/header/Header";
import Button from "../shared/button/Button";
import { useEffect } from "react";
import Aos from "aos";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <div className={`${style["full-footer-container"]}`}>
      <div className={`container ${style["footer-container"]}`}>
        <div
          className={style["journey-container"]}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Header decription={t("Start your journey today")} />
          <div style={{ padding: "1rem 0" }}>
            <Button url={"/contact-us"} text={t("Contact Us")} center={true} />
          </div>
        </div>
        <div className={style["top"]}>
          <div className={style["content"]}>
            <Logo logo={logo} alt="Finitic Logo" />
            <p className={style["solutions"]}>
              {t("Solutions that fuel growth and accelerate your business success")}
            </p>
          </div>
          <div className={style["quick-links"]}>
            {quickLinksData.map((quickLink) => (
              <div key={quickLink.id} className={style["quick-link"]}>
                <p className={style["title"]}>{t(quickLink.title)}</p>
                <ul className={style["links"]}>
                  {quickLink.links.map((link) => (
                    <li className={style["link"]} key={link.id}>
                      <Link href={link.url}>{t(link.text)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className={style["hr"]} />
        <div className={style["bottom"]}>
          <div className={style["copyright"]}>
            <p className={style["copyright-text"]}>
              {t("Copyright © 2025 FINITIC INFORMATION TECHNOLOGY")}
            </p>
            <p className={style["copyright-text"]}>{t("All rights reserved")}</p>
          </div>
          <div className={style["social-icons"]}>
            <Link
              className={style["social-icon"]}
              href="https://www.facebook.com/share/1BAeZGSZRD"
            >
              <CiFacebook />
            </Link>
            <Link
              className={style["social-icon"]}
              href="https://www.instagram.com/finiticme"
            >
              <FaInstagram />
            </Link>
            <Link
              className={style["social-icon"]}
              href="https://www.linkedin.com/company/finitic1/"
            >
              <FaLinkedin />
            </Link>
            <Link
              className={style["social-icon"]}
              href="https://x.com/finitic_me"
            >
              <RiTwitterXFill />
            </Link>
          </div>
        </div>
            <div className={style["images"]}>
            <img src="/assets/images/master_card.png" alt="" />
            <img src="/assets/images/visa.jpg" alt="" />
            <img src="/assets/images/secure_code.png" alt="" />
            <img src="/assets/images/verified.png" alt="" />
            </div>
      </div>
    </div>
  );
}
