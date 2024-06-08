import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublice from "../../../../hooks/useAxiosPublice";
const imageBbApi = `https://api.imgbb.com/1/upload?key=f192ef5d844484b8dafe780a5acb5cbc`;
const AddBlog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

const config = {
    readonly: false,
}


  // const config = useMemo(
  // 	{
  // 		readonly: false, // all options from https://xdsoft.net/jodit/docs/,
  // 		placeholder:  'Start typings...'
  // 	},
  // 	[]
  // );

  const axiosPublic = useAxiosPublice();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    // const imageData = { image: data.image[0] };
    // const res = await axiosPublic.post(imageBbApi, imageData, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // });

    console.log(editor.current.value);
  };

  return (
    <div className="h-screen">
      <form
        className="space-y-4 w-[80%] mx-auto mt-20"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="font-bold">title: </label>
            <input
              {...register("title")}
              type="text"
              placeholder="title"
              className="px-2 py-3 focus:outline-darkRed rounded-md w-full mt-2"
              name="title"
            />
          </div>
          <div className="flex-1 ">
            <label className="font-bold">thumbnail: </label>
            <div className="bg-white mt-2 focus:outline-darkRed rounded-md">
              <input
                {...register("thumbnail")}
                type="file"
                placeholder="thumbnail"
                className="px-2 py-[9px]  w-full "
                name="thumbnail"
              />
            </div>
          </div>
        </div>
        <div>
          <label className="font-bold">content: </label>
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1} 
            config={config}
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the 
            onChange={(newContent) => {}}
          />
        </div>

        <div className="text-center">
          <button className="button">Create Blog</button>
        </div>
        
      </form>
    </div>
  );
};

export default AddBlog;
