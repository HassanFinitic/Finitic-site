"use client"
import { useState } from "react";
import styles from "./faq.module.css";
import Header from "../shared/header/Header";
import Plus from "../../../public/assets/icons/Plus";
import { faqData } from "@/data/faqData";
import Button from "../shared/button/Button";

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.accordionItem}>
            <button
                className={styles.accordionHeader}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`${isOpen ? styles["plus-active"] : ""}`}>
                    <Plus />
                </span>
                {title}
            </button>
            <div
                className={`${styles.accordionContent} ${isOpen ? styles.active : ""}`}
            >
                {children}
            </div>
        </div>
    );
};

const Faq = ({landingPage,description}) => {
    return (
        <div className={`  ${styles["faq-container"]}`}>
            <Header title={"FAQs"} decription={ description||"Find Answers to Your Queries"} />
            <div className="container">
                <div className={styles.accordion}>
                    {faqData.map((item, index) => (
                        <AccordionItem key={index} title={item.title}>
                            <p>{item.content}</p>
                            <p className={styles.sub}>{item.sub}</p>
                        </AccordionItem>
                    ))}
                
                </div>
                {landingPage && <Button text={"See All FAQ"} center={true} background={"black"}/>
                }

            </div>
        </div>
    );
};

export default Faq;
