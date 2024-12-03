import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CloseModal from "../../components/CloseModal";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ClosePage from "../../components/ClosePage";
import { savePdf } from "../../utils/uploadToCloudinary";
import { UseUpdate } from "../../Customhook/UseUpdate";

const UpdateAboutMe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { serviceId } = useParams();
  const { state } = location;

  const [url, setUrl] = useState("");

  const uploadImage = async (file) => {
    try {
      const imageUrl = await savePdf(file);
      setUrl(imageUrl);
    } catch (error) {
      console.log("Error while uploading image to cloudinary: ", error);
    }
  };

  // Validation Schema
  const validationSchema = Yup.object({
    resume: Yup.string(),
    description: Yup.string()
      .min(20, "Description must be at least 20 characters")
      .required("Description is required"),
    completedProjects: Yup.number()
      .typeError("Must be a number")
      .positive("Projects completed must be a positive number")
      .integer("Projects completed must be an integer")
      .required("Projects completed is required"),
    ongoingProjects: Yup.number()
      .typeError("Must be a number")
      .min(0, "Ongoing projects must be 0 or more")
      .integer("Ongoing projects must be an integer")
      .required("Ongoing projects is required"),
    webPercentage: Yup.number()
      .typeError("Must be a number")
      .min(0, "Web percentage must be between 0 and 100")
      .max(100, "Web percentage must be between 0 and 100")
      .required("Web percentage is required"),
    designPercentage: Yup.number()
      .typeError("Must be a number")
      .min(0, "Design percentage must be between 0 and 100")
      .max(100, "Design percentage must be between 0 and 100")
      .required("Design percentage is required"),
    animationPercentage: Yup.number()
      .typeError("Must be a number")
      .min(0, "Animation percentage must be between 0 and 100")
      .max(100, "Animation percentage must be between 0 and 100")
      .required("Animation percentage is required"),
  });

  // Handle form submission
  const handleSubmit = async (values) => {
    alert("Form submitted successfully!");

    try {
      const res = await UseUpdate(location, { ...values, resume: url });
      if (res) {
        // Navigate back to the previous page after successful submission
        navigate(-1);
      }
    } catch (error) {
      console.error("Error during form submission", error);
      // Handle error if necessary
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen fixed w-full bg-black bg-opacity-75 backdrop-blur-sm top-0 right-0 z-10">
      <ClosePage />
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg px-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          About Me Form
        </h2>
        <Formik
          initialValues={{
            resume: state?.resume,
            description: state?.description,
            completedProjects: state?.completedProjects,
            ongoingProjects: state?.ongoingProjects,
            remeningProjects: state?.remeningProjects,
            webPercentage: state?.webPercentage,
            designPercentage: state?.designPercentage,
            animationPercentage: state?.animationPercentage,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              {/* Resume Upload */}
              <div className="mb-4">
                <label htmlFor="resume" className="block text-gray-700">
                  Upload Resume (PDF)
                </label>
                <input
                  type="file"
                  id="resume"
                  accept=".pdf"
                  onChange={(event) => uploadImage(event.target.files[0])}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="resume"
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
                  placeholder="Write about yourself..."
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Projects Completed */}
              <div className="mb-4">
                <label htmlFor="completedProjects" className="block text-gray-700">
                  Projects Completed
                </label>
                <Field
                  type="number"
                  name="completedProjects"
                  id="completedProjects"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter completed projects count"
                />
                <ErrorMessage
                  name="completedProjects"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Ongoing Projects */}
              <div className="mb-4">
                <label htmlFor="ongoingProjects" className="block text-gray-700">
                  Ongoing Projects
                </label>
                <Field
                  type="number"
                  name="ongoingProjects"
                  id="ongoingProjects"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter ongoing projects count"
                />
                <ErrorMessage
                  name="ongoingProjects"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Web Percentage */}
              <div className="mb-4">
                <label htmlFor="webPercentage" className="block text-gray-700">
                  Web Skills (%)
                </label>
                <Field
                  type="number"
                  name="webPercentage"
                  id="webPercentage"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter percentage (0-100)"
                />
                <ErrorMessage
                  name="webPercentage"
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

export default UpdateAboutMe;
