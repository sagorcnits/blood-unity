import { useLoaderData } from "react-router-dom";

const DetailsAdmin = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className=" bg-white w-[80%] mx-auto  pb-10 mt-4 mb-10 ">
      <h1 className="text-center font-bold text-[25px] py-3">Details</h1>
      <div className="text-center flex flex-col gap-4 *:flex *:justify-between *:w-[80%] *:mx-auto *:py-4">
        <div className="border-b pb-4">
          <p>
            <span className="font-bold">Name: </span>
            {data.name}
          </p>
          <p>
            <span className="font-bold">Email: </span>
            {data.email}
          </p>
        </div>
        <div className="border-b pb-4">
          <p>
            <span className="font-bold">Recipient Name: </span>
            {data.recipientName}
          </p>
          <p>
            <span className="font-bold">Hospital Name: </span>
            {data.hospitalName}
          </p>
        </div>
        <div className="border-b pb-4">
          <p><span className="font-bold">District: </span>{data.district}</p>
          <p><span className="font-bold">Upazila: </span>{data.upazila}</p>
        </div>
        <div className="border-b pb-4">
          <p><span className="font-bold">Date: </span>{data.date}</p>
          <p><span className="font-bold">Time: </span>{data.time}</p>
        </div>
        <p>{data.address}</p>
        <p>{data.whyNeed}</p>
        <p>{data.status}</p>
      </div>
    </div>
  );
};

export default DetailsAdmin;
