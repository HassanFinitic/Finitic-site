"use client";
import React from "react";
import Input from "../shared/input/Input";
import style from "./scheduling.module.css";
import countrySelect from "./countrySelect.module.css";
import Submit from "../shared/submit/Submit";
import Link from "next/link";
import { sendData } from "@/apis/form";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications
import ReCAPTCHA from "react-google-recaptcha";
import { countries } from "@/data/countries";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Scheduling = ({
  title,
  subTitle,
  buttonTitle,
  showJobTitleAndPlan = true,
  currentPath
}) => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    email: "",
    country: "", // Initialize with an empty string for country
    jobTitle: "",
    registrationPlan: "STARTER",
    message: "", // Add a message field to the form data
  });

  const [loading, setLoading] = React.useState(false);
  const [submitTitle, setSubmitTitle] = React.useState(buttonTitle || "Submit");
  const [captchaValue, setCaptchaValue] = React.useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCountryChange = (event, newValue) => {
    setFormData({
      ...formData,
      country: newValue ? newValue.label : "", // Store the country name (label)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure registrationPlan is always uppercase
    const updatedFormData = {
      ...formData,
      registrationPlan: formData.registrationPlan.toUpperCase(),
    };

    // Log the form data to the console
    console.log(updatedFormData);

    try {
      // Check if reCAPTCHA is validated
      if (!captchaValue) {
        toast.error("Please verify that you are not a robot!");
        return;
      }

      // Proceed to send data
      const res = await sendData(updatedFormData, currentPath);
      console.log(res);

      if (res.isSuccess) {
        setSubmitTitle("Thank You");

        // Show success toast message
        toast.success("Your data has been submitted successfully!");

        // Clear the form after submission
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          jobTitle: "",
          registrationPlan: "STARTER",
          country: "",
          message: "", // Clear the message field as well
        });
        setCaptchaValue(null);
      } else {
        // Show error toast message if isSuccess is false
        toast.error(res.message || "Something went wrong!");
      }
    } catch (error) {
      // Handle unexpected errors
      toast.error(
        error?.response?.data?.message ||
          "An error occurred while submitting your data."
      );
      console.error(error);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div className={style["scheduling-container"]}>
      <h3 className={style["title"]}>{title || "Schedule Your Demo Now"}</h3>
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

        <Autocomplete
          className={countrySelect["input-style-container"]}
          sx={{
            width: "100%",
          }}
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          onChange={handleCountryChange} // Handle country change
          renderOption={(props, option) => {
            const { key, ...optionProps } = props;
            return (
              <Box
                key={key}
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...optionProps}
              >
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  alt=""
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a country"
              className={countrySelect["input-style"]}
              slotProps={{
                htmlInput: {
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                },
              }}
              sx={{
                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                  color: "#999999",
                  backgroundColor: "#efefef",
                },
              }}
            />
          )}
        />

        {/* Conditionally render jobTitle and registrationPlan or message field */}
        {showJobTitleAndPlan ? (
          <>
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
          </>
        ) : (
          <>
            <TextField
              formData={formData}
              className={countrySelect["input-style"]}
              onChange={handleChange}
              type="text"
              name="message"
              label="Enter your message"
              multiline
              rows={4} // Adjust the number of rows to make it a bigger text area
              fullWidth // Optional to make it full width
              variant="outlined"
              sx={{
                marginBottom: "16px", 
                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                  color: "#999999",
                  backgroundColor: "#efefef",
                },
              }}
            />
          </>
        )}

        <p className={style["p"]}>
          By clicking the button below, you agree to our Terms and have read our
          Privacy Policy
        </p>
        <ReCAPTCHA
          sitekey="6LfHsO8qAAAAAGKbgbfRLywCUVepWthDNmNaD_cq"
          onChange={handleCaptchaChange}
          onErrored={() =>
            toast.error("Error with reCAPTCHA. Please try again.")
          }
        />
        <Submit loading={loading} type="submit">
          {submitTitle}
        </Submit>
      </form>

      {/* Toast container to display the notifications */}
      <ToastContainer />
    </div>
  );
};

export default Scheduling;
