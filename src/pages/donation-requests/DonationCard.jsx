import { IoLocationSharp } from "react-icons/io5";
import { MdBloodtype } from "react-icons/md";
import { Link } from "react-router-dom";

const DonationCard = ({ item }) => {
  // console.log(item);
  const { _id, recipientName, address, date, time } = item;
  return (
    <div className="flex  gap-4 shadow-card items-center p-4 rounded-lg hover:bg-darkGray duration-500 hover:text-white border cursor-pointer">
      <MdBloodtype className="text-darkRed text-[70px]"></MdBloodtype>
      <div className="flex-1">
        <h1 className="text-[22px] font-bold">{recipientName}</h1>
        <div className="flex items-center gap-2 py-2">
          <IoLocationSharp className="text-[20px] text-[#58D68D]"></IoLocationSharp>
          <p>{address}</p>
        </div>
        <div className="flex justify-between items-center gap-6">
          <h1>
            <span className="font-bold">Date:</span> {date}
          </h1>
          <h1>
            <span className="font-bold">Time:</span> {time}
          </h1>
        </div>
        <div className="mt-4 flex justify-end">
        <Link to={`/details/${_id}`}><button className="button bg-[#227545] px-3">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
