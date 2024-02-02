import { toStringCookies } from "@/utils/toStringCookies";
import { cookies } from "next/headers";
import { getProducts } from "@/services/productService";
import queryString from "query-string";
import { getCategories } from "@/services/categoryService";
import HeaderProducts from "./HeaderProducts";
import CategorySidebar from "./CategorySidebar";

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

  return (
    <section  className="flex container mx-auto h-screen flex-col">
      <HeaderProducts />
      <div className="flex h-screen">
        <CategorySidebar categories={categories}/>
        <div className="flex-1 overflow-y-auto p-4 px-8">
          {products?.map((product) => (
            <div>{product?._id}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
