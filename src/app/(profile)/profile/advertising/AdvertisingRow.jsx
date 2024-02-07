"use client";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumber";
import Link from "next/link";
import { HiEye } from "react-icons/hi2";
import { toLocalDateString } from "@/utils/ToLocalDate";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge-danger",
  },
  {
    label: "در صف انتشار",
    className: "badge-secondary",
  },
  {
    label: "انتشار",
    className: "badge-success",
  },
];

const AdvertisingRow = ({ product, index }) => {
  return (
    <tr key={product._id}>
      <td>{index + 1}</td>
      <td className="whitespace-nowrap font-bold">{product.title}</td>
      <td>{product.category.title}</td>
      <td>{toPersianNumbersWithComma(product.price)}</td>
      <td>
        <span
          className={`badge cursor-pointer px-2 text-white ${
            statusStyle[Number(product.status)].className
          }`}
        >
          {statusStyle[Number(product.status)].label}
        </span>
      </td>
      {Number(product.status) != 2 ? null : (
        <td className="font-bold text-lg">
          <div className="flex items-center gap-x-4">
            <Link href={`/products/${product._id}`}>
              <HiEye className="text-blue-900 w-6 h-6" />
            </Link>
          </div>
        </td>
      )}
      <td>{toLocalDateString(product.createdAt)}</td>
    </tr>
  );
};

export default AdvertisingRow;
