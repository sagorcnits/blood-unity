import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { LoginUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    const email = data.email;
    const password = data.password;
    LoginUser(email, password)
      .then((res) => {
        const user = res.user;
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
          "url(https://t4.ftcdn.net/jpg/02/21/47/99/360_F_221479946_2yUmWRmVPBka6d4zcXbBhJbRra8WcpQV.jpg)",
      }}
    >
      <div className="flex justify-center items-center h-screen px-2 md:px-0">
        <div className="flex flex-col w-[343px] md:w-[450px] p-6 rounded-md bg-[#edeeee] font-open-sans">
          <div className="mb-8 text-center ">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm text-paragraph">
              Sign in to access your account
            </p>
          </div>
          <form className="space-y-12 " onSubmit={handleSubmit(submit)}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-paragraph"
                >
                  Email address
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-3 py-3 border rounded-md focus:outline-darkRed"
                />
                {errors.email && <p>Invalid Your Email</p>}
              </div>
              <div>
                <div className="flex justify-between mb-2 text-paragraph">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <a className="text-xs text-green-600 cursor-pointer hover:underline">
                    Forgot password?
                  </a>
                </div>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="w-full px-3 py-3 border rounded-md focus:outline-darkRed"
                />
                {errors.password && <p>Invalid Your Password</p>}
              </div>
            </div>

            <div className="space-y-2 ">
              <div>
                <button className="w-full px-8 py-3 font-semibold rounded-md button">
                  Sign in
                </button>
              </div>

              <p className="text-[18px] text-center sm:px-6 text-paragraph  py-4">
                Don't have an account?{" "}
                <Link to="/register" className="underline text-darkRed">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
