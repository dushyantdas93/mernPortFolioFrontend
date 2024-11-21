import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import { UsePost } from "../Customhook/UsePost";
import { useAuth } from "../context/auth";


const Login = () => {
  const navigate = useNavigate(); // To navigate to other pages
  const url = "auth/login"
  const [auth,setAuth] = useAuth()
  

  // Yup Validation Schema
// 
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
  });

  // Handle Form Submission
  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    const res = UsePost(url,values)
    if(res){
      
        navigate("/admin/")

      
      // localStorage.setItem("auth",JSON.stringify(res.data))

    }

    
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Login
        </h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
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

              {/* Password Field */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-6">
                <button
                  type="submit"
                                  disabled={isSubmitting}
                                 
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none"
                >
                  Login
                </button>
                <Link to="/reset">
                  <button
                    type="button"
                    className="text-blue-500 hover:underline focus:outline-none"
                  >
                    Reset Password
                  </button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>

        {/* Back to User Page */}
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => navigate("/")} // Navigates to the user page
            className="text-gray-700 hover:underline"
          >
            Back to User Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
