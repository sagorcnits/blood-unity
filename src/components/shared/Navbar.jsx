import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
      <div className="navbar  max-w-7xl mx-auto font-open-sans">
        <div className="flex-1 gap-2">
          <div className="text-[20px] lg:hidden">
            <FaBars onClick={handleSideBar}></FaBars>
          </div>
          <a className="text-2xl md:text-3xl  font-bold ">
            Blood<span className="text-red-500">Unity</span>
          </a>
        </div>

        <div className="flex-1 justify-end gap-16 *:flex  *:items-center *:gap-10">
          <div>
            <ul className="hidden items-center gap-6 *:text-paragraph font-semibold lg:flex">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/donation-requests">donation requests</NavLink>
              </li>
              <li>
                <NavLink to="/blog">blog</NavLink>
              </li>
              <li>
                <NavLink to="/fundings">fundings</NavLink>
              </li>
            </ul>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-16 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Dashboard</a>
                </li>

                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
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
            <NavLink  onClick={handleSideBar} to="/">Home</NavLink>
          </li>

          <li className="py-4 text-center mt-2 hover:bg-white rounded-lg hover:text-black duration-500">
            <NavLink  onClick={handleSideBar} to="/donation-requests">donation requests</NavLink>
          </li>

          <li className="py-4 text-center mt-2 hover:bg-white rounded-lg hover:text-black duration-500">
            <NavLink  onClick={handleSideBar} to="/blog">Blog</NavLink>
          </li>
          <li className="py-4 text-center mt-2 hover:bg-white rounded-lg hover:text-black duration-500">
            <NavLink  onClick={handleSideBar} to="/fundings">Funding</NavLink>
          </li>
        </ul>

      
      </div>
    </>
  );
};

export default Navbar;
