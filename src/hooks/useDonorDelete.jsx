import Swal from "sweetalert2";
import useAxiosSecure from "./useAxiosSecure";
import useDonations from "./useDonations";

const useDonorDelete = () => {
  const [, refetch] = useDonations();
  const axiosSecure = useAxiosSecure();

  const handleDonorDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/donations/${id}`)
          .then((res) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
    // console.log(status, id);
  };

  return handleDonorDelete;
};

export default useDonorDelete;
