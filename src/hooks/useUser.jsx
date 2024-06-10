import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
const axiosSecure = useAxiosSecure()
const {user} = useAuth()
    const { data:users=[], refetch, isLoading} = useQuery({
        queryKey: ['user',user?.email],
        enabled:!!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`)
            return res.data;
        }
      })
      return [users,refetch,isLoading]
};

export default useUser;