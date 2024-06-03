import { useEffect, useState } from "react";

const SearchDonor = () => {
  const [district, setDistrict] = useState([]);
  const [upzella, setUpzella] = useState([]);

  useEffect(() => {
    fetch("../../../public/distric.json")
      .then((res) => res.json())
      .then((data) => setDistrict(data));
  }, []);

  useEffect(() => {
    fetch("../../../public/upzella.json")
      .then((res) => res.json())
      .then((data) => setUpzella(data));
  }, []);


  const handleSearch = (data)=> {
    data.preventDefault()
    const form = data.target;
    const blood = form.blood.value;
    const district = form.district.value;
    const upzella = form.upzella.value;

    const searchInfo = { blood, district, upzella };
  }

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
          <div >
            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white">
              Find Your Donor
            </h1>
            <p className="mb-5 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br />
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae <br />
              et a id nisi.
            </p>
            <div className="flex justify-center gap-4 mx-auto mt-10 font-open-sans">
              <form onSubmit={handleSearch}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-open-sans">
                  <div>
                    <select name="blood" className="w-[150px] focus:outline-none p-3 rounded-lg cursor-pointer font-open-sans">
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
                    <select name="district" className="w-[150px] focus:outline-none p-3 rounded-lg">
                      {district.map((item, id) => {
                        return (
                          <option key={id} value={item.name}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <select name="upzella"
                      className="w-[150px] focus:outline-none p-3 rounded-lg"
                    >
                     {upzella.map((item, id) => {
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
    </>
  );
};

export default SearchDonor;
