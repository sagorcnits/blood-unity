import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://blood-unity-server.vercel.app",
});

const useAxiosPublice = () => {
  return axiosPublic;
};

export default useAxiosPublice;
