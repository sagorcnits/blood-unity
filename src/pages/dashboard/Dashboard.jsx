import { BiSolidDonateBlood } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHome, FaUser } from "react-icons/fa";
import {
  MdBloodtype,
  MdContentPasteGo,
  MdCreate,
  MdPermContactCalendar,
} from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";

const Dashboard = () => {
  const admin = false;
  const donor = true;
  const volunteer = true;

  return (
    <div className="flex gap-2  font-open-sans ">
      <div className="h-screen  bg-white w-[250px] fixed hidden lg:block">
        <div className="font-open-sans mx-auto w-10/12 py-4 border-b border-dashed">
          <a className="text-2xl md:text-3xl  font-bold ">
            Blood<span className="text-[#DF1E26]">Unity</span>
          </a>
        </div>
        {admin ? (
          <>
            <ul className="*:mt-2 border-b pb-6 border-dashed p-3">
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "dashbord-active sideBar-nav"
                      : "sideBar-nav"
                  }
                  to="/dashboard/adminHome"
                >
                  <FaHome className="text-[24px]"></FaHome>
                  <span>Admin Home</span>
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
                  to="/dashboard/all-users"
                >
                  <FaUser className="text-[24px]"></FaUser>
                  <span>Users</span>
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
                  to="/dashboard/all-blood-donation-request"
                >
                  <MdBloodtype className="text-[24px] "></MdBloodtype>
                  <span>Donations</span>
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
                  to="/dashboard/content-management"
                >
                  <MdContentPasteGo className="text-[24px] "></MdContentPasteGo>
                  <span>Content</span>
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
                  <CgProfile className="text-[24px]"></CgProfile>
                  <span>Profile</span>
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="*:mt-2 border-b pb-6 border-dashed p-3">
              {donor ? (
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
                      <FaHome className="text-[24px]"></FaHome>
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
                      <BiSolidDonateBlood className="text-[24px]"></BiSolidDonateBlood>
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
                      <MdCreate className="text-[24px]"></MdCreate>
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
                      <CgProfile className="text-[24px]"></CgProfile>
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
          </>
        )}
        <ul className="*:mt-2 pb-6 p-3">
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "dashbord-active sideBar-nav"
                  : "sideBar-nav"
              }
              to="/"
            >
              <FaHome className="text-[24px] "></FaHome>
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
              to="/dashboard/contact"
            >
              <MdPermContactCalendar className="text-[24px] "></MdPermContactCalendar>
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
      <main className="w-full  lg:ml-[250px] bg-[#eaecec]">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Dashboard;
