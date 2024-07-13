import { FaUsers } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { MdBloodtype } from "react-icons/md";
import usePayments from "../../../../hooks/usePayments";
import useUserDonations from "../../../../hooks/useUserDonations";
import useUsersData from "../../../../hooks/useUsersData";

const AdminHome = () => {
  const [usersData] = useUsersData();
  const [payments] = usePayments();
  // const [userDonations] = useUsersDonations()
  const totalFund = payments.reduce((prev, payment) => prev + payment.price, 0);
  const [userDonations] = useUserDonations();
  const filterDonors = usersData.filter((donor) => donor.role == "donor");

  // console.log(totalFund)
  return (
    <main className="px-10 mt-10 h-screen">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 font-open-sans">
        <div className="bg-white card-shadow rounded-md p-4  border-b-[8px] border-[#27AE60]">
          <h1 className="text-[17px] font-semibold text-paragraph">
            Total Users
          </h1>
          <div className="flex justify-between items-center">
            <h1 className="text-[40px] font-bold text-[#27AE60]">
              {filterDonors?.length}
            </h1>
            <FaUsers className="text-[40px] text-[#58D68D]"></FaUsers>
          </div>
        </div>
        <div className="bg-white card-shadow rounded-md p-4  border-b-[8px] border-[#D35400]">
          <h1 className="text-[17px] font-semibold text-paragraph">
            Total Fundings
          </h1>
          <div className="flex justify-between items-center">
            <h1 className="text-[40px] font-bold text-[#D35400]">
              ${totalFund}
            </h1>
            <GiMoneyStack className="text-[40px] text-[#D35400]"></GiMoneyStack>
          </div>
        </div>
        <div className="bg-white card-shadow rounded-md p-4  border-b-[8px] border-darkRed">
          <h1 className="text-[17px] font-semibold text-paragraph">
            Total Donations request
          </h1>
          <div className="flex justify-between items-center">
            <h1 className="text-[40px] font-bold text-darkRed">
              {userDonations.length}
            </h1>
            <MdBloodtype className="text-[40px] text-darkRed"></MdBloodtype>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-4 gap-6  *:p-10 mt-10 *:card-shadow *:rounded-md *:h-[270px]">
        <div className="col-span-2">
          <h1>Comming Soon Chart 1</h1>
        </div>
        <div className="col-span-1">
          <h1>Comming Soon Chart 2</h1>
        </div>
        <div className="col-span-1">
          <h1>Comming Soon Chart 3</h1>
        </div>
      </section>
    </main>
  );
};

export default AdminHome;
