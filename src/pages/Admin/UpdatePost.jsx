import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CloseModal from "../../components/CloseModal";
import { useLocation, useParams } from "react-router-dom";
import { saveImage } from "../../utils/uploadToCloudinary";
import { UseUpdate } from "../../Customhook/UseUpdate";
import ClosePage from "../../components/ClosePage";

const validationSchema = Yup.object({
  imageDescription: Yup.string().required("Image description is required"),
  link: Yup.string().url("Invalid URL format").required("Link is required"),
  date: Yup.date()
    .required("Date is required")
    .nullable()
    .min(new Date(), "Date cannot be in the past"), // Optional: ensures date isn't in the past
  image: Yup.string()
   ,
});

const UpdatePost = ({ setOpen }) => {

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
      imageDescription: state?.imageDescription,
      link: state?.link,
      date: state?.date,
      image: state?.image,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", { ...values, image: url });
      UseUpdate(location, { ...values, image: url });
    },
  });

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("image", file);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen fixed w-full bg-black  bg-opacity-75 backdrop-blur-sm top-0 right-0 z-10`}
    >
      <ClosePage />
      <div className="bg-white rounded-lg p-10 ">
        <h1 className="text-xl font-bold mb-4">Form with Validation</h1>
        <form onSubmit={formik.handleSubmit}>
          {/* Image Description Field */}
          <div className="mb-4">
            <label
              htmlFor="imageDescription"
              className="block text-sm font-semibold"
            >
              Image Description
            </label>
            <input
              type="text"
              id="imageDescription"
              name="imageDescription"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.imageDescription}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.imageDescription &&
              formik.errors.imageDescription && (
                <div className="text-red-500 text-sm">
                  {formik.errors.imageDescription}
                </div>
              )}
          </div>

          {/* Link Field */}
          <div className="mb-4">
            <label htmlFor="link" className="block text-sm font-semibold">
              Link
            </label>
            <input
              type="url"
              id="link"
              name="link"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.link}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.link && formik.errors.link && (
              <div className="text-red-500 text-sm">{formik.errors.link}</div>
            )}
          </div>

          {/* Date Field */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-semibold">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.date && formik.errors.date && (
              <div className="text-red-500 text-sm">{formik.errors.date}</div>
            )}
          </div>

          {/* Image Field */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
