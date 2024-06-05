import { BiSolidDonateBlood } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { MdCreate, MdEmail } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";

const Dashboard = () => {
  const admin = true;

  return (
    <div className="flex gap-2  font-open-sans">
      <div className="h-screen  bg-white w-[250px] fixed hidden lg:block">
        <div className="font-open-sans mx-auto w-10/12 py-4 border-b border-dashed">
          <a className="text-2xl md:text-3xl  font-bold ">
            Blood<span className="text-[#DF1E26]">Unity</span>
          </a>
        </div>
        <ul className="*:mt-4 border-b pb-6 border-dashed p-3">
          {admin ? (
            <>
              {" "}
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "dashbord-active sideBar-nav"
                      : "sideBar-nav"
                  }
                  to="/dashboard/home"
                >
                  <FaHome className="text-[30px]"></FaHome>
                  <span>Donor Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "dashbord-active  sideBar-nav"
                      : "sideBar-nav"
                  }
                  to="/dashboard/my-donation-requests"
                >
                  <BiSolidDonateBlood className="text-[30px]"></BiSolidDonateBlood>
                  <span>My Donation</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending flex"
                      : isActive
                      ? "dashbord-active sideBar-nav"
                      : "sideBar-nav"
                  }
                  to="/dashboard/create-donation-request"
                >
                  <MdCreate className="text-[30px]"></MdCreate>
                  <span> Create donation</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending flex"
                      : isActive
                      ? "dashbord-active sideBar-nav"
                      : "sideBar-nav"
                  }
                  to="/dashboard/profile"
                >
                  <CgProfile className="text-[30px]"></CgProfile>
                  <span>Profile</span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/home">User Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">reservation</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">payment history</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myCart">my cart</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addReview">add review</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myBooking">my booking</NavLink>
              </li>
            </>
          )}
        </ul>
        <ul className="p-4 *:mt-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "dashbord-active sideBar-nav"
                  : "sideBar-nav"
              }
            >
              <FaHome className="text-[30px]"></FaHome>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "dashbord-active sideBar-nav"
                  : "sideBar-nav"
              }
              to="/contact"
            >
              <MdEmail className="text-[30px]"></MdEmail>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
        <div className="absolute bottom-0 text-center right-0 left-0 p-4">
          <p>
            ©2024{" "}
            <a className="font-bold">
              Blood<span className="text-[#DF1E26]">Unity</span>
            </a>{" "}
          </p>
        </div>
      </div>
      <div className="w-full bg-[#eaecec] lg:ml-[250px] h-full lg:h-screen">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
