"use client";
import { useGetUser } from "@/hooks/useUser";
import { saveProduct } from "@/services/productService";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import * as RiIcon from "react-icons/ri";

const SavedAdvs = ({ product }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {user} = useGetUser();

  const isSaved = user?.savedProducts?.find((p) => p === product._id)

  const saveAdvHandler = async () => {
    try {
      const { message } = await saveProduct(product?._id);
      console.log(product);
      toast.success(message);
      router.refresh(pathname + "?" + searchParams.toString());
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <button
      onClick={saveAdvHandler}
      className="btn btn-ghost border-none text-blue-800"
    >
      {isSaved ? (
        <RiIcon.RiBookmarkFill className="w-6 h-6 text-blue-800" />
      ) : (
        <RiIcon.RiBookmarkLine className="w-6 h-6 text-blue-800" />
      )}
    </button>
  );
};

export default SavedAdvs;
