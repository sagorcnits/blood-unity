import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublice from "./useAxiosPublice";

const useDonations = () => {
  const axiosPublic = useAxiosPublice();
  const { user } = useAuth();
  const { data: donations = [], refetch, isPending } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/donations?email=${user?.email}`);
      return res.data;
    },
  });
  return [donations, refetch, isPending];
};

export default useDonations;
