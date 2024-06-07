import { useQuery } from "@tanstack/react-query";
import useAxiosPublice from "./useAxiosPublice";

const useUsersDonations = () => {
    const axiosPublic = useAxiosPublice()
    const { data: userDonations = [], refetch } = useQuery({
        queryKey: ["userDonations"],
        queryFn: async () => {
          const res = await axiosPublic.get("/donations");
          return res.data;
        },
      });
      return [userDonations, refetch];
};

export default useUsersDonations;