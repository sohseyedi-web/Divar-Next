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
  const resultSave = products?.reduce((acc, product) => {
    const isSaved = product.saved.some((savedId) => savedId === user?._id);
    if (isSaved) {
      acc.push(product);
    }
    return acc;
  }, []);

  if (isLoading) return <Loading />;
  if (!resultSave.length) return <div>آگهی نشان نشده است</div>;
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
        {resultSave?.map((product, index) => (
          <SavedRow product={product} index={index} key={product._id} />
        ))}
      </tbody>
    </Table>
  );
};

export default SavedTable;
