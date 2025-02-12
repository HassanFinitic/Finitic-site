"use client";
import React, { useState } from "react";
import logo from "../../../public/assets/images/logo.png";
import style from "./header.module.css";
import Links from "./Links";
import {linksData} from "../../data/links"
import Icon from "./Icon";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Button from "./Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav className={`${style["full-header-container"]}`}>
        <div className="container">
      <div className={` ${style["navbar"]} ${style["header-container"]}`}>

        
        {/* Logo */}
        <Logo logo={logo} alt="Finitic Logo" />
        
        {/* Links */}
        <Links linksData={linksData} />

      <div className={style["button-container"]}>
        {/* Button */}
        <Button url={"/contact-us"}  title="Start New Challenge" />

        {/* Mobile Menu Icon */}
        <Icon toggleIcon={toggleIcon} isOpen={isOpen} style={style} />

        {/* Mobile Menu */}
        <MobileMenu
          toggleIcon={toggleIcon}
          linksData={linksData}
          isOpen={isOpen}
          style={style}
        />
      </div>
        </div>
      </div>
    </nav>
  );
}
