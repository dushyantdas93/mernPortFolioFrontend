import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import map from "/images/map-light.png";
import bg from "/images/dots-bg-light.svg";
import { UsePost } from "../../Customhook/UsePost.jsx";

// Validation schema with Yup
const validationSchema = Yup.object({
  fullname: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const GetInTouch = () => {
  // Formik hook to handle form state and validation
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Handle form submission
      // console.log("Form data", values);

      // Call custom hook to send form data
      UsePost("message", values);

      // Reset form after submission
      resetForm();
    },
  });

  return (
    <div className="w-full lg:w-4/6 mx-auto flex flex-col lg:px-6 justify-around gap-10 pb-14">
      <h1 className="font-bold text-2xl lg:text-4xl py-2 lg:py-10 px-6 lg:px-0 relative">
        <img src={bg} alt="" className="absolute -left-2 lg:-left-5" />
        Get In touch
      </h1>
      <div className="px-6 lg:p-0 flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-1/3 h-16 lg:h-40">
          <img
            src={map}
            alt=""
            className="h-42 hidden lg:block absolute top-0"
          />
          <h1 className="font-bold text-xl">Let's talk about everything!</h1>
          <p>Don't like forms? Send me an email. 👋</p>
        </div>
        <div className="w-full lg:w-2/3">
          {/* Form */}
          <form onSubmit={formik.handleSubmit} className="flex flex-wrap gap-4">
            {/* Fullname input */}
            <input
              type="text"
              placeholder="Enter your name"
              name="fullname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullname}
              className="w-full h-10 px-2 text-center rounded-full border border-gray-300 focus:outline-none"
            />
            {formik.touched.fullname && formik.errors.fullname && (
              <div className="text-red-500 text-sm">
                {formik.errors.fullname}
              </div>
            )}

            {/* Email input */}
            <input
              type="text"
              placeholder="Email address"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full h-10 px-2 text-center rounded-full border border-gray-300 focus:outline-none"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}

            {/* Subject input */}
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
              className="w-full h-16 px-2 text-center rounded-full border border-gray-300 focus:outline-none"
            />
            {formik.touched.subject && formik.errors.subject && (
              <div className="text-red-500 text-sm">
                {formik.errors.subject}
              </div>
            )}

            {/* Message input */}
            <input
              type="text"
              placeholder="Message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="w-full h-36 px-2 text-center rounded-3xl border border-gray-300 focus:outline-none"
            />
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-500 text-sm">
                {formik.errors.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red-500 px-4 py-1 rounded-full font-semibold lg:text-xl lg:px-6 lg:py-2 text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
