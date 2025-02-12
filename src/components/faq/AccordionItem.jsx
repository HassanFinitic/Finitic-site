import { useState } from "react";
import Plus from "../../../public/assets/icons/Plus";
import styles from "./faq.module.css";

export const metadata = {
    title: "FAQs - Finitic Technology",
  };

export default function AccordionItem ({ title, children }) {
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

