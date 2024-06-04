import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useSelect from "../../hooks/useSelect";
// /^(?=.*[a-z])(?=.*[A-Z])/
const Register = () => {
  const [district, upzella] = useSelect();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div
      className="hero h-screen  overflow-auto"
      style={{
        backgroundImage:
          "url(https://www.continentalbloodbank.com/wp-content/uploads/2021/07/1586903515.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center ">
        <div className="flex flex-col md:w-[600px] p-2 md:p-6 rounded-md bg-[#edeeee] md:font-open-sans">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Create Acount</h1>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(submit)}>
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="px-2 py-3 focus:outline-darkRed rounded-md w-full"
                />
                {errors.email && <p>Invalid Your Email</p>}
              </div>
              <div className="flex-1">
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="name"
                  className="px-2 py-3 focus:outline-darkRed rounded-md w-full"
                />
                {errors.name && <p>Invalid Name</p>}
              </div>
            </div>
            <div className="flex gap-4 ">
              <div className="flex-1">
                <select
                  name="blood"
                  className="w-full focus:outline-none p-3 rounded-lg cursor-pointer font-open-sans"
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
                <select
                  name="district"
                  className="w-full focus:outline-none p-3 rounded-lg"
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
            </div>
            <div>
              <select
                name="district"
                className="w-full focus:outline-none p-3 rounded-lg"
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
            <div className="text-start">
              <input
                {...register("image", { required: true })}
                type="file"
                name="image"
              />
              {errors.image && <p>Please Provide Your Image</p>}
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="password"
                  placeholder="password"
                  className="px-2 py-3 focus:outline-darkRed rounded-md w-full"
                />
              </div>
              <div className="flex-1">
                <input
                  type="password"
                  placeholder="confirm password"
                  className="px-2 py-3 focus:outline-darkRed rounded-md w-full"
                />
              </div>
            </div>
            <div className="space-y-2 ">
              <div>
                <button className="w-full px-8 py-3 font-semibold rounded-md button">
                  Create An Acount
                </button>
              </div>
              <p className="py-3 text-center  text-paragraph text-[17px]">
                Already have an acount?{" "}
                <Link to="/login" className="underline text-darkRed">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
