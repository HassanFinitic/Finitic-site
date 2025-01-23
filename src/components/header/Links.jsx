// import Link from 'next/link'
// import React from 'react'

// export default function Links({linksData}) {
//   return (
//     <div className="links-container">
//         <ul className="links">
//             {linksData.map((link) => (
//                 <li key={link.id}>
//                     <Link href={link.url}>{link.text}</Link>
//                 </li>
//             ))}
//         </ul>
//       </div>
//   )
// }

import Link from "next/link";
import React from "react";
import style from "./header.module.css";

export default function Links({ linksData }) {
  return (
    <div className={style["links-container"]}>
      <ul className={style["links"]}>
        {linksData.map((link) => (
          <li key={link.id} className={style["link-item"]}>
            <Link href={link.url} className={style["link"]}>
              {/* White text (default) */}
              <span className={style["white-text"]}>{link.text}</span>
              {/* Gray text (hidden by default) */}
              <span className={style["gray-text"]}>{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}