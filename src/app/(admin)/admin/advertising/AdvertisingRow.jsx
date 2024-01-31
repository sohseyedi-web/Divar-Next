import { toPersianNumbersWithComma } from "@/utils/toPersianNumber";
import Link from "next/link";
import { HiEye, HiTrash } from "react-icons/hi2";
import { RiEdit2Line } from "react-icons/ri";

const AdvertisingRow = ({ product, index }) => {
  return (
    <tr key={product._id}>
      <td>{index + 1}</td>
      <td className="whitespace-nowrap font-bold">{product.title}</td>
      <td>{product.category.title}</td>
      <td>{toPersianNumbersWithComma(product.price)}</td>
      <td className="font-bold text-lg">
        <div className="flex items-center gap-x-4">
          <Link href={`/admin/products/${product._id}`}>
            <HiEye className="text-blue-900 w-6 h-6" />
          </Link>
          <button>
            <HiTrash className="text-rose-600 w-6 h-6" />
          </button>
          <button>
            <RiEdit2Line className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AdvertisingRow;
