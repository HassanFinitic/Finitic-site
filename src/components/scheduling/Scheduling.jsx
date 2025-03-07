"use client";
import React from "react";
import Input from "../shared/input/Input";
import style from "./scheduling.module.css";
import Submit from "../shared/submit/Submit";
import Link from "next/link";

const Scheduling = ({ subTitle, buttonTitle }) => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    source: "website",
    email: "",
    country: " ",
    jobTitle: "",
    registrationPlan: "STARTER", 
  });

  const [loading, setLoading] = React.useState(false);
  const [submitTitle, setSubmitTitle] = React.useState(buttonTitle || "Submit");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure registrationPlan is always uppercase
    const updatedFormData = {
      ...formData,
      registrationPlan: formData.registrationPlan.toUpperCase(),
    };

    // Log the form data to the console
    console.log(updatedFormData);

    setSubmitTitle("Thank You");

    // Clear the form after submission
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      jobTitle: "",
      registrationPlan: "STARTER", 
    });
  };

  return (
    <div className={style["scheduling-container"]}>
      <h3 className={style["title"]}>Schedule Your Demo Now</h3>
      <p className={style["p"]}>{subTitle}</p>
      <form className={style["form"]} onSubmit={handleSubmit}>
        <Input
          formData={formData}
          handleChange={handleChange}
          type="text"
          name="fullName" 
          placeholder="Enter Your Name"
        />
        <Input
          formData={formData}
          handleChange={handleChange}
          type="text"
          name="phone" 
          placeholder="Enter Your Phone"
        />
        <Input
          formData={formData}
          handleChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter Your Email"
        />
        <select
          required
          onChange={handleChange}
          className={style["select"]}
          name="jobTitle"
          id="jobTitle"
        >
          <option value="">Select Your Job Title</option>
          <option value="Manager">Manager</option>
          <option value="Broker">Broker</option>
          <option value="Trader">Trader</option>
          <option value="Developer">Developer</option> 
          <option value="Other">Other</option>
        </select>
        <select
          defaultValue={"STARTER"} 
          required
          onChange={handleChange}
          className={style.select}
          name="registrationPlan" 
          id="registrationPlan"
        >
          <option value="">Select Your Plan</option>
          <option value="STARTER">Starter</option>
          <option value="PREMIUM">Premium</option>
          <option value="ENTERPRISE">Enterprise</option>
        </select>
        <Link href="/pricing" className={style.link}>
          More about plans?
        </Link>
        <p className={style["p"]}>
          By clicking the button below, you agree to our Terms and have read our Privacy Policy
        </p>
        <Submit loading={loading} type="submit">
          {submitTitle}
        </Submit>
      </form>
    </div>
  );
};

export default Scheduling;
