"use client"
import React  from "react";
import Input from "../shared/input/Input";
import style from "./scheduling.module.css";
import Submit from "../shared/submit/Submit";

const Scheduling = () => {
    const [formData, setFormData] = React.useState({
        name: "",
        number: "",
        email: "",
        jobTitle: "",
      });
    
     const [loading, setLoading] = React.useState(false);
     const [submitTitle, setSubmitTitle] = React.useState("Sumbit");
      const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
  
      const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("Form Data:", formData);
        setSubmitTitle("Thank You");
        setFormData({
          name: "",
          number: "",
          email: "",
          jobTitle: "",
        });
      };
  return (
    <div className={style["scheduling-container"]}> 
         <h3 className={style["title"]}>Schedule Your Demo  Now</h3>
          <form className={style["form"]} onSubmit={handleSubmit}>
            <Input formData={formData} handleChange={handleChange} type="text" name="name" placeholder="Enter Your Name " />
            <Input formData={formData} handleChange={handleChange} type="number" name="number" placeholder="Enter Your Phone " />
            <Input  formData={formData} handleChange={handleChange} type="email" name="email" placeholder="Enter Your Email  " />
            <select required  onChange={handleChange} className={style["select"]}  name="jobTitle" id="jobTitle">
              <option value="">Select Your Job Title</option>
              <option value="Manager">Manager</option>
              <option value="Broker">Broker</option>
              <option value="Trader">Trader</option>
              <option value="Other">Other</option>
            </select>
            <p className={style["p"]}>By clicking the button below, you agree to our Terms and have read our Privacy Policy</p>
            <Submit loading={loading}  type="submit">{submitTitle}</Submit>
          </form>
    </div>
  )
}

export default Scheduling