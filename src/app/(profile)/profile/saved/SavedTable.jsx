"use client";

import { productListTableTHeads } from "@/constants/tableHeads";
import { useGetOwnerProducts, useGetProducts } from "@/hooks/useProducts";
import { useGetUser } from "@/hooks/useUser";
import Loading from "@/ui/Loading";
import Table from "@/ui/Tabel";
import SavedRow from "./SavedRow";

const SavedTable = () => {
  const { user } = useGetUser();
  const { products, isLoading } = useGetProducts();
  
  if (isLoading) return <Loading />;
  if(!user?.savedProducts?.length) return <div>آگهی نشان نشده است</div>
  return (
    <Table>
      <thead>
        <tr className=" text-gray-800 dark:text-gray-200">
          {productListTableTHeads.map((item) => (
            <th key={item.id}>{item.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {user?.savedProducts?.map((items) =>
          products
            ?.filter((p) => p._id === items)
            .map((product, index) => (
              <SavedRow product={product} index={index} key={product._id} />
            ))
        )}
      </tbody>
    </Table>
  );
};

export default SavedTable;
