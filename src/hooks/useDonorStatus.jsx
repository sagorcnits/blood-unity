import useAxiosPublice from "./useAxiosPublice";
import useDonations from "./useDonations";

const useDonorStatus = () => {
    const [,refetch] = useDonations();
    const axiosPublic = useAxiosPublice();

    const handleStatusDonation = (status, id) => {
        axiosPublic
          .put(`/donations?status=${status}&id=${id}`)
          .then((res) => {
            console.log(res);
            refetch()
          })
          .catch((error) => {
            console.log(error);
          });
      }

      return handleStatusDonation;
};

export default useDonorStatus;