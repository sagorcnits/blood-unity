import SectionHeader from "../../components/SectionHeader";

const DonationRequest = () => {
  return (
    <section className="mt-32">
      <div>
        <SectionHeader
          info={{
            heading: "Donation Request",
            descrip:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          }}
        ></SectionHeader>
      </div>
      <div className="overflow-auto mt-20 font-open-sans">
        <table className="table w-[800px] md:w-full">
          <thead>
            <tr className=" *:text-[19px] font-Inter">
              <th></th>
              <th>recipient name</th>
              <th>location</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="*:text-[17px] font-Inter ">
              <td>1</td>
              <td>Sagor</td>
              <td>KomorPur</td>
              <td>20-03-2024</td>
              <td>10am</td>
              <td>
                <button className="button">View Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DonationRequest;
