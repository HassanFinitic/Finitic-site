"use client";
import Flex from "@/components/flex/Flex";
import styles from "./blog.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";

// Helper component to render content items
function RenderContent({ content }) {
  if (!content) return null;

  return (
    <>
      {Array.isArray(content) ? (
        content.map((item, index) => {
          if (typeof item === "string") {
            return (
              <p className={styles.description} key={index}>
                {item}
              </p>
            );
          }

          // ✅ Enhanced table structure
          if (item.table?.headers && item.table?.rows) {
            return (
              <div key={index} className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      {item.table.headers.map((header, i) => (
                        <th key={i}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.table.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          // ✅ Link structure
          if (item.link?.text && item.link?.url) {
            return (
              <a
                className={styles.link}
                href={item.link.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                {item.link.text}
              </a>
            );
          }

          // ✅ Enhanced: Mixed array of links and text
          if (Array.isArray(item.link)) {
            return (
              <p key={index} className={styles.description}>
                {item.link.map((linkItem, i) => {
                  if (typeof linkItem === "string") {
                    return <span key={i}>{linkItem} </span>;
                  }

                  if (typeof linkItem === "object" && linkItem.text && linkItem.url) {
                    return (
                      <a
                        key={i}
                        href={linkItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        {linkItem.text}
                      </a>
                    );
                  }

                  return null; // Ignore unknown structures
                })}
              </p>
            );
          }


          // ✅ Default to list if it's just an object
          return (
            <ul key={index} className={styles.list}>
              {Object.entries(item).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.replace(/_/g, " ")}:</strong> {value}
                </li>
              ))}
            </ul>
          );
        })
      ) : (
        <p>No content available</p>
      )}
    </>
  );
}


// Client-side only page component
export default function Page({ params }) {
  const [slug, setSlug] = useState(null);
  const t = useTranslations("blog_page");

  useEffect(() => {
    // Wait for the params to be resolved
    const loadSlug = async () => {
      const unwrappedParams = await params;
      setSlug(unwrappedParams.slug);
    };
    loadSlug();
  }, [params]);

  const locale = useLocale();

  console.log(locale);

  const [data, setData] = useState(null);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (!slug) return;

    // Set the current URL for sharing
    setCurrentUrl(window.location.href);

    // Dynamically import data based on slug
    const loadData = async () => {
      try {
        // const response = await fetch(`/data/blogs/${slug}.json`);
        const response = await fetch(`/data/blogs/${slug}-${locale}.json`);
        // let response;
        // if (locale === "ar") {
        //   response = await fetch(`/data/blogs/${slug}-ar.json`);
        // } else {
        //   response = await fetch(`/data/blogs/${slug}-en.json`);
        // }

        const json = await response.json();
        setData(json);

        // Set meta data dynamically based on imported data
        if (response) {
          document.title = response.metaData?.title || "Finitic Blog";
          document
            .querySelector('meta[name="description"]')
            ?.setAttribute("content", response.metaData?.description || "");
          document
            .querySelector('meta[name="keywords"]')
            ?.setAttribute(
              "content",
              response.metaData?.keywords.join(", ") || ""
            );
        }
      } catch (error) {
        console.error("Error loading JSON data:", error);
        setData({});
      }
    };

    loadData();
  }, [slug, locale]); // This will run when the slug changes

  if (!data) {
    return <p>Loading the page content...</p>;
  }

  return (
    <main className={`container ${styles.main}`}>
      <h1 className={styles.title}>{data.title}</h1>
      <Flex
        direction={"row"}
        directionSmall={"column"}
        align={"center"}
        justify={"space-between"}
      >
        <Flex
          align={"center"}
          justify={"center"}
          className={styles.left}
          gap={"10px"}
        >
          <Flex
            align={"center"}
            justify={"center"}
            gap={"5px"}
            className={styles.date}
          >
            <CiCalendar size={20} />
            <p>{data.date}</p>
          </Flex>
          <p className={styles.timeToRead}>{data.timeToRead} {t('min')}</p>
          <p className={styles.type}>{data.type}</p>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          className={styles.right}
          gap={"10px"}
        >
          <div className="text">{t('Share With')} :</div>
          <Flex gap={"5px"} className="links">
            <a
              className={styles["social-icon"]}
              href={`https://www.facebook.com/share.php?u=${encodeURIComponent(
                currentUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              className={styles["social-icon"]}
              href={`https://www.instagram.com/finiticme?url=${encodeURIComponent(
                currentUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              className={styles["social-icon"]}
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                currentUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              className={styles["social-icon"]}
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                currentUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          </Flex>
        </Flex>
      </Flex>
      <div className={styles.imageContainer}>
        <img src={data.image} alt={data.imageTitle} />
      </div>
      {Object.entries(data.sections).map(([sectionKey, section]) => (
        <section key={sectionKey} className={styles.section}>
          {sectionKey === "key_features" ? (
            <>
              <h2>{t('Key Features')}</h2>
              {Object.entries(section).map(([featureKey, feature]) => (
                <div key={featureKey} className={styles.feature}>
                  <h3 className={styles.title}>{feature.title}</h3>
                  <RenderContent content={feature.content} />
                </div>
              ))}
            </>
          ) : (
            <>
              {
                sectionKey === "introduction" ? (
                  <></>
                ) : (
                  <h2>{sectionKey.replace(/_/g, " ").toUpperCase()}</h2>
                )
              }
              <RenderContent content={section.content} />
            </>
          )}
        </section>
      ))}
    </main>
  );
}
