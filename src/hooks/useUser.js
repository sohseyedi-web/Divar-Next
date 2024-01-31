import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getUserProfile,
  getAllUsers,
  updateProfile,
} from "@/services/authServices";
import { toast } from "react-hot-toast";

export const useGetUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUserProfile,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { user } = data || {};
  const role = user?.role === "ADMIN" ? "admin" : "profile";

  return { isLoading, user, role };
};

export const useGetAllUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-user"],
    queryFn: getAllUsers,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { users } = data || {};

  return { isLoading, users };
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: updateUserProfile, isPending: isUpdating } = useMutation(
    {
      mutationFn: updateProfile,
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries({
          queryKey: ["get-user"],
        });
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message);
      },
    }
  );

  return { updateUserProfile, isUpdating };
};
