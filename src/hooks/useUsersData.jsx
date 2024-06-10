import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUsersData = () => {
   const axiosSecure = useAxiosSecure()
        const { data:usersData=[], refetch} = useQuery({
            queryKey: ['usersData',],
            queryFn: async () => {
                const res = await axiosSecure.get(`/users`)
                return res.data;
            }
          })
          return [usersData,refetch]
};

export default useUsersData;