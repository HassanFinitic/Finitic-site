'use client';

import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { useState, useEffect } from "react";
import { MdOutlineAccessTime } from "react-icons/md";

import Link from "next/link";

// Extract first image inside WP HTML content

export default function Articles() {
  const [sortValue, setSortValue] = useState("latest");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function getPosts() {
    try {
      const res = await fetch(
        "https://blogs.finitic.com/?rest_route=/wp/v2/posts&_embed"
      );
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Failed to load posts:", error);
    } finally {
      setLoading(false);
    }
  }
  getPosts();
}, []);

// Get featured image
function getFeaturedImage(post) {
  return (
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/fallback.jpg"
  );
}


  // Sort by date
  const sortedPosts = [...posts].sort((a, b) =>
    sortValue === "latest"
      ? new Date(b.date).getTime() - new Date(a.date).getTime()
      : new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <Box sx={{ width: "100%" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          mb: 3,
        }}
      >
        <Typography variant="h6" fontSize="20px" fontWeight={600} color="#111827">
          Other Blogs
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography fontSize="15px" fontWeight={600} color="#919191">
            Sort By:
          </Typography>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select value={sortValue} onChange={(e) => setSortValue(e.target.value)}>
              <MenuItem value="latest">Latest</MenuItem>
              <MenuItem value="oldest">Oldest</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Loading */}
      {loading && <Typography>Loading...</Typography>}

      {/* Articles Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 2,
        }}
      >
        {sortedPosts.map((post) => {
          // const imageUrl = getFirstImage(post.content.rendered);
          const imageUrl = getFeaturedImage(post);
          const cleanExcerpt = post.excerpt.rendered.replace(/<[^>]+>/g, "");
          return (
            <Card
              key={post.id}
              sx={{
                borderRadius: "16px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
                border: "1px solid #D3D3D3",
                overflow: "hidden",
                transition: "all 0.3s ease",
                "&:hover": { transform: "translateY(-4px)" },
              }}
            >
              <CardMedia
                component="img"
                image={imageUrl}
                alt={post.title.rendered}
                sx={{ height: 180, objectFit: "cover" }}
              />

              <CardContent sx={{ p: 2 }}>
                <Typography fontSize="12px" fontWeight={500} color="#9CA3AF">
                  • {new Date(post.date).toDateString()}
                </Typography>

                <Typography
                  variant="h6"
                  fontSize="16px"
                  fontWeight={600}
                  mb={1}
                  color="#111827"
                >
                  {post.title.rendered}
                </Typography>

                <Typography variant="body2" color="#6B7280" mb={2} noWrap>
                  {cleanExcerpt}
                </Typography>

                <CardActions sx={{ p: 0, justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <MdOutlineAccessTime sx={{ fontSize: 16, color: "#9CA3AF" }} />
                    <Typography variant="caption" color="#9CA3AF">
                      {Math.round(post.excerpt.rendered.length / 100)} min read
                    </Typography>
                  </Box>

                  <Link href={`/blogs/${post.slug}`}>
                    <Typography
                      fontWeight={600}
                      color="#1A2B56"
                      sx={{ "&:hover": { textDecoration: "underline" } }}
                    >
                      Read More
                    </Typography>
                  </Link>
                </CardActions>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
