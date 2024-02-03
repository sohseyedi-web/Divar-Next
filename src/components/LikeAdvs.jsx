"use client";
import { likeProduct } from "@/services/productService";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import * as RiIcon from "react-icons/ri";

const LikeAdvs = ({ product }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const likeAdvHandler = async () => {
    try {
      const { message } = await likeProduct(product?._id);
      console.log(product);
      toast.success(message);
      router.refresh(pathname + "?" + searchParams.toString());
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <button
      onClick={likeAdvHandler}
      className="btn btn-ghost border-none text-red-600"
    >
      {product?.isLiked ? (
        <RiIcon.RiHeart3Fill className="w-6 h-6 text-red-600" />
      ) : (
        <RiIcon.RiHeart3Line className="w-6 h-6 text-red-600" />
      )}
    </button>
  );
};

export default LikeAdvs;
