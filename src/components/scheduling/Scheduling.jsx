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
import { useTranslations } from "next-intl";
import { brevoEmailContent } from "@/data/brevoEmailContent";

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

  const t = useTranslations();

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
  const sendBrevoEmail = async (data) => { 
    try {
      const body =  data;
      const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.NEXT_PUBLIC_BREVO_API_KEy
        },
        body: JSON.stringify({
          sender: {
            name: "Finitic Marketing",
            email: "marketing@finitic.com",
          },
          to: [
            {
              email: body.email,
              name: body.name,
            },
          ],
          subject: "Thank you for Your subscription in finitic",
          htmlContent: brevoEmailContent,
        }),
      });
    
        const brevoData = await brevoRes.json();
        console.log("Check brevData  ", brevoData);
        return brevoData;
      } catch (error) {
        toast.error(`Send Brevo error:  ${error.message}`)
        console.log(`Send Brevo error:  ${error.message}`)
      }
  }
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
        toast.error(t("error robot"));
        return;
      }

      // Proceed to send data
      const res = await sendData(updatedFormData, currentPath);
      // console.log(res);

      if (res.isSuccess) {
        setSubmitTitle("Thank You");
        await sendBrevoEmail(formData);
        // Show success toast message
        toast.success(t("success send data"));

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
    <>
    <div data-aos="fade-up" data-aos-duration="1000" className={style["scheduling-container"]}>
      <h3 className={style["title"]}>{title || t("Schedule Your Demo Now")}</h3>
      <p className={style["p"]}>{subTitle}</p>
      <form className={style["form"]} onSubmit={handleSubmit}>
        {/* Replacing custom Input with MUI TextField for Full Name */}
        <TextField
          label={t("Enter Your Name")}
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
          label={t("Enter Your Phone") + (formData.countryCode ? ` ${formData.countryCode}` : "")}
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
              ? t("country code error text")
              : t("countery code text")
  }
/>

        {/* Replacing custom Input with MUI TextField for Email */}
        <TextField
          label={t("Enter Your Email")}
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
              label={t("Choose a country")}
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
              <InputLabel htmlFor="jobTitle">{t("Select Your Job Title")}</InputLabel>
              <Select
                label="Select Your Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                name="jobTitle"
                required
              >

                <MenuItem value="">{t("Select Your Job Title")}</MenuItem>
                <MenuItem value="Manager">{t("Manager")}</MenuItem>
                <MenuItem value="Broker">{t("Broker")}</MenuItem>
                <MenuItem value="Trader">{t("Trader")}</MenuItem>
                <MenuItem value="Developer">{t("Developer")}</MenuItem>
                <MenuItem value="Other">{t("Other")}</MenuItem>
              </Select>
            </FormControl>

            {/* Registration Plan Select */}
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="registrationPlan">{t("Select Your Plan")}</InputLabel>
              <Select
                label={t("Select Your Plan")}
                value={formData.registrationPlan}
                onChange={handleChange}
                name="registrationPlan"
                required
              >

                <MenuItem value="">{t("Select Your Plan")}</MenuItem>
                <MenuItem value="STARTER">{t("Starter")}</MenuItem>
                <MenuItem value="PREMIUM">{t("Premium")}</MenuItem>
                <MenuItem value="ENTERPRISE">{t("Enterprise")}</MenuItem>
              </Select>
            </FormControl>

            <Link href="/pricing" className={style.link}>
              {t("more about plans?")}
            </Link>
          </>
        ) : (
          <>
            <TextField
              label={t("Enter Your Message")}
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
          {t("By clicking the button below, you agree to our Terms and have read our Privacy Policy")}
        </p>
        <ReCAPTCHA
          sitekey="6LfHsO8qAAAAAGKbgbfRLywCUVepWthDNmNaD_cq"
          onChange={handleCaptchaChange}
          onErrored={() =>
            toast.error("Error with reCAPTCHA. Please try again.")
          }
        />
        <br />
        <Submit loading={loading} type="submit">
          {t(`${buttonTitle || "Submit"}`)}
        </Submit>
      </form>

      
    </div>
    {/* Toast container to display the notifications */}
    <ToastContainer />
    </>
  );
};

export default Scheduling;
