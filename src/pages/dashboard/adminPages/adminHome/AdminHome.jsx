import { FaUsers } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { MdBloodtype } from "react-icons/md";

const AdminHome = () => {
  return (
    <section className="px-10 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-open-sans">
        <div className="bg-white card-shadow rounded-md p-4  border-b-[8px] border-[#27AE60]">
          <h1 className="text-[17px] font-semibold text-paragraph">Total Users</h1>
          <div className="flex justify-between items-center">
            <h1 className="text-[40px] font-bold text-[#27AE60]">200</h1>
            <FaUsers className="text-[40px] text-[#58D68D]"></FaUsers>
          </div>
        </div>
        <div className="bg-white card-shadow rounded-md p-4  border-b-[8px] border-[#D35400]">
          <h1 className="text-[17px] font-semibold text-paragraph">Total Fundings</h1>
          <div className="flex justify-between items-center">
            <h1 className="text-[40px] font-bold text-[#D35400]">$200</h1>
            <GiMoneyStack className="text-[40px] text-[#D35400]"></GiMoneyStack>
          </div>
        </div>
        <div className="bg-white card-shadow rounded-md p-4  border-b-[8px] border-darkRed">
          <h1 className="text-[17px] font-semibold text-paragraph">Total Donations request</h1>
          <div className="flex justify-between items-center">
            <h1 className="text-[40px] font-bold text-darkRed">$200</h1>
            <MdBloodtype className="text-[40px] text-darkRed"></MdBloodtype>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHome;