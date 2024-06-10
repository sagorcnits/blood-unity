import DOMPurify from "dompurify";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blogData = useLoaderData();
  // const htmlContent = "<h1>Hello World</h1><p>This is a <strong>test</strong>.</p>";
  const cleanHTML = DOMPurify.sanitize(blogData?.blogContent);

  return (
    <div className="w-[80%] mx-auto mt-32  p-4 font-open-sans">
      <div className="h-[400px] overflow-hidden">
        <img
          className="block mx-auto rounded-md"
          src={blogData?.thumbnail}
          alt="thumbnail destils"
        />
      </div>
      <div className="space-y-3 text-center mt-4">
        <h1 className="font-bold">{blogData?.title}</h1>
        {/* <p className="text-balance">{blogData?.blogContent}</p> */}
        <div dangerouslySetInnerHTML={{ __html: cleanHTML }}></div>
      </div>
    </div>
  );
};

export default BlogDetails;
