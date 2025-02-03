
import Image from "next/image";
import style from "./clients.module.css";
import { CLIENTS } from "@/data/images";

const Clients = () => {
    return (
        <div className={style["clients-container"]}>
            <p className={style["title"]}>Trusted by thousands of companies worldwide</p>
            <div className={style["partners-content"]}>
                <div className={style["partners"]}>
                    {CLIENTS.map((partner, i) => (
                        <div key={i} className={style["partner-item"]}>
                            <Image
                                src={partner}
                                width={167}
                                height={48}
                                alt={`partner-image-${i + 1}`}
                            />
                        </div>
                    ))}
                </div>

                <div className={style["partners"]}>
                    {CLIENTS.map((partner, i) => (
                        <div key={i} className={style["partner-item"]}>
                            <Image
                                src={partner}
                                width={167}
                                height={48}
                                alt={`partner-image-${i + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div></div>
    )
}

export default Clients