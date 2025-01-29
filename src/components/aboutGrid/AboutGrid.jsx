import Image from "next/image"
import style from "./about-us.module.css"

const AboutGrid = () => {
    return (
        <div className={`${style["about-us-grid-container"]}`}>
            {[1, 2, 3].map((item) => (
                <div key={item} className="about-us-grid-container__item">
                    <Image
                        src="/assets/images/about.avif"
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