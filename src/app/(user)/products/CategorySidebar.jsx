import CategoryByFilter from "@/components/CategoryByFilter";
import CategoryBySort from "@/components/CategoryBySort";

const CategorySidebar = ({ categories }) => {
  return (
    <div className="w-[240px] border-l border-gray-200 bg-slate-50 text-gray-900 px-3 py-2 gap-y-3">
      <CategoryByFilter categories={categories} />
      <CategoryBySort />
    </div>
  );
};

export default CategorySidebar;
