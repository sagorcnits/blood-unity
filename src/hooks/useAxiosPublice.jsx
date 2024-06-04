import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosPublice = () => {
  return axiosPublic;
};

export default useAxiosPublice;
