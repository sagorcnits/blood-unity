import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import WelcomeMessage from "../../../components/WelcomeMessage";
import useAuth from "../../../hooks/useAuth";

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







  return (
    <>
      <div className="navbar  max-w-7xl mx-auto font-open-sans   px-8 py-3 ">
        <div className="flex-1 gap-2">
          <div className="text-[20px] lg:hidden">
            <FaBars onClick={handleSideBar}></FaBars>
          </div>
          <WelcomeMessage></WelcomeMessage>
        </div>

        <div className="flex-1 justify-end gap-16 *:flex  *:items-center *:gap-10">
          <div>
            {user ? (
              <div className="dropdown dropdown-end">
                <div className="flex gap-4 items-center font-open-sans text-paragraph">
                  <div>{user?.displayName}</div>
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
                    <Link to="/dashboard/home">Dashboard</Link>
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
            Blood<span className="text-orange-500">Unity</span>
          </a>
          <IoClose
            onClick={handleSideBar}
            className="text-[34px]  cursor-pointer text-white"
          ></IoClose>
        </div>
        <ul className="items-center gap-4 font-inter text-white p-4">
          <li className="py-4 text-center mt-2 hover:bg-white rounded-lg hover:text-black duration-500">
            <NavLink onClick={handleSideBar} to="/">
              Home
            </NavLink>
          </li>

          <li className="py-4 text-center mt-2 hover:bg-white rounded-lg hover:text-black duration-500">
            <NavLink onClick={handleSideBar} to="/donation-requests">
              donation requests
            </NavLink>
          </li>

          <li className="py-4 text-center mt-2 hover:bg-white rounded-lg hover:text-black duration-500">
            <NavLink onClick={handleSideBar} to="/blog">
              Blog
            </NavLink>
          </li>
          <li className="py-4 text-center mt-2 hover:bg-white rounded-lg hover:text-black duration-500">
            <NavLink onClick={handleSideBar} to="/fundings">
              Funding
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
