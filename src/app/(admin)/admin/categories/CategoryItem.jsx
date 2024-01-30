"use client";
import { useRemoveCategory } from "@/hooks/useCategories";
import Loading from "@/ui/Loading";
import * as RiIcon from "react-icons/ri";

const CategoryItem = ({ item }) => {
  const { isPending, removeCategories } = useRemoveCategory();

  const handleRemvoeCategory = () => {
    removeCategories(item._id);
  };

  return (
    <div
      className="lg:w-[24%] flex items-center justify-between h-[45px] md:w-[45%] w-full md:mx-0 mx-auto rounded-md bg-gray-200 shadow-md px-2 py-1"
      key={item?._id}
    >
      <h6 className="text-lg font-semibold">{item?.title}</h6>
      <div className="flex items-center gap-x-4">
        <button className="text-indigo-600">
          <RiIcon.RiEdit2Line size={25} />
        </button>

        <button onClick={handleRemvoeCategory} className="text-red-600">
          {isPending ? <Loading /> : <RiIcon.RiDeleteBin2Line size={25} />}
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
