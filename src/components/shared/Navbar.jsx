import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

const Navbar = () => {
  const [users,isLoading] = useUser();
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

  console.log( user)

  // if(isLoading){
  //   return <p>Loaiding....</p>
  // }

  return (
    <>
      <div className="navbar  max-w-7xl mx-auto font-open-sans">
        <div className="flex-1 gap-2">
          <div className="text-[20px] lg:hidden">
            <FaBars onClick={handleSideBar}></FaBars>
          </div>
          <a className="text-2xl md:text-3xl  font-bold ">
            Blood<span className="text-[#DF1E26]">Unity</span>
          </a>
        </div>

        <div className="flex-1 justify-end gap-16 *:flex  *:items-center *:gap-10">
          <div>
            <ul className="hidden items-center gap-6 *:text-paragraph font-semibold lg:flex">
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to="/donation-requests"
                >
                  donation requests
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to="/blog"
                >
                  blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to="/fundings"
                >
                  fundings
                </NavLink>
              </li>
            </ul>

            {user  ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-16 rounded-full">
                    <img alt="" src={users?.image} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 font-open-sans *:bgHover *:py-1 *:text-paragraph *:text-[23px]"
                >
                  <li>
                    <Link
                      to={`${
                        users?.role == "admin" || users?.role == "volunteer"
                          ? "/dashboard"
                          : "/dashboard/home"
                      }`}
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link>Setting</Link>
                  </li>

                  <li onClick={LogOutUser}>
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
            Blood<span className="text-[#dee3e7]">Unity</span>
          </a>
          <IoClose
            onClick={handleSideBar}
            className="text-[34px]  cursor-pointer text-white"
          ></IoClose>
        </div>
        <ul className="items-center gap-4 font-inter text-white p-4">
          <li>
            <NavLink
              onClick={handleSideBar}
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-active nav-bar"
                  : "nav-bar"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={handleSideBar}
              to="/donation-requests"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-active nav-bar"
                  : "nav-bar"
              }
            >
              donation requests
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={handleSideBar}
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-active nav-bar"
                  : "nav-bar"
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleSideBar}
              to="/fundings"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-active nav-bar"
                  : "nav-bar"
              }
            >
              Funding
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
