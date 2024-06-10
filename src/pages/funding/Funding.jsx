import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import useAxiosPublice from "../../hooks/useAxiosPublice";
import usePayments from "../../hooks/usePayments";

const Funding = () => {
  const [payments] = usePayments();
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const numberPages = Math.ceil(payments.length / itemPerPage);
  const totalbtn = [...Array(numberPages).keys()];

  const axiosPublic = useAxiosPublice();
  const { data: paymentsData = [], refetch ,isLoading} = useQuery({
    queryKey: ["paymentsData",currentPage,itemPerPage],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/payments?page=${currentPage - 1}&size=${itemPerPage}`
      );
      return res.data;
    },
  });

  const handleChangeItemPage = (e) => {
    refetch();
    const val = parseInt(e.target.value);
    setItemPerPage(val);
  };

  return (
    <section className="mt-32">
      <div>
        <SectionHeader
          info={{
            heading: "Everyone's  Funding",
            descrip:
              "Find various ways to donate, from one-time gifts to recurring donation.",
          }}
        ></SectionHeader>
      </div>
      <div className="mt-10 text-center md:text-end md:w-[80%] lg:w-[70%] mx-auto">
        <Link to="/payment">
          <button className="button">Pay</button>
        </Link>
      </div>
      <div className="overflow-auto mt-10 font-open-sans md:w-[80%] lg:w-[70%] mx-auto">
        <table className="table w-[800px] md:w-full border">
          <thead>
            <tr className=" *:text-[19px] font-Inter">
              <th></th>
              <th className="h-[70px]">name</th>
              <th>Date</th>
              <th className="text-center">Amount</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? "Loding...." : paymentsData?.map((payment, id) => {
              return (
                <tr key={id} className="*:text-[17px] font-Inter ">
                  <td>{id + 1}</td>
                  <td className="font-bold">{payment.name}</td>
                  <td>{payment.date}</td>
                  <td className="text-center text-darkRed font-semibold">
                    ${payment.price}
                  </td>
                  <td className="text-end">
                    <button className="bg-[#D7F7C2] cursor-default px-3 py-1 rounded-md text-green-500 font-bold">
                      {payment.status}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {payments.length > 0 && (
        <div className="flex gap-2 space-x-1 dark:text-gray-800 mt-6 pb-10 md:w-[80%] lg:w-[70%] mx-auto">
          {totalbtn.map((item, id) => {
            return (
              <button
                onClick={() => setCurrentPage(item + 1)}
                key={id}
                type="button"
                title="Page 1"
                className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md ${
                  currentPage == item + 1 ? "selected" : ""
                }`}
              >
                {item + 1}
              </button>
            );
          })}

          <select
            defaultValue={itemPerPage}
            onChange={handleChangeItemPage}
            className="cursor-pointer text-sm font-semibold border rounded"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      )}
    </section>
  );
};

export default Funding;
