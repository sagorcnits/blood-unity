import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";

const Funding = () => {
  return (
    <section className="mt-32">
      <div>
        <SectionHeader
          info={{
            heading: "All Funding",
            descrip:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          }}
        ></SectionHeader>
      </div>
      <div className="mt-10 text-center md:text-end">
        <button className="button">Pay</button>
      </div>
      <div className="overflow-auto mt-20 font-open-sans">
        <table className="table w-[800px] md:w-full">
          <thead>
            <tr className=" *:text-[19px] font-Inter">
              <th></th>
              <th>name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="*:text-[17px] font-Inter ">
              <td>1</td>
              <td>Sagor</td>
              <td>sagor@gmail.com</td>
              <td>20-03-2024</td>
              <td>$100</td>
              <td>
                <Link to="/details">
                  <button className="button bg-green-600">Done✔</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Funding;
