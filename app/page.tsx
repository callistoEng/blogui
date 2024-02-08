import CategoriesList from "@/components/Home/CategoriesList";
import HomeNewsCard from "@/components/Home/HomeNewsCard";
import { IPosts } from "./types/posts";

export default async function Home() {
  const categories = await getCategoriesList();
  const homePosts = await getHomePostsList();
  return (
    <main className="block min-h-screen items-center justify-between p-8">
      <div className="mb-12 mt-0 w-2/3 mx-auto">
        <h1 className=" font-bold text-4xl text-blue-600">
          NextNew Blogs and Many More.
        </h1>
      </div>
      <section className="w-2/3 mx-auto grid grid-cols-3 gap-4">
        <aside>
          <CategoriesList categories={categories} />
        </aside>
        <article className="col-span-2">
          <h3 className="mb-4 font-semibold text-2xl text-blue-600 dak:text-white">
            Latest
          </h3>
          {homePosts.results.map((post: IPosts) => {
            return <HomeNewsCard key={post.id} post={post} />;
          })}
        </article>
      </section>
    </main>
  );
}

async function getCategoriesList() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DJANGO_BASE_URL}/api/v1/posts/categories/`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getHomePostsList() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DJANGO_BASE_URL}/api/v1/posts/`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
