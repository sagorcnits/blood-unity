import { BiSolidDonateBlood, BiSolidDonateHeart } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const admin = true;

  return (
    <div className="flex gap-2 bg-[#eaecec] font-open-sans">
      <div className="h-screen  bg-white w-[18%] p-4">
        <div className="font-open-sans mx-auto w-10/12 py-2 border-b border-dashed">
          <a className="text-2xl md:text-3xl  font-bold ">
            Blood<span className="text-[#DF1E26]">Unity</span>
          </a>
        </div>
        <ul className="*:py-3 *:px-6 *:mt-4 *:bgHover">
          {admin ? (
            <>
              {" "}
              <li className="dashbord-active flex items-center gap-4">
                <FaHome className="text-[30px]"></FaHome>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "dashbord-active" : ""
                  }
                  to="/dashboard"
                >
                  Home
                </NavLink>
              </li>
              <li className="dashbord-active flex items-center gap-4">
                <BiSolidDonateBlood className="text-[30px]"></BiSolidDonateBlood>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "dashbord-active" : ""
                  }
                  to="/dashboard/my-donation-requests"
                >
                  My Donation
                </NavLink>
              </li>
              <li className="dashbord-active flex items-center gap-4">
                <BiSolidDonateHeart className="text-[30px]"></BiSolidDonateHeart>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "dashbord-active" : ""
                  }
                  to="/dashboard/create-donation-request"
                >
                  Create Donation
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
        <div className="divider"></div>
        <ul>
          <li className="px-4 py-2">
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
      <div className="w-[80%] ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
