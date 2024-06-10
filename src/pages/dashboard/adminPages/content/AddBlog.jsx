import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublice from "../../../../hooks/useAxiosPublice";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
const imageBbApi = `https://api.imgbb.com/1/upload?key=f192ef5d844484b8dafe780a5acb5cbc`;
const AddBlog = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublice();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
  };

  const submit = async (data) => {
    const imageData = { image: data.image[0] };
    const res = await axiosPublic.post(imageBbApi, imageData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const title = data.title;
    const thumbnail = res.data.data.display_url;
    const blogContent = data.content;
    const blog = { title, thumbnail, blogContent, status: "draft" };

    axiosSecure
      .post("/blogs", blog)
      .then((res) => {
        const blog = res.data;
        console.log(blog);
        if (blog.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your Blog Added",
            showConfirmButton: false,
            timer: 1500,
          });
          setContent(" ");
          reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-screen">
      <div className="w-[80%] mx-auto mt-10">
        <p className="text-green-500 ">
          <Link
            to="/dashboard/content-management"
            className="flex gap-2 items-center"
          >
            <FaArrowLeft></FaArrowLeft>
            <span className="text-black "> back</span>
          </Link>
        </p>

        <form
          className="space-y-4  mt-10 font-open-sans"
          onSubmit={handleSubmit(submit)}
        >
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="font-bold">Title: </label>
              <input
                {...register("title")}
                type="text"
                placeholder="title"
                className="px-2 py-3 focus:outline-darkRed rounded-md w-full mt-2"
                name="title"
              />
            </div>
            <div className="flex-1 ">
              <label className="font-bold">Thumbnail: </label>
              <div className="bg-white mt-2 focus:outline-darkRed rounded-md">
                <input
                  {...register("image")}
                  type="file"
                  placeholder="image"
                  className="px-2 py-[9px]  w-full "
                  name="image"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="font-bold">Content: </label>
            {/* <JoditEditor
              ref={editor}
              value={content}
              tabIndex={1}
              config={config}
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the
              onChange={(newContent) => {}}
            /> */}

            <textarea
            {...register("content")}
            type="text"
            placeholder="content"
            className="px-2 py-3 focus:outline-darkRed rounded-md w-full mt-2 h-[224px] resize-none overflow-auto"
            name="content"
          />
          </div>

          <div className="text-center">
            <button className="button">Create Blog</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
