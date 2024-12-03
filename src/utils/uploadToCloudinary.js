export const saveImage = async (file) => {
  console.log(file);
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "jayxtlmw");
  data.append("cloud_name", "dywltditz");

  try {
    if (!file) {
      throw new Error("Please upload an image");
    }

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dywltditz/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const cloudData = await res.json();
    console.log("CLOUDINARY", cloudData.url);
    return cloudData.url;
    // toast.success("Image uploaded successfully");
  } catch (error) {
    throw error;
  }
};

export const savePdf = async (file) => {
  try {
    // Validate if the file is provided
    if (!file) {
      throw new Error("Please upload a file.");
    }

    // Validate if the file is a PDF
    if (file.type !== "application/pdf") {
      throw new Error("Only PDF files are allowed.");
    }

    // Prepare the form data
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "jayxtlmw");
    data.append("cloud_name", "dywltditz");

    // Upload to Cloudinary
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dywltditz/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    // Handle the response
    const cloudData = await res.json();
    if (!res.ok) {
      throw new Error(cloudData.error?.message || "Failed to upload the file.");
    }

    console.log("CLOUDINARY", cloudData.url);
    return cloudData.url;
  } catch (error) {
    console.error("Error during file upload:", error.message);
    throw error; // Re-throw the error for further handling
  }
};
