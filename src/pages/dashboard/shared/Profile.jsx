import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";
const imageBbApi = `https://api.imgbb.com/1/upload?key=f192ef5d844484b8dafe780a5acb5cbc`;
const Profile = () => {
  const [users, refetch] = useUser();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [isEdit, setIsEdit] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const imageFile = e.target.image.value;

    const fileImg = e.target.image.files[0];

    let imageData;

    if (fileImg) {
      const formData = new FormData();
      formData.append("image", fileImg);

      const res = await axiosPublic.post(imageBbApi, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      imageData = res;
    }

    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const blood = form.blood.value;
    const image = imageData?.data?.data?.display_url || users?.image;
    const district = form.district.value;
    const upazila = form.upazila.value;
    const updateProfile = { name, email, blood, image, district, upazila };

    axiosSecure
      .put(`/users/${user?.email}`, updateProfile)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Your Profile Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });

    setIsEdit(true);
  };

  return (
    <div className="h-screen">
      <div className="rounded-full">
        <div className="w-24 mx-auto  rounded-full overflow-hidden mt-10">
          <img src={users?.image} />
        </div>
      </div>
      <p className="text-center font-bold">{user?.displayName}</p>
      <div className=" px-2 md:px-20 font-open-sans text-paragraph">
        <div className="text-end font-semibold">
          {isEdit && (
            <button onClick={() => setIsEdit(false)} className="button">
              Edit
            </button>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 items-center mt-6">
            <div className="flex-1">
              <label className="font-bold">Name: </label>
              <input
                type="text"
                placeholder="First name"
                className="w-full rounded-md py-3 px-4 focus:outline-none bg-white mt-2"
                defaultValue={user?.displayName}
                disabled={isEdit}
                name="name"
              />
            </div>
            <div className="flex-1">
              <label className="font-bold">Email: </label>
              <input
                type="email"
                placeholder="email"
                className="w-full rounded-md py-3 px-4 focus:outline-none bg-white mt-2"
                defaultValue={user?.email}
                disabled
                name="email"
              />
            </div>
          </div>
          {/* blood group */}
          <div className="flex gap-4 items-center mt-6">
            <div className="flex-1">
              <label className="font-bold">Blood Group: </label>
              <input
                type="text"
                placeholder="Blood"
                className="w-full rounded-md py-3 px-4 focus:outline-none bg-white mt-2"
                defaultValue={users?.blood}
                disabled={isEdit}
                name="blood"
              />
            </div>
            <div className="flex-1">
              <label className="font-bold">Image:</label>
              {isEdit ? (
                <input
                  type="text"
                  name="image"
                  defaultValue={users?.image}
                  className="w-full rounded-md py-[9px] px-4 focus:outline-none bg-white mt-2 "
                  disabled={isEdit}
                />
              ) : (
                <input
                  type="file"
                  name="image"
                  className="w-full rounded-md py-[9px] px-4 focus:outline-none bg-white mt-2 "
                />
              )}
            </div>
          </div>
          {/* district and upazella */}
          <div className="flex gap-4 items-center mt-6">
            <div className="flex-1">
              <label className="font-bold">District Name: </label>
              <input
                type="text"
                placeholder="district"
                className="w-full rounded-md py-3 px-4 focus:outline-none bg-white mt-2"
                defaultValue={users?.district}
                disabled={isEdit}
                name="district"
              />
            </div>
            <div className="flex-1">
              <label className="font-bold">Upazila Name: </label>
              <input
                type="text"
                placeholder="upazila"
                className="w-full rounded-md py-3 px-4 focus:outline-none bg-white mt-2"
                defaultValue={users?.upazila}
                disabled={isEdit}
                name="upazila"
              />
            </div>
          </div>
          {!isEdit && (
            <div className="text-center mt-10">
              <button className="button">Save changes</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
