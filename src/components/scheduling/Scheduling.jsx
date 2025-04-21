"use client";
import React from "react";
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
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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
    country: "",
    countryCode: "", 
    jobTitle: "",
    registrationPlan: "",
    message: "", 
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
      countryCode: newValue ? `+${newValue.phone}` : "", // Store the country code
      phone: newValue ? `+${newValue.phone} ${formData.phone}` : formData.phone,
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
    // console.log(updatedFormData);

    try {
      // Check if reCAPTCHA is validated
      if (!captchaValue) {
        toast.error("Please verify that you are not a robot!");
        return;
      }

      // Proceed to send data
      const res = await sendData(updatedFormData, currentPath);
      // console.log(res);

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
    <div data-aos="fade-up" data-aos-duration="1000" className={style["scheduling-container"]}>
      <h3 className={style["title"]}>{title || "Schedule Your Demo Now"}</h3>
      <p className={style["p"]}>{subTitle}</p>
      <form className={style["form"]} onSubmit={handleSubmit}>
        {/* Replacing custom Input with MUI TextField for Full Name */}
        <TextField
          label="Enter Your Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
          required
        />

        {/* Replacing custom Input with MUI TextField for Phone */}
        <TextField
  label={`Enter Your Phone ${formData.countryCode || ""}`}
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  fullWidth
  variant="outlined"
  margin="normal"
  required
  inputProps={{
    inputMode: "tel", // Better for phone input on mobile
    pattern: "^\\+?[0-9 ]*$" // Accepts optional + at start, digits, and spaces
  }}
  error={!!formData.phone && !/^\+?[0-9 ]*$/.test(formData.phone)}
  helperText={
    !!formData.phone && !/^\+?[0-9 ]*$/.test(formData.phone)
      ? "Enter a valid phone number (digits, spaces, optional leading +)"
      : "Include country code if applicable (e.g. +1 123 456 7890)"
  }
/>

        {/* Replacing custom Input with MUI TextField for Email */}
        <TextField
          label="Enter Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
        />

        {/* Country Dropdown with MUI Autocomplete */}
        <Autocomplete
          // className={countrySelect["input-style-container"]}
          sx={{ width: "100%" , marginTop: "10px" }}
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          onChange={handleCountryChange}
          renderOption={(props, option) => {
            const { key, ...optionProps } = props;
            return (
              <Box key={key} component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...optionProps}>
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
              // className={countrySelect["input-style"]}
              slotProps={{
                htmlInput: {
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                },
              }}
              // sx={{
              //   "& .MuiInputLabel-root": {
              //     fontSize: "14px",
              //     color: "#999999",
              //     backgroundColor: "#efefef",
              //   },
              // }}
            />
          )}
        />

        {/* Conditionally render jobTitle and registrationPlan using MUI Select */}
        {showJobTitleAndPlan ? (
          <>
            {/* Job Title Select */}
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="jobTitle">Select Your Job Title</InputLabel>
              <Select
                label="Select Your Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                name="jobTitle"
                required
              >

                <MenuItem value="">Select Your Job Title</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
                <MenuItem value="Broker">Broker</MenuItem>
                <MenuItem value="Trader">Trader</MenuItem>
                <MenuItem value="Developer">Developer</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>

            {/* Registration Plan Select */}
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="registrationPlan">Select Your Plan</InputLabel>
              <Select
                label="Select Your Plan"
                value={formData.registrationPlan}
                onChange={handleChange}
                name="registrationPlan"
                required
              >

                <MenuItem value="">Select Your Plan</MenuItem>
                <MenuItem value="STARTER">Starter</MenuItem>
                <MenuItem value="PREMIUM">Premium</MenuItem>
                <MenuItem value="ENTERPRISE">Enterprise</MenuItem>
              </Select>
            </FormControl>

            <Link href="/pricing" className={style.link}>
              More about plans?
            </Link>
          </>
        ) : (
          <>
            <TextField
              label="Enter your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4} // Adjust the number of rows to make it a bigger text area
              fullWidth
              variant="outlined"
              margin="normal"
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
