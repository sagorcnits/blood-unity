import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
  baseURL: "https://blood-unity-server.vercel.app",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { LogOutUser } = useAuth();

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");

      config.headers.authorization = `Bearer ${token}`;

      return config;
    },
    function (error) {
      console.log(error);
      return Promise.reject(error);
    }
  );
  // respone intercepter
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      const status = error.response.status;
      if (status == 401 || status == 403) {
        // await LogOutUser();
        // console.log("hello");
        // <Navigate to="/login"></Navigate>;
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
