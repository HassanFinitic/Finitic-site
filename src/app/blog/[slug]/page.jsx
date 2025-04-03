"use client";
import Flex from "@/components/flex/Flex";
import styles from "./blog.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { useState, useEffect } from "react";

// Helper component to render content items
function RenderContent({ content }) {
  if (!content) {
    return null; // Return nothing if content is not available
  }

  return (
    <>
      {Array.isArray(content) ? (
        content.map((item, index) =>
          typeof item === "string" ? (
            <p className={styles.description} key={index}>
              {item}
            </p>
          ) : (
            <ul key={index} className={styles.list}>
              {Object.entries(item).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.replace(/_/g, " ")}:</strong> {value}
                </li>
              ))}
            </ul>
          )
        )
      ) : (
        <p>No content available</p>
      )}
    </>
  );
}

// Client-side only page component
export default function Page({ params }) {
  const { slug } = params;

  const [data, setData] = useState(null);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    // Set the current URL for sharing
    setCurrentUrl(window.location.href);

    // Dynamically import data based on slug
    const loadData = async () => {
      try {
        const response = await import(`@/data/blogs/${slug}.json`);
        setData(response);

        // Set meta data dynamically based on imported data
        if (response) {
          console.log("hello", response.metaData);
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
  }, [slug]); // This will run when the slug changes

  if (!data) {
    return <p>Failed to load the page content.</p>;
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
          <p className={styles.timeToRead}>{data.timeToRead} min</p>
          <p className={styles.type}>{data.type}</p>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          className={styles.right}
          gap={"10px"}
        >
          <div className="text">Share With :</div>
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
              <h2>Key Features</h2>
              {Object.entries(section).map(([featureKey, feature]) => (
                <div key={featureKey} className={styles.feature}>
                  <h3 className={styles.title}>{feature.title}</h3>
                  <RenderContent content={feature.content} />
                </div>
              ))}
            </>
          ) : (
            <>
              <h2>{sectionKey.replace(/_/g, " ").toUpperCase()}</h2>
              <RenderContent content={section.content} />
            </>
          )}
        </section>
      ))}
    </main>
  );
}
