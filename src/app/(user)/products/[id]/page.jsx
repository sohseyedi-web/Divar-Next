import { getOneProdcutById, getProducts } from "@/services/productService";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumber";
import { SiRobotframework } from "react-icons/si";
import { toLocalDateStringShort } from "@/utils/ToLocalDate";
import LikeAdvs from "@/components/LikeAdvs";
import SavedAdvs from "@/components/SavedAdvs";
import Link from "next/link";
import PhoneModal from "./PhoneModal";

export const dynamic = "force-static";
export const dynamicParams = false;

export default async function ProductId({ params }) {
  const { id } = params;
  const { product } = await getOneProdcutById(id);

  return (
    <div className="container mx-auto pt-5 max-w-7xl flex lg:flex-row flex-col gap-x-2">
      <div className="lg:w-[20%] w-full h-[250px] text-white bg-red-700 rounded flex items-center justify-center gap-x-2">
        <SiRobotframework size={32} />
        <span className="text-2xl font-bold">دیوار</span>
      </div>
      <div className="flex-1 flex-col space-y-3">
        <h6 className="font-semibold text-2xl">{product?.title}</h6>
        <p className="font-medium">{product?.description}</p>
        <div className="flex items-center gap-x-2">
          <span className="font-bold">قیمت : </span>
          <p className="font-semibold">
            {toPersianNumbersWithComma(product.price)} تومان
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <span className="font-bold">تاریخ ساخت: </span>
          <span className="font-semibold">
            {toLocalDateStringShort(product.createdAt)}
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <span className="font-bold">شهر : </span>
          <p className="font-semibold">{product.city}</p>
          <PhoneModal product={product} />
        </div>
        <div className="flex items-center gap-x-2">
          <Link
            className="w-[15%] text-lg h-[45px] btn btn-sm btn-primary text-center"
            href={"/products"}
          >
            بازگشت
          </Link>
          <div className="flex items-center gap-x-2">
            <LikeAdvs product={product} />
            <SavedAdvs product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { products } = await getProducts();

  return products.map((product) => ({
    id: product._id,
  }));
}
