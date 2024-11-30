import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ClosePage from "../../components/ClosePage";


const UpdateCompletion = () => {
  // Validation Schema
  const validationSchema = Yup.object({
    yearOfCompletion: Yup.string()
      .matches(
        /^(19|20)\d{2}$/,
        "Must be a valid year (e.g., 2000) or 'Present'"
      )
      .nullable()
      .when("isPresent", {
        is: false,
        then: Yup.string().required("Year of Completion is required"),
      }),
    isPresent: Yup.boolean(),
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    description: Yup.string()
      .min(20, "Description must be at least 20 characters")
      .required("Description is required"),
    percentage: Yup.number()
      .min(0, "Percentage must be at least 0")
      .max(100, "Percentage cannot exceed 100")
      .required("Percentage is required"),
    category: Yup.string()
      .oneOf(["Education", "Job"], "Invalid category")
      .required("Category is required"),
  });

  // Handle Form Submission
  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 absolute top-10 right-10">
      <ClosePage/>
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Completion Form
        </h2>
        <Formik
          initialValues={{
            yearOfCompletion: "",
            isPresent: false,
            name: "",
            description: "",
            percentage: "",
            category: "", // Added field
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {/* Year of Completion */}
              <div className="mb-4">
                <label
                  htmlFor="yearOfCompletion"
                  className="block text-gray-700"
                >
                  Year of Completion
                </label>
                <Field
                  type="text"
                  name="yearOfCompletion"
                  id="yearOfCompletion"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="e.g., 2024 or Present"
                  disabled={values.isPresent}
                />
                <ErrorMessage
                  name="yearOfCompletion"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Present Checkbox */}
              <div className="mb-4">
                <label className="inline-flex items-center text-gray-700">
                  <Field
                    type="checkbox"
                    name="isPresent"
                    className="mr-2"
                    onChange={(e) => {
                      setFieldValue("isPresent", e.target.checked);
                      if (e.target.checked) {
                        setFieldValue("yearOfCompletion", "Present");
                      } else {
                        setFieldValue("yearOfCompletion", "");
                      }
                    }}
                  />
                  Currently Ongoing
                </label>
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
                  placeholder="Enter percentage (0-100)"
                />
                <ErrorMessage
                  name="percentage"
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
                  <option value="" label="Select category" />
                  <option value="Education" label="Education" />
                  <option value="Job" label="Job" />
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
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdateCompletion;
