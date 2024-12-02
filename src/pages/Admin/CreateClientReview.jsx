import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CloseModal from "../../components/CloseModal";

const validationSchema = Yup.object({
  image: Yup.mixed()
    .required("Image is required")
    .test("fileSize", "File too large", (value) => !value || (value && value.size <= 5 * 1024 * 1024)) // Max size 5MB
    .test("fileType", "Unsupported file format", (value) => !value || (value && ["image/jpeg", "image/png", "image/gif"].includes(value.type))),
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  subdescription: Yup.string().required("Subdescription is required"),
});

const CreateClientReview = ({setOpen}) => {
  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      description: "",
      subdescription: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  return (
    <div className="w-full max-w-md mx-auto p-6 border rounded-md shadow-lg absolute top-10 right-10 z-10 bg-white">

      <CloseModal setOpen={setOpen}/>
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
            onChange={(event) => formik.setFieldValue("image", event.currentTarget.files[0])}
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
          <label htmlFor="description" className="block text-sm font-semibold">
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
            <div className="text-red-500 text-sm">{formik.errors.description}</div>
          )}
        </div>

        {/* Subdescription Field */}
        <div className="mb-4">
          <label htmlFor="subdescription" className="block text-sm font-semibold">
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
            <div className="text-red-500 text-sm">{formik.errors.subdescription}</div>
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
  );
};

export default CreateClientReview;
