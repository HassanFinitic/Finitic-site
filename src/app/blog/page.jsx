"use client";
import React, { useEffect, useState } from "react";
import style from "./blog.module.css";
import Header from "@/components/shared/header/Header";
import Button from "@/components/shared/button/Button";
import Link from "next/link";
import Grid from "@/components/grid/Grid";
import Flex from "@/components/flex/Flex";
import { useLocale, useTranslations } from "next-intl";

const metadata = {
  title: "Finitic Blog – Latest Insights on Forex, Fintech & Trading Technology",
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
  ]
};

export default function Page() {
  const [blogs, setBlogs] = useState([]);
  const locale = useLocale();
  const t = useTranslations("blogs_page");

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await import(`@/../public/data/blogs/all-blogs-${locale}.json`);
        setBlogs(data.default); 
        document.title = metadata.title;
        document
          .querySelector('meta[name="description"]')
          ?.setAttribute("content", metadata.description);
        document
          .querySelector('meta[name="keywords"]')
          ?.setAttribute(
            "content",
            metadata.keywords.join(", ")
          );
      } catch (err) {
        console.error(`Failed to load blog data for locale "${locale}"`, err);
        setBlogs([]); // fallback
      }
    };

    loadBlogs();
  }, [locale]);

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
                    <p className={style.description}>{blog.description}</p>
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
