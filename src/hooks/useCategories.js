import {
  addNewCategory,
  getCategories,
  removeCategory,
  updateCategory,
} from "@/services/categoryService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useGetCategory = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { categories } = data || {};

  return { categories,isLoading };
};
export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: addCategories, isPending } = useMutation({
    mutationFn: addNewCategory,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["get-categories"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isPending, addCategories };
};
export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: updateCategories, isPending : isUpdating } = useMutation({
    mutationFn: updateCategory,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["get-categories"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isUpdating, updateCategories };
};
export const useRemoveCategory = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: removeCategories, isPending } = useMutation({
    mutationFn: removeCategory,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["get-categories"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isPending, removeCategories };
};
