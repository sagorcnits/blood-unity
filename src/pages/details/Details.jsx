import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useState } from "react";
import { MdBloodtype } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosPublice from "../../hooks/useAxiosPublice";
const Details = () => {
  const axiosPublic = useAxiosPublice();
  const data = useLoaderData();
  const { user } = useAuth();
  let [isOpen, setIsOpen] = useState(false);
  const [load, setLoad] = useState(true);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const handleConfirmDonate = (e) => {
    e.preventDefault();
    const status = "inprogress";
    axiosPublic
      .put(`/donations?status=${status}&id=${data._id}`)
      .then((res) => {
        const data = res.data;

        setLoad(!load);
        Swal.fire({
          icon: "success",
          title: "Complate Your Donatation. Thanks for Donation",
          showConfirmButton: false,
          timer: 1500,
        });

        close();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-white md:w-[80%] mx-auto  p-8 mt-32 mb-10 font-open-sans card-shadow">
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
      </div>
      <div className="text-center mt-8">
        <button onClick={open} className="button">
          Donate
        </button>
      </div>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild enter="ease-out duration-300">
                <DialogPanel className="w-full max-w-md rounded-xl  p-6 bg-black">
                  <DialogTitle
                    as="h3"
                    className="text-darkRed font-medium  text-center text-[24px]"
                  >
                    <MdBloodtype className="text-darkRed text-[70px] mx-auto"></MdBloodtype>
                  </DialogTitle>
                  <form className="p-4">
                    <div>
                      <div>
                        <input
                          type="text"
                          placeholder="First name"
                          className="w-full rounded-md py-3 px-4 focus:outline-none bg-white mt-6"
                          value={user?.displayName}
                          disabled
                          name="name"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="email"
                          className="w-full rounded-md py-3 px-4 focus:outline-none bg-white mt-6"
                          value={user?.email}
                          disabled
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="text-center mt-8">
                      <button onClick={handleConfirmDonate} className="button">
                        Confirm Donate
                      </button>
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Details;
