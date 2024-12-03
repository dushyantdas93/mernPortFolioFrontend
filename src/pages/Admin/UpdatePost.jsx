import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CloseModal from "../../components/CloseModal";
import { useLocation, useParams } from "react-router-dom";
import { saveImage } from "../../utils/uploadToCloudinary";
import { UseUpdate } from "../../Customhook/UseUpdate";
import ClosePage from "../../components/ClosePage";

const validationSchema = Yup.object({
  imageDescription: Yup.string().required("Image description is required"),
  link: Yup.string().url("Invalid URL format").required("Link is required"),
  date: Yup.date()
    .required("Date is required")
    .nullable()
    .min(new Date(), "Date cannot be in the past"), // Optional: ensures date isn't in the past
  image: Yup.string()
   ,
});

const UpdatePost = ({ setOpen }) => {

  const location = useLocation();
  const { serviceId } = useParams();
  const { state } = location;

  const [url, setUrl] = useState(state?.image);

  const uploadImage = async (file) => {
    try {
      const imageUrl = await saveImage(file);

      // const [url, setUrl] = useState('');
      // onChange={(event)=>uploadImage(event.target.files[0])}
      // {...values,image:url}
      // UseUpdate(location, { ...values, image: url });
      setUrl(imageUrl);
    } catch (error) {
      console.log("Error while uploading image to cloudinary: ", error);
    }
  };


  const formik = useFormik({
    initialValues: {
      imageDescription: state?.imageDescription,
      link: state?.link,
      date: state?.date,
      image: state?.image,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", { ...values, image: url });
      UseUpdate(location, { ...values, image: url });
    },
  });

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("image", file);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen fixed w-full bg-black  bg-opacity-75 backdrop-blur-sm top-0 right-0 z-10`}
    >
      <ClosePage />
   <div className="bg-white rounded-lg p-10"></div>
    </div>
  );
};

export default UpdatePost;
