import AdvertisingForm from "@/components/AdvertisingForm";
import { useRemoveProducts } from "@/hooks/useProducts";
import Loading from "@/ui/Loading";
import Modal from "@/ui/Modal";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumber";
import Link from "next/link";
import { useState } from "react";
import { HiEye, HiTrash } from "react-icons/hi2";
import { RiEdit2Line } from "react-icons/ri";

const AdvertisingRow = ({ product, index }) => {
  const { isDeleting, removeAdvertising } = useRemoveProducts();
  const [isEdit, setIsEdit] = useState(false);
  return (
    <tr key={product._id}>
      <td>{index + 1}</td>
      <td className="whitespace-nowrap font-bold">{product.title}</td>
      <td>{product.category.title}</td>
      <td>{toPersianNumbersWithComma(product.price)}</td>
      <td className="font-bold text-lg">
        <div className="flex items-center gap-x-4">
          <Link href={`/products/${product._id}`}>
            <HiEye className="text-blue-900 w-6 h-6" />
          </Link>
          <button onClick={() => removeAdvertising(product?._id)}>
            {isDeleting ? (
              <Loading />
            ) : (
              <HiTrash className="text-rose-600 w-6 h-6" />
            )}
          </button>
          <Modal
            onClose={() => setIsEdit(false)}
            open={isEdit}
            title={"ویرایش آگهی "}
          >
            <AdvertisingForm onClose={() => setIsEdit(false)} advToEdit={product} />
          </Modal>
          <button>
            <RiEdit2Line className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AdvertisingRow;
