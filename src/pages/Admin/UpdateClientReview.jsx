import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ClosePage from "../../components/ClosePage";
import { saveImage } from "../../utils/uploadToCloudinary";
import { useLocation, useParams } from "react-router-dom";
import { UseUpdate } from "../../Customhook/UseUpdate";

const validationSchema = Yup.object({
  image: Yup.string()
   ,
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  subdescription: Yup.string().required("Subdescription is required"),
});

const UpdateClientReview = () => {

  const location = useLocation();
  const { serviceId } = useParams();
  const { state } = location;



  const [url, setUrl] = useState(state?.image);

  const uploadImage = async (file) => {
    try {
      const imageUrl = await saveImage(file);

      // const [url, setUrl] = useState('');
      // onChange={(event)=>uploadImage(event.target.files[0])}
      // {...values,image:url}
      // UseUpdate(location, { ...values, image: url });
      setUrl(imageUrl);
    } catch (error) {
      console.log("Error while uploading image to cloudinary: ", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      image: state.image,
      title: state.title,
      description: state.title,
      subdescription: state.title,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // console.log("Form values:", { ...values, image: url });
      UseUpdate(location, { ...values, image: url });
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen fixed w-full bg-black  bg-opacity-75 backdrop-blur-sm top-0 right-0 z-10">
      <ClosePage />
      <div className="bg-white rounded-lg p-10">
        <h1 className="text-xl font-bold mb-4">Client Review Form</h1>
        <form onSubmit={formik.handleSubmit}>
          {/* Image Upload */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-semibold">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(event) => uploadImage(event.target.files[0])}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.image && formik.errors.image && (
              <div className="text-red-500 text-sm">{formik.errors.image}</div>
            )}
          </div>

          {/* Title Field */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-semibold">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.title && formik.errors.title && (
              <div className="text-red-500 text-sm">{formik.errors.title}</div>
            )}
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-semibold"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-500 text-sm">
                {formik.errors.description}
              </div>
            )}
          </div>

          {/* Subdescription Field */}
          <div className="mb-4">
            <label
              htmlFor="subdescription"
              className="block text-sm font-semibold"
            >
              Subdescription
            </label>
            <textarea
              id="subdescription"
              name="subdescription"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subdescription}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.subdescription && formik.errors.subdescription && (
              <div className="text-red-500 text-sm">
                {formik.errors.subdescription}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateClientReview;
