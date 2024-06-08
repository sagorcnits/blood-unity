import { MdDeleteForever } from "react-icons/md";

const Card = ({ blog }) => {
  const { title, thumbnail, status } = blog;
  return (
    <div className="p-3 card-shadow border h-[270px] rounded-md bg-white  font-open-sans">
      <div className="h-[150px] overflow-hidden rounded-md">
        <img src={thumbnail} alt="thumbnil" />
      </div>
      <h1 className="py-3">{title}</h1>
      <div className="flex justify-between items-center ">
        <button className="bg-[#2d8853] button text-white px-4 py-2 rounded-md">
          {status == "draft" ? "Published" : "UnPublished"}
        </button>

        <button className="text-[20px] button text-white px-2 py-2 rounded-md">
          <MdDeleteForever></MdDeleteForever>
        </button>
      </div>
    </div>
  );
};

export default Card;
