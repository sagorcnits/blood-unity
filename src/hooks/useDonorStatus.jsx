import useAxiosSecure from "./useAxiosSecure";
import useDonations from "./useDonations";

const useDonorStatus = () => {
  const [, refetch] = useDonations();
  const axiosSecure = useAxiosSecure();

  const handleStatusDonation = (status, id) => {
    axiosSecure
      .put(`/donations?status=${status}&id=${id}`)
      .then((res) => {
        console.log(res);
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return handleStatusDonation;
};

export default useDonorStatus;
