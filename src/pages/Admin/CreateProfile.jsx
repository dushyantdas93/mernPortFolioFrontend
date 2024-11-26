import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../context/auth";
import { Usecloudinary } from "../../components/UseCloudinary";


const CreateProfile = () => {
  const [auth,setAuth] = useAuth()
  const [showPassword, setShowPassword] = useState(false); // Toggle change password field
  const [url, setUrl] = useState('');

  const saveImage = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "jayxtlmw");
    data.append("cloud_name", "dywltditz");

    try {
      if (!file) {
        return toast.error("Please upload an image");
      }

      const res = await fetch('https://api.cloudinary.com/v1_1/dywltditz/image/upload', {
        method: "POST",
        body: data
      });

      const cloudData = await res.json();
      setUrl(cloudData.url);
      handleImage(url)
      // console.log(cloudData.url);
      // toast.success("Image uploaded successfully");
    } catch (error) {
      // toast.error("Failed to upload the image");
      console.error("Error uploading image:", error);
    }
  };

const update = auth?.user



const handleImage = (imageUrl)=>{
  console.log(imageUrl)
}


  
  console.log(auth?.user)
  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    instagram: Yup.string().url("Must be a valid URL"),
    github: Yup.string().url("Must be a valid URL"),
    linkedin: Yup.string().url("Must be a valid URL"),
    password: Yup.string().when("showPassword", {
      is: true,
      then: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(
          /[!@#$%^&*]/,
          "Password must contain at least one special character"
        ),
    }),
    image: Yup.mixed().test(
      "fileType",
      "Only image files are allowed",
      (value) =>
        !value ||
        (value && ["image/jpeg", "image/png", "image/gif"].includes(value.type))
    ),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    alert("Form submitted successfully!");
  };
 

  return (
    <div
      className={`${
        open ? " fixed " : "hidden "
      }   flex flex-col items-center justify-center min-h-screen bg-gray-100`}
    >
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Update Profile
        </h2>
        <h1
          className="absolute top-5 right-10 font-semibold"
          onClick={() => setOpen(false)}
        >
          X
        </h1>
        <Formik
          initialValues={{
            name: update?.name,
            email: update?.email,
            phone: update?.phone,
            instagram: update?.instagram,
            github: update?.github,
            linkedin: update?.linkedin,
            password: "",
            image: update?.image,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              {/* Name Field */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Phone Field */}
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700">
                  Phone
                </label>
                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your phone number"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Instagram Link */}
              <div className="mb-4">
                <label htmlFor="instagram" className="block text-gray-700">
                  Instagram Profile
                </label>
                <Field
                  type="url"
                  name="instagram"
                  id="instagram"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your Instagram URL"
                />
                <ErrorMessage
                  name="instagram"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* GitHub Link */}
              <div className="mb-4">
                <label htmlFor="github" className="block text-gray-700">
                  GitHub Profile
                </label>
                <Field
                  type="url"
                  name="github"
                  id="github"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your GitHub URL"
                />
                <ErrorMessage
                  name="github"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* LinkedIn Link */}
              <div className="mb-4">
                <label htmlFor="linkedin" className="block text-gray-700">
                  LinkedIn Profile
                </label>
                <Field
                  type="url"
                  name="linkedin"
                  id="linkedin"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your LinkedIn URL"
                />
                <ErrorMessage
                  name="linkedin"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Image Upload */}
              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700">
                  Profile Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onClick={()=>saveImage}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
               
              
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Change Password Dropdown */}
              <div className="mb-4">
                <label
                  htmlFor="change-password"
                  className="block text-gray-700"
                >
                  Change Password?
                </label>
                <select
                  id="change-password"
                  onChange={(e) => setShowPassword(e.target.value === "yes")}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {/* Password Field (conditionally rendered) */}
              {showPassword && (
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700">
                    New Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Enter your new password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none"
              >
                Update Profile
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateProfile;
