import { Link } from "react-router-dom";
import Table from "../../shared/Table";

const HomeDonor = () => {
  return (
    <div className="px-3">
      <h1 className="text-center text-[25px] md:text-[40px] font-open-sans font-bold mt-10">
        Your Recent Donation Request
      </h1>
      <Table></Table>
      <div className="text-center mt-4 pb-4">
      <Link to="/dashboard/my-donation-requests"><button className="button">view my all request</button></Link>
      </div>
    </div>
  );
};

export default HomeDonor;
