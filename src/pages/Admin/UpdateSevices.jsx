


import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CloseModal from "../../components/CloseModal";
import { UsePost } from "../../Customhook/UsePost";
import { saveImage } from "../../utils/uploadToCloudinary";
import { useLocation, useParams } from "react-router-dom";
import { UseUpdate } from "../../Customhook/UseUpdate";
import ClosePage from "../../components/ClosePage";



const UpdateServices = () => {
  
 const location = useLocation();
  const {serviceId} = useParams()
  const { state } = location;

  // console.log("location : ",location.pathname)


  const [url, setUrl] = useState(state.img);
  const uploadImage = async(file)=>{
    try {
      const imageUrl = await saveImage(file);
      
      // const [url, setUrl] = useState('');
      // onChange={(event)=>uploadImage(event.target.files[0])}
     

      // UseUpdate(location, { ...values, image: url });
      setUrl(imageUrl);
    } catch (error) {
      console.log("Error while uploading image to cloudinary: ",error);
    }
  }


  

  useEffect(()=>{
    if(!state){
      // call api
    }

  },[serviceId])



  // Validation schema
  const validationSchema = Yup.object({
    img: Yup.string()
      ,
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    description: Yup.string()
      .min(20, "Description must be at least 20 characters")
      .required("Description is required"),
      recommended: Yup.boolean()
      .required("Recommendation status is required"),
  });


  // Handle form submission
  const handleSubmit = async (values) => {
    // UsePost("updateServices/create",  {...values,img:url});
    // console.log("Form Values:", {...values,image:url});
UseUpdate(location,{...values,image:url})

  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen fixed w-full bg-black  bg-opacity-75 backdrop-blur-sm top-0 right-0 z-10`}
    >
      <ClosePage/>
      <div className="w-full max-w-lg p-6  rounded-lg shadow-lg bg-white z-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Services
        </h2>

        <Formik
          initialValues={{
            img: state?.img,
            name: state?.name,
            description: state?.description,
            recommended: state?.recommended,
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
                  onChange={(event) => uploadImage(event.target.files[0])}
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
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
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
                Create Service
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdateServices;
