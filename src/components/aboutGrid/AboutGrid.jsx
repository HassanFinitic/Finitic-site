import Image from "next/image"
import style from "./about-us.module.css"

const AboutGrid = () => {
    return (
        <div className={`${style["about-us-grid-container"]}`}>
            {["/assets/images/about1.avif", "/assets/images/about3.avif", "/assets/images/about2.avif"].map((item) => (
                <div key={item} className="about-us-grid-container__item">
                    <Image
                        src={item}
                        sizes="100vw"
                        style={{ width: "100%", borderRadius: "24px" }}
                        className={style["about-img"]}
                        alt="about-us"
                        width={0}
                        height={300}
                    />
                </div>
            ))}
        </div>
    )
}

export default AboutGrid 