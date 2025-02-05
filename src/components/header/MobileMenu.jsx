"use client";
import React, { useState } from "react";
import Link from "next/link";
import ArrowDown from "../../../public/assets/icons/ArrowDown";

export default function MobileMenu({ toggleIcon, linksData, isOpen, style }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`${style["mobile-menu"]} ${isOpen ? style["active"] : ""}`}>
      {linksData.map((link) => (
        <div key={link.id} className={style["mobile-menu-item"]}>
          {link.subLinks ? (
            <button 
              className={style["mobile-dropdown-btn"]}
              onClick={() => toggleDropdown(link.id)}
            >
              {link.text}
              <span className={`${style["arrow"]} ${activeDropdown === link.id ? style["open"] : ""}`}>
                <ArrowDown />
              </span>
            </button>
          ) : (
            <Link className={style["mobile-link"]} onClick={toggleIcon} href={link.url}>
              {link.text}
            </Link>
          )}
          {link.subLinks && (
            <div className={`${style["mobile-dropdown"]} ${activeDropdown === link.id ? style["active"] : ""}`}>
              {link.subLinks.map((subLink, index) => (
                <Link key={index} href={subLink.url} className={style["mobile-dropdown-link"]}>
                  {subLink.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
