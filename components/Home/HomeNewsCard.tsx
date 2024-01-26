import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IPosts } from "../../app/types/posts";
import { truncateWords } from "@/utils/truncate";
const HomeNewsCard = ({ post }: { post: IPosts }) => {
  return (
    <Link
      href="#"
      className="flex flex-col mb-4  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div className="relative w-32 h-44">
        <Image
          className="object-fit w-full rounded-t-lg relative h-full md:rounded-none md:rounded-s-lg pl-4 pr-2 py-3"
          src={post.thumbnail}
          alt={post.title}
          fill={true}
        />
      </div>
      <div className="flex flex-col justify-between pl-0 pr-4 py-3 leading-normal w-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {truncateWords(post.overview, 80)}
        </p>
      </div>
    </Link>
  );
};

export default HomeNewsCard;
