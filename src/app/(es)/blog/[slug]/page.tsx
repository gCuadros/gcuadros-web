import BlogArticle from "@/components/blog-article";
import { getPosts, getPost } from "@/lib/blog";
import { routeMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
export const dynamicParams = false;
export function generateStaticParams() {
  return getPosts("es").map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost("es", slug);
  if (!post) notFound();
  return routeMetadata(
    "es",
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
  const post = getPost("es", slug);
  if (!post) notFound();
  return <BlogArticle locale="es" post={post} />;
}
