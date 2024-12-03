import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CloseModal from "../../components/CloseModal";
import { saveImage } from "../../utils/uploadToCloudinary";
import { UsePost } from "../../Customhook/UsePost";

const CreatePricing = ({ setOpen }) => {

  const [url, setUrl] = useState('');
  const uploadImage = async(file)=>{
    try {
      const imageUrl = await saveImage(file);
      
      // const [url, setUrl] = useState('');
      // onChange={(event)=>uploadImage(event.target.files[0])}
    
      // UsePost("updateWork/create",  {...values,screenshot:url});
      setUrl(imageUrl);
    } catch (error) {
      console.log("Error while uploading image to cloudinary: ",error);
    }
  }

  // Validation Schema
  const validationSchema = Yup.object({
    category: Yup.string().required("Category is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .positive("Price must be a positive number")
      .required("Price is required"),
    supports: Yup.string().required("Supports field is required"),
    image:  Yup.mixed()
    .test(
      "fileType",
      "Only image files are allowed",
      (value) =>
        !value ||
        (value &&
          ["image/jpeg", "image/png", "image/jpg"].includes(value.type))
    )
    .nullable(),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    alert("Pricing plan updated successfully!");
     UsePost("updatePricingPlan/create",  {...values,image:url});
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen fixed w-full bg-black  bg-opacity-75 backdrop-blur-sm top-0 right-0 z-10">
      <CloseModal setOpen={setOpen} />
      <div className="w-full max-w-lg p-10 bg-white rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Update Pricing Plan
        </h2>

        <Formik
          initialValues={{
            category: "",
            description: "",
            price: "",
            supports: "",
            image: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
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
                  <option value="basic">Basic</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                </Field>
                <ErrorMessage
                  name="category"
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

              {/* Price */}
              <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700">
                  Price
                </label>
                <Field
                  type="number"
                  name="price"
                  id="price"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter price"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Supports */}
              <div className="mb-4">
                <label htmlFor="supports" className="block text-gray-700">
                  Supports
                </label>
                <Field
                  type="text"
                  name="supports"
                  id="supports"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter supports"
                />
                <ErrorMessage
                  name="supports"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Image Upload */}
              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700">
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={(event) => uploadImage(event.target.files[0])}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Update Plan
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreatePricing;
