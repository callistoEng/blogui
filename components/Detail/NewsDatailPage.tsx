'use client'
import Image from "next/image";
import dynamic from "next/dynamic";
import parse from "html-react-parser";
import Link from "next/link";
// import CKComments from "../Ckeditors/CkComments";

// const CKComments = dynamic(() => import("../Ckeditors/CustomEditor"), {
//   ssr: false,
// });
const NewsDatailPage = () => {
  return (
    <section className="text-black w-2/3 p-4 mx-auto">
      <header>
        <div className="mb-4">
          <h4 className="text-blue-600 text-2xl font-semibold mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            beatae delectus dolore deserunt eveniet dignissimos facilis quae
          </h4>
          <p>created_on</p>
          <p>category</p>
        </div>

        <div className="flex items-center">
          <div className="flex-shrink-0 relative w-9 h-9">
            <Image
              className="w-8 h-8 rounded-full"
              src="/images/img3.jpg"
              alt="Neil image"
              fill={true}
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dar:text-white">
              Neil Sims
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              email@windster.com
            </p>
          </div>
        </div>
      </header>
      <article>
        <figure className="relative w-full h-72 my-3">
          <Image
            alt="thumbnail image"
            className=" rounded-md"
            src="/images/img4.jpg"
            fill={true}
          />
          <figcaption>Fig.-Some description</figcaption>
        </figure>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse unde
          debitis porro itaque placeat, maiores enim autem minus fugit illum
          similique molestiae vitae officiis aut, doloribus perferendis
          asperiores, tempora recusandae? Cupiditate hic quaerat facere eos
          delectus, sed voluptatem assumenda minus id laborum ipsum quod
          obcaecati inventore exercitationem sint corrupti alias et voluptatum
          quae, quasi minima suscipit aperiam facilis? Error perspiciatis ullam
          quidem possimus, nam commodi. Deserunt dolor iusto inventore
          voluptatem dolore officia temporibus voluptates esse exercitationem
          voluptatibus optio nisi ducimus, rerum, ipsam, sed error tenetur
          delectus ad eos. Dignissimos laboriosam consequatur similique debitis
          esse obcaecati dolor earum quod officia, voluptas eius officiis!
          Facilis quis nihil illum quos exercitationem accusamus odio, corrupti
          sed quam vero illo. Voluptas provident ea omnis totam debitis, modi
          dolores odit itaque vel quae at expedita laborum eum necessitatibus
          dolorum perferendis natus eos. Nobis recusandae nihil a nesciunt,
          sapiente dolorum quod vitae impedit veniam cum aut, enim voluptatum
          pariatur doloremque amet totam deleniti quo mollitia? Vel sequi
          nostrum sapiente eos aliquam quo culpa, odit officia, provident
          temporibus id illo atque debitis natus consequuntur corrupti
          voluptatibus dolorum eaque quam numquam dolores porro iusto, obcaecati
          quod. Iure voluptatibus accusantium tenetur rem, vero expedita dolore
          voluptatem! Aut excepturi animi ipsum!
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
        <div className="h-72 w-full">
          {/* <CKComments /> */}
        </div>
      </div>
    </section>
  );
};

export default NewsDatailPage;
