import BlogArticle from "@/components/blog-article";
import { getPosts, getPost } from "@/lib/blog";
import { routeMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
export const dynamicParams = false;
export function generateStaticParams() {
  return getPosts("en").map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost("en", slug);
  if (!post) notFound();
  return routeMetadata(
    "en",
    `/blog/${slug}`,
    post.title,
    post.summary,
    "article",
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost("en", slug);
  if (!post) notFound();
  return <BlogArticle locale="en" post={post} />;
}
