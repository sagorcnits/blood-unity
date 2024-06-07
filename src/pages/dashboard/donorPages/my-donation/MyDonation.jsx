import { MdClose, MdDeleteForever, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import useDonations from "../../../../hooks/useDonations";
import useDonorDelete from "../../../../hooks/useDonorDelete";
import useDonorStatus from "../../../../hooks/useDonorStatus";
const MyDonation = () => {
  const [donations] = useDonations();
  const handleStatusDonation = useDonorStatus();
  const handleDonorDelete = useDonorDelete();
  return (
    <div className="px-3">
      <h1 className="text-center text-[25px] md:text-[40px] font-open-sans font-bold mt-4">
        My Donation Request page
      </h1>
      {donations.length > 0 ? (
        <div className="p-2 mx-auto font-open-sans mt-4">
          <div className="overflow-auto rounded-lg w-full">
            <table className="w-full">
              <thead>
                <tr className="text-left text-[16px] bg-[#d1d0d0]">
                  <th className="p-3">Recipient</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Time</th>
                  <th className="p-3">Donor Information</th>
                  <th className="p-3">Edit</th>
                  <th className="p-3">Delete</th>
                  <th className="p-3">Details</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {donations?.slice(0, 4).map((userItem, id) => {
                  const {
                    _id,
                    name,
                    email,
                    recipientName,
                    hospitalName,
                    district,
                    upazila,
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
                        <p>{district}</p>
                        <p>{upazila}</p>
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
                        <button className="table-btn">Detials</button>
                      </td>
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
                          {status == "inprogress" ? (
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
                          ) : status == "pending" ? (
                            <button
                              onClick={() =>
                                handleStatusDonation("inprogress", _id)
                              }
                              className="text-green-500 text-[20px]"
                            >
                              ✔
                            </button>
                          ) : (
                            ""
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
      ) : (
        <h1 className="text-center text-[25px] md:text-[40px] font-open-sans font-bold mt-10">
          No Data
        </h1>
      )}
    </div>
  );
};

export default MyDonation;
