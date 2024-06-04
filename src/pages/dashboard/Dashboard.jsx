import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

const admin = true;

  return (
    <div className="flex gap-2 ">
      <div className="h-screen  bg-[rgb(209,160,84)] w-[20%] p-4">
        <div className="cinzel-font mx-auto w-10/12 py-2">
          <h1 className="font-bold md:text-[30px] ">BISTRO BOSS</h1>
          <h3 className="md:text-[24px] tracking-[5.12px] font-semibold">
            Restaurant
          </h3>
        </div>
        <ul className="*:py-2 *:px-6">
          {admin ? (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">add items</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">manage items</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookins">Manage bookings</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">all users</NavLink>
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
