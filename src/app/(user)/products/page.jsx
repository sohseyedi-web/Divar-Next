import { toStringCookies } from "@/utils/toStringCookies";
import { cookies } from "next/headers";
import { getProducts } from "@/services/productService";
import queryString from "query-string";
import { getCategories } from "@/services/categoryService";
import HeaderProducts from "./HeaderProducts";
import CategorySidebar from "./CategorySidebar";
import Link from "next/link";
import { SiRobotframework } from "react-icons/si";
import getDaysAgo from "@/utils/getDaysAgo";
import LikeAdvs from "@/components/LikeAdvs";
import SavedAdvs from "@/components/SavedAdvs";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumber";
import HeaderResponsive from "./HeaderResponsive";

export const dynamic = "force-dynamic";
export default async function Products({ searchParams }) {
  const cookieStore = cookies();
  const strCookie = toStringCookies(cookieStore);

  const getAllProducts = getProducts(
    queryString.stringify(searchParams),
    strCookie
  );
  const getAllCategories = getCategories();

  const [{ products }, { categories }] = await Promise.all([
    getAllProducts,
    getAllCategories,
  ]);

  const filterProducts = products?.filter((p) => p.status == 2);

  return (
    <section className="flex container mx-auto flex-col">
      <HeaderProducts />
      <div className="flex">
        <CategorySidebar categories={categories} />
        <div className="flex-1 overflow-y-auto p-3 ">
          <div className="flex items-center gap-x-5 flex-wrap">
            {filterProducts?.map((product) => (
              <div
                className="shadow rounded border border-gray-400 p-1 lg:w-[30%] md:w-[45%] w-[90%] lg:mx-0 mx-auto"
                key={product._id}
              >
                <div className="w-full h-[150px] text-white bg-red-700 rounded flex items-center justify-center gap-x-2">
                  <SiRobotframework size={32} />
                  <span className="text-2xl font-bold">دیوار</span>
                </div>
                <h4 className="my-2 text-xl font-bold">{product.title}</h4>
                <p className="my-2 font-semibold opacity-90 w-[150px] truncate">
                  {product.description}
                </p>
                <p className="my-2 font-semibold opacity-90">
                  {toPersianNumbersWithComma(product.price)} تومان
                </p>
                <div className="my-3">
                  <span>تاریخ ساخت: </span>
                  <span className="font-bold">
                    {getDaysAgo(product?.createdAt)} در {product?.city}
                  </span>
                </div>
                <div className="flex items-center my-1 gap-x-2 w-full">
                  <Link
                    className="w-[65%] h-[45px] btn btn-sm btn-primary text-center"
                    href={`/products/${product._id}`}
                  >
                    مشاهده محصول
                  </Link>
                  <div className="flex items-center w-[35%]">
                    <LikeAdvs product={product} />
                    <SavedAdvs product={product} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <HeaderResponsive />
    </section>
  );
}
