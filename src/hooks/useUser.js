import { useQuery } from "@tanstack/react-query";
import {getUserProfile} from '@/services/authServices'

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
