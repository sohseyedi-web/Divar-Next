import CategoryByFilter from "@/components/CategoryByFilter";
import CategoryBySort from "@/components/CategoryBySort";
import SidebarLayout from "@/components/SidebarLayout";

const CategorySidebar = ({ categories }) => {
  return (
    <SidebarLayout>
      <CategoryByFilter categories={categories} />
      <CategoryBySort />
    </SidebarLayout>
  );
};

export default CategorySidebar;
