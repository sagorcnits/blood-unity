import { MdDeleteForever, MdEdit } from "react-icons/md";

const HomeDonor = () => {
  return (
    <div>
      <h1 className="text-center text-[40px] font-open-sans font-bold mt-10">
        Your Recent Donation Request
      </h1>
      <div className="container p-2 mx-auto font-open-sans mt-10">
        <div className="overflow-x-auto rounded-lg">
          <table className="w-full ">
            <thead>
              <tr className="text-left">
                <th className="p-3">recipient name</th>
                <th className="p-3">Location</th>
                <th className="p-3">Date</th>
                <th className="p-3">Time</th>
                <th className="p-3">Donor Information</th>
                <th className="p-3">Edit</th>
                <th className="p-3">Delete</th>
                <th className="p-3">View Details</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 h-[80px] *:text-left">
                <td className="p-3">
                  <p>sagor</p>
                </td>
                <td className="p-3">
                  <p>Komorpur</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                </td>
                <td className="p-3">
                  <p>10am</p>
                </td>
                <td className="p-3">
                  <p>dono@email.com</p>
                </td>

                <td className="p-3">
                  <MdEdit className="text-[30px] cursor-pointer"></MdEdit>
                </td>
                <td className="p-3">
                  <MdDeleteForever className="text-[30px] cursor-pointer text-darkRed"></MdDeleteForever>
                </td>
                <td className="p-3">
                  <button className="table-btn">View Detials</button>
                </td>
                <td className="p-3">
                  <button className="table-btn">inprogress</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeDonor;
