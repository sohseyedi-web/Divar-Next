"use client";

import { useGetCategory } from "@/hooks/useCategories";
import Loading from "@/ui/Loading";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const { categories, isLoading } = useGetCategory();

  if (isLoading) return <Loading />;
  if (!categories.length) return <div>دسته بندی وجود ندارد</div>;

  return (
    <section className="flex items-center gap-4 flex-wrap">
      {categories?.map((item) => (
        <CategoryItem item={item} key={item._id} />
      ))}
    </section>
  );
};

export default CategoryList;
