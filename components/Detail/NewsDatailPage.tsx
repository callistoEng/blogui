import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import { IPostDetail } from "@/app/types/posts";
import { ecFormatTime } from "@/utils/truncate";
// import CKComments from "../Ckeditors/CkComments";

// const CKComments = dynamic(() => import("../Ckeditors/CustomEditor"), {
//   ssr: false,
// });
const NewsDatailPage = ({ post }: { post: IPostDetail }) => {
  return (
    <section className="text-black w-2/3 p-4 mx-auto">
      <header>
        <div className="mb-4">
          <h4 className="text-blue-600 text-2xl font-semibold mb-2">
            {post.title}
          </h4>
          <p className=" capitalize">{ecFormatTime(post.created_on)}</p>
          <p>{post.category}</p>
        </div>

        <div className="flex items-center">
          <div className="flex-shrink-0 relative w-9 h-9">
            <Image
              className="w-8 h-8 rounded-full"
              src={`${post.thumbnail}`}
              alt="thumbnail image"
              fill={true}
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dar:text-white">
              {post.content_owner.agency}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {post.content_owner.email}
            </p>
          </div>
        </div>
      </header>
      <article>
        <figure className="relative w-full h-72 mt-3 mb-7">
          <Image
            alt="thumbnail image"
            className=" rounded-md"
            src={`${process.env.NEXT_PUBLIC_DJANGO_BASE_URL}${post.thumbnail}`}
            fill={true}
          />
          <figcaption className="absolute -bottom-6 text-sm italic">Fig.{post.thumbnail_caption}</figcaption>
        </figure>
        <p>
          {parse(post.content)}
        </p>
      </article>
      <div className="my-5">
        <h4 className="text-blue-600 text-xl font-semibold mb-2">
          About the Authour
        </h4>
        <div className="flex flex-row min-w-0 ms-4">
          <div className="mr-5">
            <p className="text-sm font-medium text-gray-900 truncate dar:text-white">
              Neil Sims
            </p>
            <Link
              href="/about"
              className="text-sm text-gray-500 truncate dark:text-gray-400"
            >
              email@windster.com
            </Link>
          </div>
          <span>
            <mark>Authour</mark>
          </span>
        </div>
      </div>
      <div>
        <div>
          <h4>Leave a Comment</h4>
        </div>
        <div className="h-72 w-full">{/* <CKComments /> */}</div>
      </div>
    </section>
  );
};

export default NewsDatailPage;
