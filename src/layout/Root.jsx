import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const Root = () => {
  return (
    <>
      <div className="border-b border-dashed py-2 px-2 md:px-0 fixed w-full z-50 bg-[#e7e9e9] top-0">
        <Navbar></Navbar>
      </div>
      <main className="mt-20">
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Root;
