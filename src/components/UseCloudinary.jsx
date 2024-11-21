import React, { useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';

export function Usecloudinary({handleImage}) {
  const [image, setImage] = useState(null);
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

  console.log(url, "url is");

 
}


