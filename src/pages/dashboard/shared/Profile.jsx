import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useSelect from "../../../hooks/useSelect";

const Profile = () => {
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

  const submit = (data) => {
    const recipientName = data.recipientName;
    const hospitalName = data.hospital;
    const district = data.district;
    const upazella = data.upazella;
    const date = data.date;
    const time = data.time;
    const address = data.address;
    const whyNeed = data.whyNeed;

    const createRequest = {
      recipientName,
      hospitalName,
      district,
      upazella,
      date,
      time,
      address,
      whyNeed,
    };
  };

  return (
    <div>
      <h1 className="text-center font-open-sans font-bold text-[40px]">
        Profile Your
      </h1>
      <div className="mt-4 px-2 md:px-20 font-open-sans text-paragraph">
        <div className="text-end font-semibold">
          <button className="button">Edit</button>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className="flex gap-4 items-center mt-6">
            <div className="flex-1">
              <label className="font-bold">Name: </label>
              <input
                type="text"
                placeholder="First name"
                className="w-full rounded-md py-3 px-4 focus:outline-none bg-white mt-2"
                value={user?.displayName}
                disabled
                name="name"
              />
            </div>
            <div className="flex-1">
              <label className="font-bold">Email: </label>
              <input
                type="email"
                placeholder="email"
                className="w-full rounded-md py-3 px-4 focus:outline-none bg-white mt-2"
                value={user?.email}
                disabled
                name="email"
              />
            </div>
          </div>
          {/* blood group */}
          <div className="flex gap-4 items-center mt-6">
            <div className="flex-1">
              <label className="font-bold">Blood Group: </label>
              <select
                {...register("blood", { required: true })}
                className="w-full focus:outline-none p-3 rounded-lg cursor-pointer font-open-sans mt-2"
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="font-bold">Image:</label>
              <input
                {...register("image", { required: true })}
                type="file"
                name="image"
                className="w-full rounded-md py-[9px] px-4 focus:outline-none bg-white mt-2 cursor-pointer"
              />
              {errors.image && <p className="text-darkRed">Invalid Image</p>}
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
          <div className="text-center mt-10">
            <button className="button">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
