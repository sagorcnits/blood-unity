import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const DonationEdit = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const donationEdit = useLoaderData();
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = (data) => {
    const recipientName = data.recipientName;
    const hospitalName = data.hospital;
    const district = data.district;
    const upazila = data.upazila;
    const date = data.date;
    const time = data.time;
    const address = data.address;
    const whyNeed = data.whyNeed;

    const updateDonations = {
      recipientName,
      hospitalName,
      district,
      upazila,
      date,
      time,
      address,
      whyNeed,
    };

    // console.log(updateDonations);
    axiosSecure
      .put(`/donations/${id}`, updateDonations)
      .then((res) => {
        // console.log(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-10 px-2 md:px-20 font-open-sans text-paragraph">
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex gap-4 items-center mt-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="First name"
              className="w-full rounded-md py-3 px-4 focus:outline-none bg-white"
              value={donationEdit?.name}
              disabled
              name="name"
            />
          </div>
          <div className="flex-1">
            <input
              type="email"
              placeholder="email"
              className="w-full rounded-md py-3 px-4 focus:outline-none bg-white"
              value={donationEdit?.email}
              disabled
              name="email"
            />
          </div>
        </div>
        {/* hospital name */}
        <div className="flex gap-4 items-center mt-6">
          <div className="flex-1">
            <label className="font-bold">Recipient Name:</label>
            <input
              {...register("recipientName", { required: true })}
              type="text"
              placeholder="Recipient Name"
              className="w-full rounded-md py-3 px-4 focus:outline-[#548568] mt-2"
              name="recipientName"
              defaultValue={donationEdit.recipientName}
            />
            {errors.recipientName && (
              <p className="text-darkRed">Invalid recipientName</p>
            )}
          </div>
          <div className="flex-1">
            <label className="font-bold">Hospital Name:</label>
            <input
              {...register("hospital", { required: true })}
              type="text"
              placeholder="Hospital Name"
              className="w-full rounded-md py-3 px-4 focus:outline-[#548568] mt-2"
              name="hospital"
              defaultValue={donationEdit.hospitalName}
            />
            {errors.hospital && (
              <p className="text-darkRed">Invalid hospital Name</p>
            )}
          </div>
        </div>
        {/* distrit and upazila*/}
        <div className="flex gap-4 items-center mt-6">
          <div className="flex-1">
            <label className="font-bold">district:</label>
            <input
              {...register("district", { required: true })}
              type="text"
              placeholder="Recipient Name"
              className="w-full rounded-md py-3 px-4 focus:outline-[#548568] mt-2"
              name="district"
              defaultValue={donationEdit.district}
            />
            {errors.district && (
              <p className="text-darkRed">Invalid district name</p>
            )}
          </div>
          <div className="flex-1">
            <label className="font-bold">upazila:</label>
            <input
              {...register("upazila", { required: true })}
              type="text"
              placeholder="Hospital Name"
              className="w-full rounded-md py-3 px-4 focus:outline-[#548568] mt-2"
              name="upazila"
              defaultValue={donationEdit.upazila}
            />
            {errors.upazila && (
              <p className="text-darkRed">Invalid upazila Name</p>
            )}
          </div>
        </div>
        {/* date nad time  */}
        <div className="flex gap-4 items-center mt-6">
          <div className="flex-1">
            <label className="font-bold ">Date:</label>
            <input
              {...register("date", { required: true })}
              type="date"
              placeholder="time"
              className="w-full rounded-md py-3 px-4 focus:outline-[#548568] mt-2"
              name="date"
              defaultValue={donationEdit.date}
            />
            {errors.date && <p className="text-darkRed">Invalid date</p>}
          </div>
          <div className="flex-1">
            <label className="font-bold">Time:</label>
            <input
              {...register("time", { required: true })}
              type="time"
              placeholder="time"
              className="w-full rounded-md py-3 px-4 focus:outline-[#548568] mt-2"
              name="time"
              defaultValue={donationEdit.time}
            />
            {errors.time && <p className="text-darkRed">Invalid time</p>}
          </div>
        </div>
        {/* message and address */}
        <div className="flex flex-col md:flex-row gap-4 items-center mt-6">
          <div className="flex-1 w-full">
            <textarea
              {...register("address", { required: true })}
              placeholder="full address"
              className="resize-none h-[160px] w-full rounded-md py-3 px-4 focus:outline-[#548568] mt-2"
              name="address"
              defaultValue={donationEdit.address}
            ></textarea>
            {errors.address && <p className="text-darkRed">Invalid Adress</p>}
          </div>
          <div className="flex-1 w-full">
            <textarea
              {...register("whyNeed", { required: true })}
              placeholder="why he need blood"
              className="resize-none h-[160px] w-full rounded-md py-3 px-4 focus:outline-[#548568] mt-2"
              defaultValue={donationEdit.whyNeed}
              name="whyNeed"
            ></textarea>
            {errors.whyNeed && <p className="text-darkRed">Invalid whyNeed</p>}
          </div>
        </div>
        <div className="text-center mt-8 pb-8">
          <button className="button">Update Donation</button>
        </div>
      </form>
    </div>
  );
};

export default DonationEdit;
