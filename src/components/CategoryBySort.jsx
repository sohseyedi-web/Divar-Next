"use client";
import RadioInput from "@/ui/RadioInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const sortOptions = [
  {
    id: 1,
    value: "latest",
    label: "جدید ترین",
  },
  {
    id: 2,
    value: "earliest",
    label: "قدیمی ترین",
  },
  {
    id: 3,
    value: "popular",
    label: "محبوب ترین",
  },
];

const CategoryBySort = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [sort, setSort] = useState(searchParams.get("sort"));

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const sortHandler = (e) => {
    const value = e.target.value;
    setSort(value);
    router.push(pathname + "?" + createQueryString("sort", value));
  };

  useEffect(() => {
    setSort(searchParams.get("sort") || "");
  }, [searchParams]);

  return (
    <>
      <p className="font-semibold text-lg mb-2">مرتب سازی</p>
      {sortOptions.map((item) => (
        <RadioInput
          label={item.label}
          key={item.id}
          name="advs-sort"
          id={item.id}
          value={item.value}
          checked={sort === item.value}
          onChange={sortHandler}
        />
      ))}
    </>
  );
};

export default CategoryBySort;
