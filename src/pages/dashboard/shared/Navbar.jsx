import { useRef, useState } from "react";
import { BiSolidDonateBlood } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdBloodtype, MdContentPasteGo, MdCreate, MdPermContactCalendar } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import WelcomeMessage from "../../../components/WelcomeMessage";
import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";

const Navbar = () => {
  const { user, LogOutUser } = useAuth();
  const [isActive, setActive] = useState(true);
  const navRef = useRef();
  const handleSideBar = () => {
    setActive(!isActive);
    if (isActive) {
      navRef.current.style.left = 0;
    } else {
      navRef.current.style.left = "-300px";
    }
  };

  const [users] = useUser();
  const role = users?.role;

  return (
    <>
      <div className="navbar  font-open-sans px-4 lg:px-8 py-3">
        <div className="flex-1 gap-2">
          <div className="text-[20px] lg:hidden">
            <FaBars onClick={handleSideBar}></FaBars>
          </div>
          <WelcomeMessage></WelcomeMessage>
        </div>

        <div className="flex-1 justify-end gap-16 *:flex  *:items-center *:gap-10">
          <div>
            {user ?  (
              <div className="dropdown dropdown-end">
                <div className="flex gap-4 items-center font-open-sans text-paragraph">
                  <div className="hidden md:block">{user?.displayName}</div>
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-16 rounded-full">
                      <img alt="" src={user?.photoURL} />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 font-open-sans *:bgHover *:py-1 *:text-paragraph *:text-[23px]"
                >
                  <li>
                    <Link>Dashboard</Link>
                  </li>

                  <li>
                    <Link>Setting</Link>
                  </li>

                  <li  onClick={() => LogOutUser()}>
                    <Link>Logout</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/login"
              >
                <button className="font-open-sans   duration-500 button">
                  Login
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
      <div
        ref={navRef}
        className="fixed -left-[300px] top-0 bottom-0 w-[250px] bg-darkRed  z-50 duration-500 font-open-sans"
      >
        <div className="flex justify-between border-b border-dashed py-6 px-2">
          <a className="text-2xl md:text-3xl  font-bold">
            Blood<span className="text-orange-500">Unity</span>
          </a>
          <IoClose
            onClick={handleSideBar}
            className="text-[34px]  cursor-pointer text-white"
          ></IoClose>
        </div>
        <div className="h-screen  bg-white w-full">
        {role =="admin"? (
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
              {role =="donor" ? (
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
                  <ul className="*:mt-2  pb-6  p-3">
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
                        <span>Volunteer</span>
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
      </div>
    </>
  );
};

export default Navbar;
