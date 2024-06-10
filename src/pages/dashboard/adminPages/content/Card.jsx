import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useUser from "../../../../hooks/useUser";

const Card = ({ refetch, blog }) => {
  const [users] = useUser();
  const { _id, title, thumbnail, status } = blog;
  const axiosSecure = useAxiosSecure()

  const handleBlogStatus = () => {
    axiosSecure
      .put(`/blogs`, blog)
      .then((res) => {
        const data = res.data;
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: `${
              status == "draft"
                ? "Publish your blog"
                : "Canceled your publish blog"
            }`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteBlog = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#27B462",
      cancelButtonColor: "#df1e26",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/blogs/${_id}`)
          .then((res) => {
            const data = res.data;
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
  };

  return (
    <div className="p-3 card-shadow border h-[300px] rounded-md bg-white  font-open-sans">
      <div className="h-[150px] overflow-hidden rounded-md">
        <img src={thumbnail} alt="thumbnil" />
      </div>
      <div className="flex justify-between items-center py-4">
        <h1 className="py-3">{title?.slice(0,20)}</h1>
        {users?.role == "admin" && (
          <button
            onClick={handleDeleteBlog}
            className="button px-3 text-[20px]"
          >
            <MdDeleteForever></MdDeleteForever>
          </button>
        )}
      </div>
      <div className="flex justify-between items-center ">
        <span
          className={
            status == "published"
              ? "font-bold text-[#27B462]"
              : "text-darkRed font-bold"
          }
        >
          {status}
        </span>
        {users?.role == "admin" && (
          <button
            onClick={handleBlogStatus}
            className="bg-[#2e794d] px-4 py-2 rounded-md text-white button"
          >
            {status == "draft" ? "published" : "unpublished"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
