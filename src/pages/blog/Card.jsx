import { Link } from "react-router-dom";

const Card = ({ blog }) => {
  const { _id, title, thumbnail } = blog;
  return (
    <div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md border font-open-sans">
      <div>
        <div className="h-[250px] overflow-hidden">
          <img
            src={thumbnail}
            alt="thumbnail"
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
        </div>
        <h2 className="mb-1 text-xl font-semibold py-4">{title}</h2>
        {/* <p className="text-sm dark:text-gray-600">
          {blogContent?.slice(0, 100)} .....
        </p> */}
      </div>
      <div className="flex flex-wrap justify-between">
        <Link to={`/blog-details/${_id}`} className="text-[20px] text-darkRed font-bold" >Read More...</Link>
      </div>
    </div>
  );
};

export default Card;
