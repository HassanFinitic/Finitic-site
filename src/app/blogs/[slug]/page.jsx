import Flex from "@/components/flex/Flex";
import styles from "./blog.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { getTranslations } from "next-intl/server";

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

          // Enhanced table structure
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
                  <strong>{key.replace(/_/g, " ")} {value !== "" ? ":" : ""} </strong> {value}
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

function stripTags(html = "") {
  return html.replace(/<[^>]*>/g, "").trim();
}

async function fetchPost(slug) {
  const response = await fetch(
    `https://blogs.finitic.com/?rest_route=/wp/v2/posts&slug=${encodeURIComponent(slug)}&_embed`,
    { next: { revalidate: 300 } }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch blog post: ${response.status}`);
  }

  const posts = await response.json();
  const post = posts?.[0];

  if (!post) {
    return null;
  }

  const media = post?._embedded?.["wp:featuredmedia"]?.[0];

  return {
    slug: post?.slug || slug,
    title: stripTags(post?.title?.rendered || ""),
    description: stripTags(post?.excerpt?.rendered || ""),
    date: new Date(post?.date || Date.now()).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }),
    image: media?.source_url || "",
    imageTitle: stripTags(media?.title?.rendered || "Featured"),
    type: "News",
    timeToRead: Math.ceil(((post.excerpt.rendered).length) / 100),
    sections: {
      content: {
        content: [stripTags(post?.content?.rendered || "")]
      }
    },
    metaData: {
      title: stripTags(post?.title?.rendered || "Finitic Blog"),
      description: stripTags(post?.excerpt?.rendered || ""),
      keywords: []
    }
  };
}

export async function generateMetadata({ params }) {
  const data = await fetchPost(params.slug);

  if (!data) {
    return {
      title: "Finitic Blog",
      description: "",
      openGraph: {
        title: "Finitic Blog",
        description: "",
        type: "article"
      }
    };
  }

  return {
    title: data.metaData?.title || "Finitic Blog",
    description: data.metaData?.description || "",
    openGraph: {
      title: data.metaData?.title || "Finitic Blog",
      description: data.metaData?.description || "",
      type: "article",
      images: data.image ? [{ url: data.image, alt: data.imageTitle || data.title }] : []
    }
  };
}

export default async function Page({ params }) {
  const t = await getTranslations("blog_page");
  const data = await fetchPost(params.slug);

  if (!data) {
    return <p>Blog post not found.</p>;
  }

  const currentUrl = `https://finitic.com/blog/${data.slug}`;

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
                  <div dangerouslySetInnerHTML={{__html: section.content }} />
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
              <div dangerouslySetInnerHTML={{__html: section.content }} />
            </>
          )}
        </section>
      ))}
    </main>
  );
}
