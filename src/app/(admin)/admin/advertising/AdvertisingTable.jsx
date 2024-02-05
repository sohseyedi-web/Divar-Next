import { productListTableTHeads } from "@/constants/tableHeads";
import { useGetProducts } from "@/hooks/useProducts";
import Loading from "@/ui/Loading";
import Table from "@/ui/Tabel";
import AdvertisingRow from "./AdvertisingRow";

const AdvertisingTable = () => {
  const { isLoading, products } = useGetProducts();
  console.log(products)

  if (isLoading) return <Loading />;
  if (!products?.length) return <div>آگهی وجود ندارد</div>;


  return (
    <Table>
      <thead>
        <tr>
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
