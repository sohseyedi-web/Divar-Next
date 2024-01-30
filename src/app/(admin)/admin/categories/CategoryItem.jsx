import * as RiIcon from "react-icons/ri";

const CategoryItem = ({ item }) => {
  return (
    <div
      className="lg:w-[24%] flex items-center justify-between h-[45px] md:w-[45%] w-full md:mx-0 mx-auto rounded-md bg-gray-200 shadow-md px-2 py-1"
      key={item?._id}
    >
      <h6 className="text-lg font-semibold">{item?.title}</h6>
      <div className="flex items-center gap-x-4">
        <span className="text-indigo-500">
          <RiIcon.RiEdit2Line size={25} />
        </span>

        <span className="text-red-500">
          <RiIcon.RiDeleteBin2Line size={25} />
        </span>
      </div>
    </div>
  );
};

export default CategoryItem;
