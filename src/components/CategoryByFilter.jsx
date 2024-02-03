"use client";
import CheckBox from "@/ui/CheckBox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";

const CategoryByFilter = ({ categories }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [select, setSelect] = useState(
    searchParams.get("category")?.split(",") || []
  );

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const categoryHandler = (e) => {
    const value = e.target.value;
    if (select.includes(value)) {
      const newCategory = select.filter((c) => c !== value);
      setSelect(newCategory);
      router.push(pathname + "?" + createQueryString("category", newCategory));
    } else {
      setSelect([...select, value]);
      router.push(
        pathname + "?" + createQueryString("category", [...select, value])
      );
    }
  };

  return (
    <>
      <p className="text-lg mb-2 font-semibold">دسته بندی</p>
      {categories?.map((item) => (
        <CheckBox
          key={item._id}
          id={item._id}
          value={item.englishTitle}
          label={item.title}
          name={"categort-type"}
          onChange={categoryHandler}
          checked={select.includes(item.englishTitle)}
        />
      ))}
    </>
  );
};

export default CategoryByFilter;
