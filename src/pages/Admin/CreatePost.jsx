import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CloseModal from '../../components/CloseModal';

const validationSchema = Yup.object({
  imageDescription: Yup.string().required('Image description is required'),
  link: Yup.string()
    .url('Invalid URL format')
    .required('Link is required'),
  date: Yup.date()
    .required('Date is required')
    .nullable()
    .min(new Date(), "Date cannot be in the past"), // Optional: ensures date isn't in the past
});

const CreatePost = ({setOpen}) => {
  const formik = useFormik({
    initialValues: {
      imageDescription: '',
      link: '',
      date: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form values:', values);
    },
  });

  return (
    <div className="w-full max-w-md mx-auto absolute top-10 right-10">
        <CloseModal  setOpen={setOpen}/>
      <h1 className="text-xl font-bold mb-4">Form with Validation</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* Image Description Field */}
        <div className="mb-4">
          <label htmlFor="imageDescription" className="block text-sm font-semibold">
            Image Description
          </label>
          <input
            type="text"
            id="imageDescription"
            name="imageDescription"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imageDescription}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.imageDescription && formik.errors.imageDescription && (
            <div className="text-red-500 text-sm">{formik.errors.imageDescription}</div>
          )}
        </div>

        {/* Link Field */}
        <div className="mb-4">
          <label htmlFor="link" className="block text-sm font-semibold">
            Link
          </label>
          <input
            type="url"
            id="link"
            name="link"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.link}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.link && formik.errors.link && (
            <div className="text-red-500 text-sm">{formik.errors.link}</div>
          )}
        </div>

        {/* Date Field */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-semibold">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.date && formik.errors.date && (
            <div className="text-red-500 text-sm">{formik.errors.date}</div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
