import { useQuery } from "@tanstack/react-query";
import { getUserProfile, getAllUsers } from "@/services/authServices";

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
