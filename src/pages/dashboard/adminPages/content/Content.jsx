import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-end px-10 mt-10">
        <Link to="/dashboard/content-management/add-blog">
          <button className="button">Add Blog</button>
        </Link>
      </div>
    </div>
  );
};

export default Content;
