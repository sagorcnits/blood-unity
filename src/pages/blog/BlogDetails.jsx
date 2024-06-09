import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blogData = useLoaderData();

  return (
    <div className="w-[80%] mx-auto mt-32  p-4 font-open-sans">
      <div className="h-[400px] overflow-hidden">
        <img
          className="block mx-auto rounded-md"
          src={blogData?.thumbnail}
          alt="thumbnail destils"
        />
      </div>
      <div className="space-y-3 text-center">
        <h1 className="font-bold">{blogData?.title}</h1>
        <p className="text-balance">{blogData?.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
