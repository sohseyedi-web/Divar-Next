import { productListTableTHeads } from "@/constants/tableHeads";
import { useGetProducts } from "@/hooks/useProducts";
import { useGetUser } from "@/hooks/useUser";
import Loading from "@/ui/Loading";
import Table from "@/ui/Tabel";
import AdvertisingRow from "./AdvertisingRow";

const AdvertisingTable = () => {
  const { products, isLoading } = useGetProducts();
  const { user } = useGetUser();

  const result = products?.filter((p) => p.userCreated === user?._id);

  if (isLoading) return <Loading />;
  if (!result?.length) return <div>آگهی وجود ندارد</div>;

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
        {result?.map((product, index) => (
          <AdvertisingRow key={product._id} product={product} index={index} />
        ))}
      </tbody>
    </Table>
  );
};

export default AdvertisingTable;
