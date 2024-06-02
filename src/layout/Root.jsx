import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const Root = () => {
  return (
    <>
      <div className="border-b border-dashed py-2 px-2 md:px-0">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Root;
