import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosPublice from "../../hooks/useAxiosPublice";
import useSelect from "../../hooks/useSelect";

// ImageBB key and api
const imageBbKey = import.meta.env.VITE_IMAGE_BB_KEY;
const imageBbApi = `https://api.imgbb.com/1/upload?key=f192ef5d844484b8dafe780a5acb5cbc`;

const Register = () => {
  const [district, upzella] = useSelect();
  const { createUser } = useAuth();
  // const [pass, setPass] = useState(false);
  const axiosPublic = useAxiosPublice();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:{
      upazila:"Debidwar",
      district:"Comilla"
    }
  });
  console.log(errors)
  const submit = async (data) => {
    console.log("ok")
    const imageData = { image: data.image[0]};
    const res = await axiosPublic.post(imageBbApi, imageData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    console.log(res);

    const email = data.email;
    const name = data.name;
    const blood = data.blood;
    const district = data.district;
    const upazila = data.upazila;
    const image = data.image;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    const userInfo = {
      email,
      name,
      blood,
      district,
      upazila,
      image,
      password,
      confirmPassword,
    };

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
        reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
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
      <div className="hero-content  ">
        <div className="flex flex-col md:w-[600px] p-2 md:py-4 md:px-6 rounded-md bg-[#edeeee] md:font-open-sans">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Create Acount</h1>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(submit)}>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="font-bold">Email: </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="px-2 py-3 focus:outline-darkRed rounded-md w-full mt-2"
                  name="email"
                />
                {errors.email && (
                  <p className="text-darkRed">Invalid Your Email</p>
                )}
              </div>
              <div className="flex-1">
                <label className="font-bold">Name: </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="name"
                  className="px-2 py-3 focus:outline-darkRed rounded-md w-full mt-2"
                  name="name"
                />
                {errors.name && <p className="text-darkRed">Invalid Name</p>}
              </div>
            </div>
            <div className="flex gap-4 ">
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
              <div className="flex-1 ">
                <label className="font-bold">District: </label>
                <select
                  {...register("district", { required: true })}
                  className="w-full focus:outline-none p-3 rounded-lg mt-2"
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
              <label className="font-bold">upazila: </label>
              <select
                {...register("upazila", { required: true })}
                name="upazila"
                className="w-full focus:outline-none p-3 rounded-lg mt-2"
              >
                {upzella.map((item, id) => {
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
              {errors.image && (
                <p className="text-darkRed">Please Provide Your Image</p>
              )}
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="font-bold">Password: </label>
                <input
                  {...register("password", {
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])/,
                    },
                    minLength: 6,
                  })}
                  name="password"
                  type="password"
                  placeholder="password"
                  className="px-2 py-3 focus:outline-darkRed rounded-md w-full"
                />
                {errors.password && (
                  <p className="text-darkRed">Password Invalid</p>
                )}
              </div>
              <div className="flex-1">
                <label className="font-bold">Confirm Password: </label>
                <input
                  {...register("confirmPassword", { required: true })}
                  name="confirmPassword"
                  type="password"
                  placeholder="confirm password"
                  className="px-2 py-3 focus:outline-darkRed rounded-md w-full"
                />
                {errors.confirmPassword && (
                  <p className="text-darkRed">Password Invalid</p>
                )}
              </div>
            </div>
            <div className="space-y-2 mt-6">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md button"
                >
                  Create An Acount
                </button>
              </div>
              <p className="py-2 text-center  text-paragraph text-[17px]">
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
