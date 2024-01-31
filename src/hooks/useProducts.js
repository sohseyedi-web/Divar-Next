import { getProducts } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";

export const usegetProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-products"],
    queryFn: getProducts,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { products } = data || {};

  return { products, isLoading };
};
