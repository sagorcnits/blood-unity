const DonorCard = ({ item }) => {
  const { email, name, blood, district, upazila, image } = item;

  return (
    <div className="flex flex-col md:flex-row  gap-4 shadow-card items-center p-4 rounded-lg hover:bg-darkGray duration-500 hover:text-white  cursor-pointer card-shadow font-open-sans">
      <div className="h-[200px] overflow-hidden">
        <img className="rounded-md h-full" src={image} alt="" />
      </div>
      <div className="flex-1 space-y-3">
        <h1 className="text-[22px] font-bold">{name}</h1>
        <p>
          {" "}
          <span className="font-bold">Email: </span>
          {email}
        </p>
        <div className="flex items-center justify-between gap-2 py-2 border-b">
          <p>
            <span className="font-bold">District: </span>
            {district}
          </p>
          <p>
            <span className="font-bold">Upazila: </span>
            {upazila}
          </p>
        </div>
        <div className="flex justify-between items-center gap-6">
          <h1>
            <span className="font-bold">Blood Gruop:</span> {blood}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DonorCard;
