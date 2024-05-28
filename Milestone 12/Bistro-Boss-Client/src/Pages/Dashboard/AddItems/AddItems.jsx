import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    // upload image to imagebb and save the url to the database
    const imageFile = { image: data.image[0] };
    const uploadImage = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (uploadImage.data.success) {
      const menuItem = {
        name: data.name,
        price: parseFloat(data.price),
        category: data.category,
        image: uploadImage.data.data.display_url,
      };
    //   send menuItem to database
      const res = await  axiosSecure.post('/menu', menuItem);
      console.log(res.data);
      if(res.data.insertedId){
        Swal.fire('Item added successfully');
        reset();
      }

    }
  };
  return (
    <div>
      <SectionTitle heading="Add an item" subHeading="Whats new?" />
      <div>
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              type="text"
              {...register("name")}
              placeholder="Recipe Name"
              required
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex justify-center items-center gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue={"default"}
                {...register("category")}
                required
                className="select select-bordered w-full"
              >
                <option disabled value={"default"}>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
                <option value="soup">Soup</option>
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="number"
                required
                {...register("price")}
                placeholder="Price"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details*</span>
              </div>
              <textarea
                required
                {...register("recipe")}
                className="textarea textarea-bordered h-24"
                placeholder="Write here..."
              ></textarea>
            </label>
          </div>
          <div>
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs"
              required
            />
          </div>
          <button className="btn btn-ghost border border-black">
            Add Item <FaUtensils />{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
