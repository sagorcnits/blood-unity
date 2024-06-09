import { MdClose, MdDeleteForever, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import useDonations from "../../../../hooks/useDonations";
import useDonorDelete from "../../../../hooks/useDonorDelete";
import useDonorStatus from "../../../../hooks/useDonorStatus";
const HomeDonor = () => {
  const [donations] = useDonations();
  const handleStatusDonation = useDonorStatus();
  const handleDonorDelete = useDonorDelete();
  return (
    <div className="px-3 h-screen">
      <h1 className="text-center text-[25px] md:text-[40px] font-open-sans font-bold mt-10">
        Your Recent Donation Request
      </h1>
      <div className="p-2 mx-auto font-open-sans mt-10">
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
              {donations?.slice(0, 3).map((userItem, id) => {
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
                      <Link to={`/dashboard/details-admin/${_id}`}>
                        <button className="table-btn">Detials</button>
                      </Link>
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
                              onClick={() => handleStatusDonation("done", _id)}
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
      <div className="text-center mt-4 pb-4">
        <Link to="/dashboard/my-donation-requests">
          <button className="button">view my all request</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeDonor;
