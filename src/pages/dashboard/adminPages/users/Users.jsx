import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import useAxiosPublice from "../../../../hooks/useAxiosPublice";

const Users = () => {
  const axiosPublic = useAxiosPublice();
  const [isFilter, setFilter] = useState(false);
  const [users, setUsers] = useState([]);
  const { data: userData = [], refetch } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      setUsers(res.data)
      return res.data;
    },
  });

  const handleUser = (data, _id) => {
    console.log(data, _id);
    axiosPublic
      .put(`/users?role=${data}&id=${_id}`)
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   handleFilter
  const handleFilter = (value) => {
    console.log(value);
    if (value == "all") {
      return setUsers(userData);
    }
    const filter = userData.filter((item) => item.status == value);
    setUsers(filter);
  };

  return (
    <div className="font-open-sans md:px-10 ">
      <div className="flex justify-between items-center">
        <div className="text-[30px] mt-3 ml-2  flex gap-2 items-center">
          <FaUsers className="text-[#27AE60]"></FaUsers>
          <h1 className="font-bold">Users</h1>
        </div>
        <div
          onClick={() => setFilter(!isFilter)}
          className="mr-3 bg-[#858686] w-[100px] px-3 py-2 text-white font-open-sans rounded-md relative cursor-pointer flex justify-between items-center"
        >
          <p>all</p>
          <IoMdArrowDropdown
            className={`${isFilter && "rotate-180"} duration-500`}
          ></IoMdArrowDropdown>
          {isFilter && (
            <ul className="cursor-pointer py-1 bg-white card-shadow  font-open-sans px-2 rounded-md absolute -bottom-[110px] left-0 right-0 *:py-1 z-50 *:text-center *:bgHover *:text-black">
              <li onClick={() => handleFilter("all")}>all</li>
              <li onClick={() => handleFilter("active")}>active</li>
              <li onClick={() => handleFilter("blocked")}>blocked</li>
            </ul>
          )}
        </div>
      </div>
      <div className="p-2 mx-auto mt-3">
        <div className="bg-white rounded-md w-full">
          <table className="w-full p-6 text-[17px] text-left whitespace-nowrap z-0">
            <thead>
              <tr className="bg-[#d1d0d0]">
                <th className="p-3">No:</th>
                <th className="p-3">Name</th>
                <th className="p-3">Photo</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.slice(0, 4).map((user, id) => {
                const {
                  _id,
                  email,
                  name,
                  blood,
                  district,
                  upazila,
                  image,
                  status,
                  role,
                } = user;
                const statusBtn = status == "active" ? "block" : "unblock";
                return (
                  <tr className="border-b dark:bg-gray-50 dark:border-gray-300 *:px-3 *:py-2 *:h-20">
                    <td>{id + 1}</td>
                    <td>{name}</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={image} alt="user iamge" />
                        </div>
                      </div>
                    </td>
                    <td>{email}</td>
                    <td className="font-semibold">{role}</td>
                    <td
                      className={
                        status == "blocked" ? "text-darkRed" : "text-[#27AE60]"
                      }
                    >
                      {status}
                    </td>
                    <td>
                      <div className="dropdown dropdown-left dropdown-end">
                        <div tabIndex={0} className="cursor-pointer btn">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4 fill-current text-[#27AE60]"
                          >
                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                          </svg>
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52 *:bgHover"
                        >
                          <li onClick={() => handleUser("admin", _id)}>
                            <a>Admin</a>
                          </li>
                          <li onClick={() => handleUser("volunteer", _id)}>
                            <a>Volunteer</a>
                          </li>
                          <li onClick={() => handleUser(statusBtn, _id)}>
                            <a>{statusBtn}</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex  space-x-1 dark:text-gray-800 mt-3 pb-10">
        <button
          title="previous"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          type="button"
          title="Page 1"
          className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-violet-600 dark:border-violet-600"
        >
          1
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100"
          title="Page 2"
        >
          2
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100"
          title="Page 3"
        >
          3
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100"
          title="Page 4"
        >
          4
        </button>
        <button
          title="next"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Users;
