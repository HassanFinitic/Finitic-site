import React from "react";
import style from "./blog.module.css";
import Header from "@/components/shared/header/Header";
import Button from "@/components/shared/button/Button";
import Link from "next/link";
import Grid from "@/components/grid/Grid";
import Flex from "@/components/flex/Flex";
import { getLocale, getTranslations } from "next-intl/server";

export const metadata = {
  title: "Finitic Blog ƒ? Latest Insights on Forex, Fintech & Trading Technology",
  description: "Explore expert insights on Forex trading, Fintech innovations, AI-driven trading strategies, algorithmic trading, blockchain, and financial automation. Stay ahead with the latest trends in finance, trading technology, and data analytics from industry leaders.",
  keywords: [
    "Forex blog",
    "Fintech trends",
    "AI trading strategies",
    "algorithmic trading",
    "Forex market analysis",
    "financial technology",
    "blockchain in finance",
    "automated trading systems",
    "trading bots",
    "digital payments",
    "DeFi trends",
    "big data in finance",
    "risk management",
    "trading analytics",
    "financial automation",
    "Finitic blog"
  ],
  openGraph: {
    title: "Finitic Blog ’'? Latest Insights on Forex, Fintech & Trading Technology",
    description: "Explore expert insights on Forex trading, Fintech innovations, AI-driven trading strategies, algorithmic trading, blockchain, and financial automation. Stay ahead with the latest trends in finance, trading technology, and data analytics from industry leaders.",
    type: "website",
    images: [
      {
        url: "/assets/images/logo.png",
        alt: "Finitic Technology"
      }
    ]
  }
};

function stripTags(html = "") {
  return html.replace(/<[^>]*>/g, "").trim();
}

async function fetchBlogs() {
  const response = await fetch(
    "https://blogs.finitic.com/?rest_route=/wp/v2/posts&_embed",
    { next: { revalidate: 300 } }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch blogs: ${response.status}`);
  }

  const posts = await response.json();

  return posts.map((post) => {
    const media = post?._embedded?.["wp:featuredmedia"]?.[0];
    const rawTitle = post?.title?.rendered || "";
    const rawExcerpt = post?.excerpt?.rendered || "";
    return {
      slug: post?.slug || "",
      title: stripTags(rawTitle),
      description: stripTags(rawExcerpt),
      image: media.link || "",
      imageTitle: "Featured",
      type: post.type,
      timeToRead: Math.ceil(((post.excerpt.rendered).length) / 100)
    };
  });
}

export default async function Page() {
  const locale = await getLocale();
  const t = await getTranslations("blogs_page");

  let blogs = [];
  try {
    blogs = await fetchBlogs();
  } catch (err) {
    console.error(`Failed to load blog data for locale "${locale}"`, err);
  }
  return (
    <div>
      <div style={{ marginBottom: "100px" }} className="container">
        <Header
          title={t("Blogs")}
          decription={t("Insights and Updates for your growth")}
        />
        <div style={{ padding: "1rem 0" }}>
          <Button url={"/contact-us"} text={t("Contact us")} center={true} />
        </div>
      </div>
      <div className="container">
        <Grid
          colsLarge={1}
          colsMedium={1}
          colsSmall={1}
          colsExtraSmall={1}
          gap={"50px"}
        >
          {blogs.map((blog) => (
            <div className={style.blogCard} key={blog.slug}>
              <Link href={`/blog/${blog.slug}`}>
                <Flex
                  justify={"space-between"}
                  align={"center"}
                  direction={"row"}
                  directionSmall={"column"}
                  gap={"20px"}
                >
                  <div className={style.blogCardImage}>
                    <img src={blog.image} alt={blog.title} />
                    <p className={style.imageTitle}>{blog.imageTitle}</p>
                  </div>

                  <Flex gap={"20px"} direction={"column"} className={style.blogCardContent}>
                    <Flex direction={"row"} gap={"10px"}>
                      <p className={style.type}>{blog.type}</p>
                      <p className={style.timeToRead}>{blog.timeToRead} {t("min read")}</p>
                    </Flex>
                    <h3 className={style.title}>{blog.title}</h3>
                    <h4 className={style.description}>{blog.description}</h4>
                  </Flex>
                </Flex>
              </Link>
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
}
