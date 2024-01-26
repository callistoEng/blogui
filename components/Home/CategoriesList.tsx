import { IPostCategories } from "@/app/types/posts";

const CategoriesList = ({ categories }: { categories: IPostCategories }) => {
  return (
    <>
      <h3 className="mb-4 font-semibold text-2xl text-blue-600 dak:text-white">
        Categories
      </h3>
      <ul className="w-fill text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {categories.results.flatMap((category) => {
          return (
            <li
              className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
              key={category.slug}
            >
              <div className="flex items-center ps-3">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value={category.category_name}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="vue-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {category.category_name}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CategoriesList;
