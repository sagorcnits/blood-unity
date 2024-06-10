import { useQuery } from "@tanstack/react-query";
import useAxiosPublice from "./useAxiosPublice";

const useUserDonations = () => {
    const axiosPublic = useAxiosPublice();
    const { data: userDonations = [], refetch ,isLoading} = useQuery({
      queryKey: ["userDonations",],
      queryFn: async () => {
        const res = await axiosPublic.get(`/donations`);
        return res.data;
      },
    });
    return [userDonations, refetch, isLoading];
};

export default useUserDonations;
