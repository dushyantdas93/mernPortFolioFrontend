

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CloseModal from "../../components/CloseModal";

const CreateWork = ({setOpen}) => {
  // Validation Schema
  const validationSchema = Yup.object({
    screenshot: Yup.mixed()
      .required("Screenshot image is required")
      .test(
        "fileType",
        "Only image files are allowed",
        (value) => !value || (value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type))
      ),
    category: Yup.string().required("Category is required"),
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    link: Yup.string()
      .url("Invalid URL format")
      .required("Link is required"),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  absolute top-10 right-10">
        <CloseModal setOpen={setOpen}/>
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Screenshot Form
        </h2>
        <Formik
          initialValues={{
            screenshot: null,
            category: "",
            name: "",
            link: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              {/* Screenshot Image Upload */}
              <div className="mb-4">
                <label htmlFor="screenshot" className="block text-gray-700">
                  Upload Screenshot
                </label>
                <input
                  type="file"
                  id="screenshot"
                  accept="image/*"
                  onChange={(event) => {
                    setFieldValue("screenshot", event.target.files[0]);
                  }}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="screenshot"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Category Dropdown */}
              <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700">
                  Category
                </label>
                <Field
                  as="select"
                  name="category"
                  id="category"
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="">Select a category</option>
                  <option value="creative">Creative</option>
                  <option value="design">Design</option>
                  <option value="branded">Branded</option>
                  <option value="art">Art</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Link */}
              <div className="mb-4">
                <label htmlFor="link" className="block text-gray-700">
                  Link
                </label>
                <Field
                  type="text"
                  name="link"
                  id="link"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter link"
                />
                <ErrorMessage
                  name="link"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateWork;
;
