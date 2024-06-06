import { MdClose, MdDeleteForever, MdEdit } from "react-icons/md";
import useDonations from "../../../../hooks/useDonations";
const MyDonation = () => {
  const [donations] = useDonations();

  return (
    <div className="px-3">
      <h1 className="text-center text-[25px] md:text-[40px] font-open-sans font-bold mt-10">
        My Donation Request page
      </h1>
      {donations.length > 0 ? (
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
                {donations?.map((userItem, id) => {
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
      ) : (
        <h1 className="text-center text-[25px] md:text-[40px] font-open-sans font-bold mt-10">
          No Data
        </h1>
      )}
    </div>
  );
};

export default MyDonation;
