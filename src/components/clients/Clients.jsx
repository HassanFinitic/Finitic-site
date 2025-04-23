"use client"
import Image from "next/image";
import style from "./clients.module.css";
import { CLIENTS } from "@/data/images";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Clients = () => {
    const t = useTranslations();
    const [isRTL, setIsRTL] = useState(false);

useEffect(() => {
    const observer = new MutationObserver(() => {
        const dir = document.documentElement.getAttribute("dir");
        setIsRTL(dir === "rtl");
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['dir'],
    });

    // Initial check
    const dir = document.documentElement.getAttribute("dir");
    setIsRTL(dir === "rtl");

    return () => observer.disconnect();
}, []);

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className={style["clients-container"]}>
            <p className={style["title"]}>{t("Trusted by thousands of companies worldwide")}</p>
            <div className={style["partners-content"]}>
                <div className={`${style["partners"]} ${isRTL ? style["rtl"] : style["ltr"]}`}>
                    {CLIENTS.map((partner, i) => (
                        <div key={`1-${i}`} className={style["partner-item"]}>
                            <Image
                                src={partner}
                                width={167}
                                height={48}
                                alt={`partner-image-${i + 1}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Duplicated for infinite loop */}
                <div className={`${style["partners"]} ${isRTL ? style["rtl"] : style["ltr"]}`}>
                    {CLIENTS.map((partner, i) => (
                        <div key={`2-${i}`} className={style["partner-item"]}>
                            <Image
                                src={partner}
                                width={167}
                                height={48}
                                alt={`partner-image-${i + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clients;
