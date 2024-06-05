import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import useSelect from "../../../../hooks/useSelect";
const CreateDonation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const [district, upazella] = useSelect();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      upazila: "Debidwar",
      district: "Comilla",
    },
  });

  return (
    <div className="mt-10 px-20 font-open-sans text-paragraph">
      <form>
        <div className="flex gap-4 items-center mt-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="First name"
              className="w-full rounded-md py-3 px-4 focus:outline-none bg-white"
              value={user?.displayName}
              disabled
            />
          </div>
          <div className="flex-1">
            <input
              type="email"
              placeholder="email"
              className="w-full rounded-md py-3 px-4 focus:outline-none bg-white"
              value={user?.email}
              disabled
            />
          </div>
        </div>
        <div className="flex gap-4 items-center mt-6">
          <div className="flex-1">
            <label className="font-bold">Recipient Name:</label>
            <input
              type="text"
              placeholder="Recipient Name"
              className="w-full rounded-md py-3 px-4 focus:outline-[#548568] mt-2"
            />
          </div>
          <div className="flex-1">
            <label className="font-bold">Hospital Name:</label>
            <input
              type="text"
              placeholder="Hospital Name"
              className="w-full rounded-md py-3 px-4 focus:outline-[#548568] mt-2"
            />
          </div>
        </div>
        <div className="flex gap-4 items-center mt-6">
          <div className="flex-1">
            <label className="font-bold">District Name:</label>
            <select
              {...register("district", { required: true })}
              name="district"
              className="w-full focus:outline-none py-3 px-4 rounded-lg mt-2"
            >
              {district.map((item, id) => {
                return (
                  <option key={id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex-1">
            <label className="font-bold">Upazila Name:</label>
            <select
              {...register("upazila", { required: true })}
              name="upazila"
              className="w-full focus:outline-none py-3 px-4 rounded-lg mt-2"
            >
              {upazella.map((item, id) => {
                return (
                  <option key={id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-6">
          <div className="flex-1">
            <label className="font-bold ">Date:</label><br />
            <div className="w-full bg-white mt-2 rounded-md px-4 py-3">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className=" focus:outline-none w-[350px]"
              placeholderText="Date"
            />
            </div>
          </div>
          <div className="flex-1">
            <label className="font-bold">Time:</label>
            <input
              type="text"
              placeholder="time"
              className="w-full rounded-md py-3 px-4 focus:outline-[#548568] mt-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateDonation;

/*
Requester Name (read-only)
Requester Email (read-only)
Recipient Name
Recipient District (select option)
Recipient Upazila (select option)
Hospital Name
Full Address Line
Donation Date
Donation Time
Request Message
Request Button
*/
