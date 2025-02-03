import { testimonialsData } from "@/data/testimonialsData"
import TestimonialCard from "./TestimonialCard"
import style from "./testimonials.module.css"
const TestimonialGrid = () => {
    return (
        <div className={style["testimonials-grid"]}>
            {testimonialsData.map((item) => (
                <TestimonialCard item={item} key={item?.id} />
            ))}
        </div>
    )
}

export default TestimonialGrid