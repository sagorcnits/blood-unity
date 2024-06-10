import { useQuery } from "@tanstack/react-query";
import useAxiosPublice from "./useAxiosPublice";

const usePayments = () => {
    const axiosPublic = useAxiosPublice();
    const { data: payments = [], refetch, } = useQuery({
      queryKey: ["payments",],
      queryFn: async () => {
        const res = await axiosPublic.get(`/payments`);
        return res.data;
      },
    });
    return [payments, refetch];
};

export default usePayments;