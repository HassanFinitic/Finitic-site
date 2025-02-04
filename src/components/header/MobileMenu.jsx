import React from "react";
import Link from "next/link";

export default function MobileMenu({ toggleIcon, linksData, isOpen, style }) {
  return (
    <div className={`${style["mobile-menu"]} ${isOpen ? style["active"] : ""}`}>
      {linksData.map((link) => (
        <Link className={style["mobile-link"]} onClick={toggleIcon} key={link.id} href={link.url}>
          {link.text}
        </Link>
      ))}
    </div>
  );
}
