"use client"
import styles from "./faq.module.css";
import Header from "../shared/header/Header";
import { faqData } from "@/data/faqData";
import Button from "../shared/button/Button";
import AccordionItem from "./AccordionItem";

export const metadata = {
    title: "FAQs - Finitic Technology",
  };

const Faq = ({landingPage,description}) => {
    return (
        <div className={`  container ${styles["faq-container"]}`}>
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
                {landingPage && <Button url={"/faq"} text={"See All FAQ"} center={true} background={"black"}/>
                }

            </div>
        </div>
    );
};

export default Faq;
