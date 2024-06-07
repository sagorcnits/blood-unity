import { useQuery } from '@tanstack/react-query';
import useAxiosPublice from './useAxiosPublice';

const useUsersData = () => {
    const axiosPublic = useAxiosPublice()
        const { data:usersData=[], refetch} = useQuery({
            queryKey: ['usersData',],
            queryFn: async () => {
                const res = await axiosPublic.get(`/users`)
                return res.data;
            }
          })
          return [usersData,refetch]
};

export default useUsersData;