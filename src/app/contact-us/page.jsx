import Header from "@/components/shared/header/Header";
import style from "./contact-us.module.css";
import HeadOffice from "../../../public/assets/icons/HeadOffice";
import Phone from "../../../public/assets/icons/Phone";
import Email from "../../../public/assets/icons/Email";
import Submit from "@/components/shared/submit/Submit";
import Scheduling from "@/components/scheduling/Scheduling";

export const metadata = {
  title: "Contact Us | Finitic – Get in Touch with Our Team",
  description:"Have questions or need support? Reach out to the Finitic team today! Contact us for inquiries, support, or partnership opportunities. We’re here to help!",
  keywords: ["Contact Finitic", "support", "customer service", " inquiries", "partnerships", "contact form", "reach Finitic", "team contact", "Finitic support"],
};

const page = () => {
  return (
    <div className={`  ${style["contact-us_container"]}`}>
      <Header
        title={"Contact"}
        decription={"Contact us to discuss your needs and ideas"}
      />
      <div className="container">
      <div className={style["contact-us_content"]}>
        <section className={style["contact-us__info-section"]}>
          <p>
            We value your input and are here to support your goals. Together, we
            can shape the future of fintech innovation. Let’s start today.
          </p>
          <div className={style["contact-us__info-content"]}>
            <h6 className="">
              <HeadOffice />
              Head Office
            </h6>
            <p>
              Business Bay – Burj Khalifa Str. Prime Tower 21st Floor - Office
              No 2104 – Dubai- United Arab Emirates
            </p>
          </div>
          <div className={style["contact-us__info-content"]}>
            <h6 className="">
              <Phone />
              Phone
            </h6>
            <p>+971 4 568 9835</p>
          </div>
          <div className={style["contact-us__info-content"]}>
            <h6 className="">
              <Email />
              Email
            </h6>
            <p>info@finitic.com</p>
          </div>
        </section>
        {/* <div className={style.formSection}>
          <h4>Contact Us</h4>
          <form className={style.form}>
            <div className={style.inputGroup}>
              <label htmlFor="fullName">First Name</label>
              <input id="fullName" type="text" placeholder="Jane Smith" />
            </div>
            <div className={style.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" placeholder="test@gmail.com" />
            </div>
            <div className={style.inputGroup}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input id="phoneNumber" type="text" placeholder="+123 456 789" />
            </div>
            <div className={style.inputGroup}>
              <label htmlFor="location">Location</label>
              <input id="location" type="text" placeholder="United States" />
            </div>
            <div className={style.textareaGroupFull}>
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Enter your message"></textarea>
            </div>
            <Submit className={style.submitButton} type="submit">
              Submit
            </Submit>
          </form>
        </div> */}
        <Scheduling currentPath="contact-us" showJobTitleAndPlan={false} title="Contact Us" />
      </div>
      </div>
    </div>
  );
};

export default page;
