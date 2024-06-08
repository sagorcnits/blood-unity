import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";
import useAxiosPublice from "../../../../hooks/useAxiosPublice";
import Card from "./Card";

const Content = () => {
  const [isFilter, setFilter] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const axiosPublic = useAxiosPublice();

  const { data: blogsData = [], refetch } = useQuery({
    queryKey: ["blogsData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/blogs");
      setBlogs(res.data);
      return res.data;
    },
  });

  const handleFilter = (value) => {
    const filter = blogsData.filter((blog) => blog.status == value);
    setBlogs(filter);
  };

  const cards = [1, 2, 3, 4];

  return (
    <div className="pb-10">
      <div className="flex justify-end px-10 mt-6">
        <Link to="/dashboard/content-management/add-blog">
          <button className="button">Add Blog</button>
        </Link>
      </div>
      {/* filter section */}
      <div className="flex justify-between items-center px-10 mt-10">
        <div className="text-[25px] mt-3   flex gap-2 items-center">
          <TfiWrite className="text-[#27AE60]"></TfiWrite>
          <h1 className="font-bold">Blogs</h1>
        </div>
        <div
          onClick={() => setFilter(!isFilter)}
          className="bg-[#858686] w-[100px] px-3 py-2 text-white font-open-sans rounded-md relative cursor-pointer flex justify-between items-center"
        >
          <p>filter</p>
          <IoMdArrowDropdown
            className={`${isFilter && "rotate-180"} duration-500`}
          ></IoMdArrowDropdown>
          {isFilter && (
            <ul className="cursor-pointer py-1 bg-white card-shadow  font-open-sans px-2 rounded-md absolute -bottom-[80px] left-0 right-0 *:py-1 z-50 *:text-center *:bgHover *:text-black">
             
              <li onClick={() => handleFilter("draft")}>draft</li>
              <li onClick={() => handleFilter("published")}>published</li>
            </ul>
          )}
        </div>
      </div>
      {/* all blogs section  */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 gap-6">
        {blogs?.map((blog, id) => (
          <Card blog={blog} key={id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Content;
