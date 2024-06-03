const FeaturedCard = ({item}) => {
  return (
    <div className="border rounded-lg text-center p-4 font-open-sans cursor-pointer hover:bg-[#0B1221] duration-500 hover:text-white">
      <div className="size-[100px] overflow-hidden rounded-full mx-auto">
        <img
          className="w-full h-full"
          src={item.image}
          alt=""
        />
      </div>
      <h1 className="text-[20px] mt-2">{item.name}</h1>
    </div>
  );
};

export default FeaturedCard;
