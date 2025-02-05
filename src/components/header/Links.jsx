"use client";
import Link from "next/link";
import React, { useState } from "react";
import style from "./header.module.css";
import ArrowDown from "../../../public/assets/icons/ArrowDown";

export default function Links({ linksData }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <div className={style["links-container"]}>
      <ul className={style["links"]}>
        {linksData.map((link) => (
          <div key={link.id} className={style["navbar__link-container"]}>
            <li className={style["link-item"]}>
              {link.subLinks ?

                <div onClick={() => toggleDropdown(link.id)} href={link.url} className={style["link"]}>
                  <span className={style["white-text"]}>{link.text}</span>
                  <span className={style["gray-text"]}>{link.text}</span>
                </div>
                :
                <Link onClick={() => toggleDropdown(link.id)} href={link.url} className={style["link"]}>
                  <span className={style["white-text"]}>{link.text}</span>
                  <span className={style["gray-text"]}>{link.text}</span>
                </Link>
              }
            </li>
            {link.subLinks && (
              <div className={style["dropdown"]}>
                <button
                  onClick={() => toggleDropdown(link.id)}
                  className={`${style["dropdown-btn"]} ${activeDropdown === link.id ? style["active"] : ""
                    }`}
                >
                  <ArrowDown />
                </button>

                <div
                  className={`${style["dropdown-content"]} ${activeDropdown === link.id ? style["active"] : ""
                    }`}
                >
                  {link.subLinks.map((subLink, index) => (
                    <Link key={index} href={subLink.url} className={style["dropdown-item"]}>
                      {subLink.text}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
