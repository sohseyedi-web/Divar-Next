import { toStringCookies } from "@/utils/toStringCookies";
import { cookies } from "next/headers";
import { getProducts } from "@/services/productService";
import queryString from "query-string";
import { getCategories } from "@/services/categoryService";

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
    <div>
      soheil
      <div>soheil</div>
    </div>
  );
}
