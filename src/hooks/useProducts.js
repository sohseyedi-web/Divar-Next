import {
  addProdcut,
  changeProductStatusApi,
  getProducts,
  removeProduct,
  updateProduct,
} from "@/services/productService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useGetProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-adv"],
    queryFn: getProducts,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { products } = data || {};

  return { isLoading, products };
};
export const useCreateProducts = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: addAdvertising, isPending: isCreating } = useMutation({
    mutationFn: addProdcut,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["get-adv"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { addAdvertising, isCreating };
};
export const useRemoveProducts = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: removeAdvertising, isPending: isDeleting } = useMutation(
    {
      mutationFn: removeProduct,
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["get-adv"] });
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message);
      },
    }
  );

  return { removeAdvertising, isDeleting };
};
export const useUpdateProducts = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: updateAdvertising, isPending: isUpdating } = useMutation(
    {
      mutationFn: updateProduct,
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["get-adv"] });
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message);
      },
    }
  );

  return { isUpdating, updateAdvertising };
};
export const useChangeStatusProducts = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: changeProductStatus, isPending: isUpdating } =
    useMutation({
      mutationFn: changeProductStatusApi,
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["get-adv"] });
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message);
      },
    });

  return { changeProductStatus, isUpdating };
};
