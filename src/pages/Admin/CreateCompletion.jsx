import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {UsePost} from "../../Customhook/UsePost"
import CloseModal from "../../components/CloseModal";

const CompletionForm = ({className,setOpen}) => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    yearOfCompletion: Yup.string()
      .required("Year of completion is required")
      .matches(/^\d{4}$/, "Year must be a valid 4-digit number"),
    isPresent: Yup.boolean(),
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    description: Yup.string()
      .min(20, "Description must be at least 20 characters")
      .required("Description is required"),
    percentage: Yup.number()
      .required("Percentage is required")
      .min(0, "Percentage must be between 0 and 100")
      .max(100, "Percentage must be between 0 and 100"),
    category: Yup.string().required("Category is required"),
  });

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Values:", values);
 const res = UsePost("updateCompletion/create", values);
 if(res){
  setOpen(false)
 }
    // Reset the form after successful submission
    resetForm();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen fixed w-full bg-black  bg-opacity-75 backdrop-blur-sm top-0 right-0 z-10">
      <CloseModal setOpen={setOpen} />
      <div className="bg-white p-10 rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Experience & Job
        </h2>
        <Formik
          initialValues={{
            yearOfCompletion: "",
            isPresent: false,
            name: "",
            description: "",
            percentage: "",
            category: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {/* Year of Completion */}
            <div className="mb-4">
              <label htmlFor="yearOfCompletion" className="block text-gray-700">
                Year of Completion
              </label>
              <Field
                type="text"
                name="yearOfCompletion"
                id="yearOfCompletion"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter year of completion"
              />
              <ErrorMessage
                name="yearOfCompletion"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Is Present */}
            <div className="mb-4">
              <label htmlFor="isPresent" className="block text-gray-700">
                Is Present
              </label>
              <Field type="checkbox" name="isPresent" id="isPresent" />
              <ErrorMessage
                name="isPresent"
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
                placeholder="Enter your name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700">
                Description
              </label>
              <Field
                as="textarea"
                name="description"
                id="description"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter description"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Percentage */}
            <div className="mb-4">
              <label htmlFor="percentage" className="block text-gray-700">
                Percentage
              </label>
              <Field
                type="number"
                name="percentage"
                id="percentage"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter percentage"
              />
              <ErrorMessage
                name="percentage"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Category (Dropdown) */}
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
                <option value="">Select Category</option>
                <option value="Job">Job</option>
                <option value="Education">Education</option>
              </Field>
              <ErrorMessage
                name="category"
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
        </Formik>
      </div>
    </div>
  );
};

export default CompletionForm;
