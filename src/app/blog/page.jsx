import React from "react";
import style from "./blog.module.css";
import Header from "@/components/shared/header/Header";
import Button from "@/components/shared/button/Button";
import Blogs from "@/data/blogs/all-blogs.json";
import Link from "next/link";
import Grid from "@/components/grid/Grid";
import Flex from "@/components/flex/Flex";
import Image from "next/image";
export default function page() {
  console.log(Blogs);
  return (
    <div>
      <div style={{ marginBottom: "100px" }} className="container">
        <Header
          title={"Blogs"}
          decription={"Insights and Updates for your growth"}
        />
        <div style={{ padding: "1rem 0" }}>
          <Button url={"/contact-us"} text={"Contact us"} center={true} />
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
          {Blogs.map((blog) => {
            return (
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
                        <p className={style.timeToRead}>{blog.timeToRead} min read</p>
                      </Flex>
                      <h3 className={style.title}>{blog.title}</h3>
                      <p className={style.description}>{blog.description}</p>
                    </Flex>
                  </Flex>
                </Link>
              </div>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
