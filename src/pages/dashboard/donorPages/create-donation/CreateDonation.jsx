import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useSelect from "../../../../hooks/useSelect";
import useUser from "../../../../hooks/useUser";

const CreateDonation = () => {
  const [users] = useUser()
  const { user } = useAuth();
  const [districtSelect, upazilaSelect] = useSelect();
  const axiosSecure = useAxiosSecure()
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

// console.log(users)

  const submit = (data) => {
    const name = user?.displayName;
    const email = user?.email;
    const recipientName = data.recipientName;
    const hospitalName = data.hospital;
    const district = data.district;
    const upazila = data.upazila;
    const date = data.date;
    const time = data.time;
    const address = data.address;
    const whyNeed = data.whyNeed;

    const createRequest = {
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
      status:"pending"
    };

    axiosSecure.post("/donations", createRequest)
    .then(res => {
      const data = res.data;
      // console.log(data)
      if(data.insertedId){
        Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        reset()
      }
    }).catch(error => {
      console.log(error)
    })


    // console.log(createRequest);
  };
  return (
    <div className={"mt-10 px-2 md:px-20 font-open-sans text-paragraph h-screen"}>
      {users?.status == "active" ? <form onSubmit={handleSubmit(submit)}>
        <div className="flex gap-4 items-center mt-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="First name"
              className="w-full rounded-md py-3 px-4 focus:outline-none bg-white"
              value={user?.displayName}
              disabled
              name="name"
            />
          </div>
          <div className="flex-1">
            <input
              type="email"
              placeholder="email"
              className="w-full rounded-md py-3 px-4 focus:outline-none bg-white"
              value={user?.email}
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
            />
            {errors.hospital && (
              <p className="text-darkRed">Invalid hospital Name</p>
            )}
          </div>
        </div>
        {/* district and upazella */}
        <div className="flex gap-4 items-center mt-6">
          <div className="flex-1">
            <label className="font-bold">District Name:</label>
            <select
              {...register("district", { required: true })}
              name="district"
              className="w-full focus:outline-none py-3 px-4 rounded-lg mt-2"
            >
              {districtSelect.map((item, id) => {
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
              {upazilaSelect.map((item, id) => {
                return (
                  <option key={id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
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
            />
            {errors.time && <p className="text-darkRed">Invalid time</p>}
          </div>
          <div className="flex-1">
            <label className="font-bold">Time:</label>
            <input
              {...register("time", { required: true })}
              type="time"
              placeholder="time"
              className="w-full rounded-md py-3 px-4 focus:outline-[#548568] mt-2"
              name="time"
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
            ></textarea>
            {errors.address && <p className="text-darkRed">Invalid Adress</p>}
          </div>
          <div className="flex-1 w-full">
            <textarea
              {...register("whyNeed", { required: true })}
              placeholder="why he need blood"
              className="resize-none h-[160px] w-full rounded-md py-3 px-4 focus:outline-[#548568] mt-2"
            ></textarea>
            {errors.whyNeed && <p className="text-darkRed">Invalid whyNeed</p>}
          </div>
        </div>
        <div className="text-center mt-8 pb-8">
          <button className="button">Request Donation</button>
        </div>
      </form> : <h1 className="text-center text-[30px]">Sorry You are blocked</h1>}
    </div>
  );
};

export default CreateDonation;


