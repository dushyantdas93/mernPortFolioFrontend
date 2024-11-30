import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CloseModal from "../../components/CloseModal";
import ClosePage from "../../components/ClosePage";



const UpdateServices = () => {
  const location = useLocation();
  const {serviceId} = useParams()
  const { state } = location;

  useEffect(()=>{
    if(!state){
      // call api
    }

  },[serviceId])
  // Validation schema
  const validationSchema = Yup.object({
    img: Yup.mixed()
      .test(
        "fileType",
        "Only image files are allowed",
        (value) =>
          !value ||
          (value &&
            ["image/jpeg", "image/png", "image/jpg"].includes(value.type))
      )
      .nullable(),
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    description: Yup.string()
      .min(20, "Description must be at least 20 characters")
      .required("Description is required"),
    recommended: Yup.string()
      .oneOf(["yes", "no"], "Please select a valid option")
      .required("Recommendation status is required"),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    alert("Service updated successfully!");
  };

  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative">
      <ClosePage/>
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Update Services
        </h2>
        <Formik
          initialValues={{
            img: state?.img,
            name: state?.heading,
            description:  state?.para,
            recommended: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              {/* Image Upload */}
              <div className="mb-4">
                <label htmlFor="img" className="block text-gray-700">
                  Upload Image
                </label>
                <input
                  type="file"
                  id="img"
                  accept="image/*"
                  onChange={(event) => {
                    setFieldValue("img", event.target.files[0]);
                  }}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="img"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Service Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter service name"
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
                  placeholder="Enter service description"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Recommended Dropdown */}
              <div className="mb-4">
                <label htmlFor="recommended" className="block text-gray-700">
                  Recommended
                </label>
                <Field
                  as="select"
                  name="recommended"
                  id="recommended"
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Field>
                <ErrorMessage
                  name="recommended"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Update Service
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdateServices;
