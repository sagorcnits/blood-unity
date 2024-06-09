import { AiTwotoneMail } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFax, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 my-20 *:border *:cursor-pointer font-open-sans ">
        <div className="flex gap-6 shadow-card items-center p-4 rounded-lg hover:bg-darkGray duration-500 hover:text-white">
          <FaLocationDot className="text-[40px]  *:text-darkRed"></FaLocationDot>
          <div>
            <h1 className="text-[22px] font-bold">Our Location</h1>
            <p>Mirpur 10 </p>
          </div>
        </div>
        <div className="flex gap-6 shadow-card items-center p-4 rounded-lg hover:bg-darkGray duration-500 hover:text-white">
          <BiSolidPhoneCall className="text-[40px]  *:text-darkRed"></BiSolidPhoneCall>
          <div>
            <h1 className="text-[22px] font-bold">Phone Number</h1>
            <p>01852024152</p>
          </div>
        </div>
        <div className="flex gap-6 shadow-card items-center p-4  rounded-lg hover:bg-darkGray duration-500 hover:text-white">
          <AiTwotoneMail className="text-[40px]  *:text-darkRed"></AiTwotoneMail>
          <div>
            <h1 className="text-[22px] font-bold">Mail</h1>
            <p>bloodunity@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-6 shadow-card items-center p-4  rounded-lg hover:bg-darkGray duration-500 hover:text-white">
          <FaFax className="text-[40px] *:text-darkRed "></FaFax>
          <div>
            <h1 className="text-[22px] font-bold">Our Fax</h1>
            <p>1-245-567-2020</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center font-open-sans">
        <div>
          <form className="md:w-[70%] mx-auto">
            <h1 className="text-[30px] font-bold py-4 text-center">
              Send Message
            </h1>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full mt-4 "
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full mt-4 "
            />
            <input
              type="number"
              placeholder="Number"
              className="input input-bordered w-full mt-4 "
            />
            <textarea
              className="w-full resize-none h-[200px] px-4 py-2 focus:outline-none grow border rounded-lg mt-4"
              type="text"
              placeholder="message"
            />
            <button
              onClick={(e) => handleSubmit(e)}
              className="button text-[20px] mt-4 w-full px-7 py-3 text-white font-bold rounded-lg  hover:bg-darkGray duration-500 "
            >
              Send
            </button>
          </form>
        </div>
        <div>
          <img
            className="w-[90%] mx-auto "
            src="https://img.freepik.com/premium-vector/mobile-app-development-concept-people-building-create-software-application-giant-smartphone-flat-illustration_138260-672.jpg?w=740"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
