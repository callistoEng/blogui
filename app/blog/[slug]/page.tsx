import NewsDatailPage from "@/components/Detail/NewsDatailPage";

export default async function blogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostDetail(params.slug);
  return (
    <>
      <NewsDatailPage post={post} />
      <div className="mt-10 h-48 w-72">
        <h4 className="text-red-500">Some things</h4>
      </div>
    </>
  );
}

async function getPostDetail(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DJANGO_BASE_URL}/api/v1/posts/detail/${slug}/`,
    { cache: "no-store" }
  );
  if (res.status !== 200) {
    throw new Error("Server failed");
  }
  return res.json();
}
