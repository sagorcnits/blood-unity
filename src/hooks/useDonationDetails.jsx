import { useQuery } from "@tanstack/react-query";
import useAxiosPublice from "./useAxiosPublice";

const useDonationDetails = (id) => {
  const axiosPublic = useAxiosPublice();
  const { data: donationEdit = [] ,refetch} = useQuery({
    queryKey: ["donationEdit"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/donations/${id}`);
      return res.data;
    },
  });

  return [donationEdit,refetch];
};

export default useDonationDetails;