import { useState } from "react";
import DonorCard from "../../components/DonorCard";
import useSelect from "../../hooks/useSelect";
import useUsersData from "../../hooks/useUsersData";

const SearchDonor = () => {
  const [districtSelect, upazilaSelect] = useSelect();
  const [userData] = useUsersData();
  const donorsData = userData.filter((item) => item.role == "donor");
const [searchData,setSearchData] = useState([])
  const handleSearch = (data) => {
    data.preventDefault();
    const form = data.target;
    const blood = form.blood.value.toLowerCase();
    const district = form.district.value.toLowerCase();
    const upazila = form.upazila.value.toLowerCase();

    const searchDonor = donorsData.filter((item) => {
      if (
        item.blood.toLowerCase() == blood &&
        item.district.toLowerCase() == district &&
        item.upazila.toLowerCase() == upazila
      ) {
        return item;
      }
    });
    console.log(searchDonor)
    setSearchData(searchDonor)
  };

  // console.log(searchData)

  return (
    <>
      <div
        className="hero  md:h-[500px] rounded-lg overflow-hidden mt-32"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/healthcare-concept-clinic_23-2151117930.jpg?t=st=1717378639~exp=1717382239~hmac=ffc8b13e15d2667680650c9d384ecadc0354c6d030ff96c39c28f3c521b847db&w=740)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center  font-open-sans py-4">
          <div>
            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white">
              Find Your Donor
            </h1>
            <p className="mb-5 text-white">
            Blood donation is one of the most selfless and impactful acts one can perform. <br /> By donating blood, you have the potential to save multiple lives. <br /> Blood is a critical component of our healthcare system,
            </p>
            <div className="flex justify-center gap-4 mx-auto mt-10 font-open-sans">
              <form onSubmit={handleSearch}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-open-sans">
                  <div>
                    <select
                      name="blood"
                      className="w-[150px] focus:outline-none p-3 rounded-lg cursor-pointer font-open-sans"
                    >
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="district"
                      className="w-[150px] focus:outline-none p-3 rounded-lg"
                    >
                      {districtSelect?.map((item, id) => {
                        return (
                          <option key={id} value={item.name}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <select
                      name="upazila"
                      className="w-[150px] focus:outline-none p-3 rounded-lg"
                    >
                      {upazilaSelect?.map((item, id) => {
                        return (
                          <option key={id} value={item.name}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <button className="button">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2  gap-10  font-open-sans mt-20">
       {searchData?.map((item,id) => <DonorCard item={item} key={id}></DonorCard>)}
      </div>
    </>
  );
};

export default SearchDonor;
