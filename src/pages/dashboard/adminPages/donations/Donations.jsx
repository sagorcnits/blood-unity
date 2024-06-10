import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdClose, MdDeleteForever, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublice from "../../../../hooks/useAxiosPublice";
import useUser from "../../../../hooks/useUser";
import useUserDonations from "../../../../hooks/useUserDonations";

const Donations = () => {
  const [userDonations] = useUserDonations();
  const [users] = useUser();
  const [donationsData, setDonationsData] = useState([]);
  const axiosPublic = useAxiosPublice();
  const [isFilter, setFilter] = useState(false);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const numberPages = Math.ceil(userDonations.length / itemPerPage);
  const totalbtn = [...Array(numberPages).keys()];

  const { data: userDonationsData = [], refetch } = useQuery({
    queryKey: ["userDonationsData", itemPerPage, currentPage],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/donations?page=${currentPage - 1}&size=${itemPerPage}`
      );
      setDonationsData(res.data);
      return res.data;
    },
  });

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
        axiosPublic
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

  const handleStatusDonation = (status, id) => {
    axiosPublic
      .put(`/donations?status=${status}&id=${id}`)
      .then((res) => {
        console.log(res);
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFilter = (value) => {
    const filter = userDonationsData.filter((item) => item.status == value);
    setDonationsData(filter);
  };

  const handleChangeItemPage = (e) => {
    refetch();
    const val = parseInt(e.target.value);
    setItemPerPage(val);
  };

  return (
    <div className="px-3">
      <div className="flex justify-between items-center mt-4">
        <div className="text-[30px] mt-3 ml-2">
          <h1 className="font-bold">Donation Request page</h1>
        </div>
        <div
          onClick={() => setFilter(!isFilter)}
          className="mr-3 bg-[#858686] w-[100px] px-3 py-2 text-white font-open-sans rounded-md relative cursor-pointer flex justify-between items-center"
        >
          <p>filter</p>
          <IoMdArrowDropdown
            className={`${isFilter && "rotate-180"} duration-500`}
          ></IoMdArrowDropdown>
          {isFilter && (
            <ul className="cursor-pointer py-1 bg-white card-shadow  font-open-sans px-2 rounded-md absolute -bottom-[145px] left-0 right-0 *:py-1 z-50 *:text-center *:bgHover *:text-black ">
              <li onClick={() => handleFilter("pending")}>pending</li>
              <li onClick={() => handleFilter("inprogress")}>inprogress</li>
              <li onClick={() => handleFilter("canceled")}>canceled</li>
              <li onClick={() => handleFilter("done")}>done</li>
            </ul>
          )}
        </div>
      </div>
      {donationsData.length > 0 ? (
        <>
          <div className="p-2 mx-auto font-open-sans mt-3 ">
            <div className="overflow-auto rounded-lg w-full">
              <table className="w-full ">
                <thead>
                  <tr className="text-left text-[16px] bg-[#d1d0d0]">
                    <th className="p-3">Recipient</th>
                    <th className="p-3">Location</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Time</th>
                    <th className="p-3">Donor Information</th>
                    {users?.role == "admin" && (
                      <>
                        <th className="p-3">Edit</th>
                        <th className="p-3">Delete</th>
                        <th className="p-3">Details</th>
                      </>
                    )}
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {donationsData?.map((userItem, id) => {
                    const {
                      _id,
                      name,
                      email,
                      recipientName,
                      hospitalName,
                      district,
                      date,
                      time,
                      address,
                      whyNeed,
                      status,
                    } = userItem;
                    return (
                      <tr
                        key={id}
                        className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 h-[80px] *:text-left "
                      >
                        <td className="p-3">
                          <p className="font-bold">{recipientName}</p>
                        </td>
                        <td className="p-3">
                          <p>{address}</p>
                        </td>
                        <td className="p-3">
                          <p>{date}</p>
                        </td>
                        <td className="p-3">
                          <p>{time}</p>
                        </td>
                        {status == "inprogress" ? (
                          <td className="p-3">
                            <p>{name}</p>
                            <p>{email}</p>
                          </td>
                        ) : (
                          <td></td>
                        )}

                        {users?.role == "admin" && (
                          <>
                            <td className="p-3">
                              <Link to={`/dashboard/donation-edit/${_id}`}>
                                <MdEdit className="text-[30px] cursor-pointer"></MdEdit>
                              </Link>
                            </td>
                            <td className="p-3">
                              <MdDeleteForever
                                onClick={() => handleDonorDelete(_id)}
                                className="text-[30px] cursor-pointer text-darkRed"
                              ></MdDeleteForever>
                            </td>
                            <td className="p-3">
                              <Link to={`/dashboard/details-admin/${_id}`}>
                                <button className="table-btn">Detials</button>
                              </Link>
                            </td>
                          </>
                        )}
                        <td className="p-3 ">
                          <div className="flex items-center gap-2">
                            <p
                              className={`${
                                status == "pending"
                                  ? "text-[#BA4A00] font-bold"
                                  : status == "inprogress"
                                  ? "text-[#17a2b8] font-bold"
                                  : status == "done"
                                  ? "text-green-500 font-bold"
                                  : "text-darkRed font-bold"
                              }`}
                            >
                              {status}
                            </p>
                            {status == "inprogress" && (
                              <>
                                <button
                                  onClick={() =>
                                    handleStatusDonation("canceled", _id)
                                  }
                                  className="text-darkRed text-[20px]"
                                >
                                  <MdClose></MdClose>
                                </button>
                                <button
                                  onClick={() =>
                                    handleStatusDonation("done", _id)
                                  }
                                  className="text-green-500 text-[20px]"
                                >
                                  ✔
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {donationsData.length > 0 && (
            <div className="flex gap-2 space-x-1 dark:text-gray-800 mt-3 pb-10 ml-2">
              {totalbtn.map((item, id) => {
                return (
                  <button
                    onClick={() => setCurrentPage(item + 1)}
                    key={id}
                    type="button"
                    title="Page 1"
                    className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md ${
                      currentPage == item + 1 ? "selected" : ""
                    }`}
                  >
                    {item + 1}
                  </button>
                );
              })}

              <select
                defaultValue={itemPerPage}
                onChange={handleChangeItemPage}
                className="cursor-pointer text-sm font-semibold border rounded"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          )}
        </>
      ) : (
        <h1 className="text-center text-[25px] md:text-[40px] font-open-sans font-bold mt-10">
          No Data
        </h1>
      )}
    </div>
  );
};

export default Donations;
