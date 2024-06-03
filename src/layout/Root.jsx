import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const Root = () => {
  return (
    <>
      <div className="border-b border-dashed py-2 px-2 md:px-0 fixed w-full z-50 bg-[#e7e9e9] top-0">
        <Navbar></Navbar>
      </div>
      <main className="mt-20 max-w-7xl mx-auto px-2 md:px-0">
        <Outlet></Outlet>
      </main>
      <div className="mt-32">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Root;
