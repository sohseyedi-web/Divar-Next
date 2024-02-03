"use client";
import Loading from "@/ui/Loading";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumber";
import Link from "next/link";
import { useState } from "react";
import { HiEye, HiTrash } from "react-icons/hi2";
import { RiEdit2Line } from "react-icons/ri";
import { useRemoveProducts } from "@/hooks/useProducts";
import AdvertisingForm from "@/components/AdvertisingForm";
import Modal from "@/ui/Modal";
import ChangeAdvStatus from "./ChangeAdvStatus";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge-danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge-secondary",
  },
  {
    label: "تایید شده",
    className: "badge-success",
  },
];

const AdvertisingRow = ({ product, index }) => {
  const { isDeleting, removeAdvertising } = useRemoveProducts();
  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <tr key={product._id}>
      <td>{index + 1}</td>
      <td className="whitespace-nowrap font-bold">{product.title}</td>
      <td>{product.category.title}</td>
      <td>{toPersianNumbersWithComma(product.price)}</td>
      {/* <td>
        <span className={`badge ${statusStyle[product.status].className}`}>
          {statusStyle[product.status].label}
        </span>
      </td> */}
      {product.status === "OPEN" ? (
        <td className="font-bold text-lg">
          <div className="flex items-center gap-x-4">
            <Link href={`/admin/products/${product._id}`}>
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
              <AdvertisingForm
                onClose={() => setIsEdit(false)}
                advToEdit={product}
              />
            </Modal>
            <button onClick={() => setIsEdit(true)}>
              <RiEdit2Line className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </td>
      ) : (
        <td>
          <Modal
            onClose={() => setOpen(!open)}
            open={open}
            title={"تغییر وضعیت آگهی"}
          >
            <ChangeAdvStatus
              onClose={() => setOpen(!open)}
              advId={product?._id}
            />
          </Modal>
          <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
        </td>
      )}
    </tr>
  );
};

export default AdvertisingRow;
