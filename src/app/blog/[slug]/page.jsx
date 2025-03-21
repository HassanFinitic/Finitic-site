import Flex from "@/components/flex/Flex";
import styles from "./blog.module.css";

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

// Dynamic Page Component (Server Component)
export default async function Page({ params }) {
  const { slug } = params;

  let data = null;

  try {
    // Try importing the JSON data dynamically
    data = await import(`@/data/blogs/${slug}.json`);
  } catch (error) {
    console.error("Error loading JSON data:", error);
    data = {}; // Set to empty object if there is an error
  }

  if (!data) {
    return <p>Failed to load the page content.</p>;
  }

  return (
    <main className={`container ${styles.main}`}>
      <h1 className={styles.title}>{data.title}</h1>
      <Flex direction={"row"} directionSmall={"column"} align={"center"} justify={"space-between"}>
        <Flex className={styles.left} gap={"10px"}>
          <Flex className={styles.date}></Flex>
          <p className={styles.timeToRead}>{data.timeToRead} min</p>
          <p className={styles.type}>{data.type}</p>
        </Flex>
        <Flex className={styles.right} gap={"10px"}>
            Share With
        </Flex>
      </Flex>
      <div className={styles.imageContainer}>
        <img src={data.image} alt={data.imageTitle} />
      </div>
      <p className={styles.description}>{data.description}</p>
      {Object.entries(data.sections).map(([sectionKey, section]) => (
        <section key={sectionKey} className={styles.section}>
          {/* Handle nested subsections (e.g., key_features) */}
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
