import { blogFeed } from "@/lib/blog-feed";
export const dynamic = "force-static";
export function GET() {
  return new Response(blogFeed("en"), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
