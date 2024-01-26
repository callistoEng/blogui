"use client";
import dynamic from "next/dynamic";
import NewsDatailPage from "@/components/Detail/NewsDatailPage";
// const CKComments = dynamic(
//   () => import("../../../components/Ckeditors/CustomEditor"),
//   {
//     ssr: false,
//   }
// );
const CustomEditor = dynamic(
  () => {
    return import("../../../components/custom-editor");
  },
  { ssr: false }
);
export default function blogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <NewsDatailPage />
      <div className="mt-10 h-48 w-72">
        <h4 className="text-red-500">Some things</h4>
        <CustomEditor initialData="<h1>Hello from CKEditor in Next.js!</h1>" />
      </div>
    </>
  );
}
