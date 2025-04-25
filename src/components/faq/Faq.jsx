"use client"
import styles from "./faq.module.css";
import Header from "../shared/header/Header";
import { faqData } from "@/data/faqData";
import Button from "../shared/button/Button";
import AccordionItem from "./AccordionItem";
import { useTranslations } from "next-intl";

export const metadata = {
    title: "FAQs - Finitic Technology",
  };

const Faq = ({landingPage,description}) => {
    const t = useTranslations();
    return (
        <div className={`  container ${styles["faq-container"]}`}>
            <Header title={t("FAQs")} decription={ description||t("Find Answers to Your Queries")} />
            <div className="container">
                <div className={styles.accordion}>
                    {faqData.map((item, index) => (
                        <AccordionItem key={index} title={t(item.title)}>
                            <p>{t(item.content)}</p>
                            {item.sub && <p className={styles.sub}>{t(item.sub)}</p>}
                        </AccordionItem>
                    ))}
                
                </div>
                {landingPage && <Button url={"/faq"} text={"See All FAQ"} center={true} background={"black"}/>
                }

            </div>
        </div>
    );
};

export default Faq;
