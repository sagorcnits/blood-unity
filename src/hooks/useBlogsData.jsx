import { useQuery } from "@tanstack/react-query";
import useAxiosPublice from "./useAxiosPublice";

const useBlogsData = () => {
  const axiosPublic = useAxiosPublice();

  const { data: blogs = [], refetch, isPending } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/blogs");
      return res.data;
    },
  });

  return [blogs, refetch, isPending];
};

export default useBlogsData;
