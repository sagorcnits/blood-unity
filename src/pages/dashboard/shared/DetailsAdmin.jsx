import { MdBloodtype } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const DetailsAdmin = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div className="bg-white md:w-[80%] mx-auto  p-8 mt-4 mb-10 font-open-sans">
      <MdBloodtype className="text-darkRed text-[70px] mx-auto"></MdBloodtype>
      <div className="text-center flex flex-col gap-4 md:*:flex *:justify-between *:items-center md:*:w-[80%] *:mx-auto *:py-4 *:border-b *:pb-4 *:space-y-4 ">
        <div>
          <p>
            <span className="font-bold">Name: </span>
            {data.name}
          </p>
          <p>
            <span className="font-bold">Email: </span>
            {data.email}
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">Recipient Name: </span>
            {data.recipientName}
          </p>
          <p>
            <span className="font-bold">Hospital Name: </span>
            {data.hospitalName}
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">District: </span>
            {data.district}
          </p>
          <p>
            <span className="font-bold">Upazila: </span>
            {data.upazila}
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">Date: </span>
            {data.date}
          </p>
          <p>
            <span className="font-bold">Time: </span>
            {data.time}
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">Address: </span>
            <br />
            {data.address}"Recipient" বা "প্রাপক" বলতে সেই ব্যক্তিকে বোঝানো হয়
            যিনি কোন কিছু গ্রহণ করেন। রক্তদান অনুরোধের ক্ষেত্রে, "recipient" হল
            সেই ব্যক্তি যিনি রক্ত গ্রহণ করবেন। তিনি রক্তের প্রাপক হিসেবে পরিচিত।
          </p>
          <p>
            <span className="font-bold">Why need: </span>
            <br />
            {data.whyNeed}"Recipient" বা "প্রাপক" বলতে সেই ব্যক্তিকে বোঝানো হয়
            যিনি কোন কিছু গ্রহণ করেন। রক্তদান অনুরোধের ক্ষেত্রে, "recipient" হল
            সেই ব্যক্তি যিনি রক্ত গ্রহণ করবেন। তিনি রক্তের প্রাপক হিসেবে পরিচিত।
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">Status: </span>
            {data.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsAdmin;
