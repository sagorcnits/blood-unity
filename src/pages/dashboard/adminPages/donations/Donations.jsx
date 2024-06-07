import { MdClose, MdDeleteForever, MdEdit } from "react-icons/md";
import useUsersDonations from "../../../../hooks/useUsersDonations";

const Donations = () => {
  const [userDonations] = useUsersDonations();

  return (
    <div className="px-3">
      <h1 className="ml-3 text-[25px] md:text-[30px] font-open-sans font-bold mt-3">
        All User Donation Request
      </h1>
      {userDonations.length > 0 ? (
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
                    <th className="p-3">Edit</th>
                    <th className="p-3">Delete</th>
                    <th className="p-3">Details</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {userDonations?.slice(0,4).map((userItem, id) => {
                    const {
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
                        <td className="p-3">
                          <p>{email}</p>
                        </td>

                        <td className="p-3">
                          <MdEdit className="text-[30px] cursor-pointer"></MdEdit>
                        </td>
                        <td className="p-3">
                          <MdDeleteForever className="text-[30px] cursor-pointer text-darkRed"></MdDeleteForever>
                        </td>
                        <td className="p-3">
                          <button className="table-btn">Detials</button>
                        </td>
                        <td className="p-3 ">
                          <div className="flex items-center gap-2">
                            <button className="table-btn">{status}</button>
                            <button className="text-darkRed text-[20px]">
                              <MdClose></MdClose>
                            </button>
                            <button className="text-green-500 text-[20px]">
                              ✔
                            </button>
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
