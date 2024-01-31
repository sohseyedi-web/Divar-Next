"use client"
import { productListTableTHeads } from "@/constants/tableHeads";
import { usegetProducts } from "@/hooks/useProducts";
import Loading from "@/ui/Loading";
import Table from "@/ui/Tabel";
import AdvertisingRow from "./AdvertisingRow";

const AdvertisingTable = () => {
  const { isLoading, products } = usegetProducts();

  if (isLoading) return <Loading />;
  if (!products?.length) return <div>آگهی وجود ندارد</div>;

  return (
    <Table>
      <thead>
        <tr className=" text-gray-800">
          {productListTableTHeads.map((item) => (
            <th key={item.id}>{item.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products?.map((product, index) => (
          <AdvertisingRow key={product._id} product={product} index={index} />
        ))}
      </tbody>
    </Table>
  );
};

export default AdvertisingTable;
