import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Markdown copies of each article, for readers and agents that prefer plain text.
  async rewrites() {
    return [
      { source: "/blog/:slug.md", destination: "/blog-markdown/es/:slug" },
      { source: "/en/blog/:slug.md", destination: "/blog-markdown/en/:slug" },
    ];
  },
};

export default nextConfig;
