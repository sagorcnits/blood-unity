import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublice from "./useAxiosPublice";

const useUser = () => {
const axiosPublic = useAxiosPublice()
const {user} = useAuth()
    const { data:users=[], refetch} = useQuery({
        queryKey: ['users',user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users?email=${user?.email}`)
            return res.data;
        }
      })
      return [users,refetch]
};

export default useUser;