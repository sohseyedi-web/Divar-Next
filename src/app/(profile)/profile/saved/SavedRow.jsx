import SavedAdvs from "@/components/SavedAdvs";
import { toLocalDateString } from "@/utils/ToLocalDate";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumber";
import Link from "next/link";
import { HiEye } from "react-icons/hi";

const statusStyle = [
    {
      label: "رد شده",
      className: "badge-error",
    },
    {
      label: "در صف انتشار",
      className: "badge-neutral",
    },
    {
      label: "انتشار",
      className: "badge-success",
    },
  ];
  

const SavedRow = ({ index, product }) => {


  return (
    <tr key={product._id}>
      <td>{index + 1}</td>
      <td className="whitespace-nowrap font-bold">{product.title}</td>
      <td>{product.category.title}</td>
      <td>{toPersianNumbersWithComma(product.price)}</td>
      <td>
        <span
          className={`badge cursor-pointer px-2 text-white ${
            statusStyle[product.status].className
          }`}
        >
          {statusStyle[product.status].label}
        </span>
      </td>
      {product.status != 2 ? null : (
        <td className="font-bold text-lg">
          <div className="flex items-center gap-x-4">
            <Link href={`/products/${product._id}`}>
              <HiEye className="text-blue-900 w-6 h-6" />
            </Link>
            <SavedAdvs product={product}/>
          </div>
        </td>
      )}
      <td>{toLocalDateString(product.createdAt)}</td>
    </tr>
  );
};

export default SavedRow;
