import axios from "axios";
import toast from "react-hot-toast";
import { host } from "../utils/constant";
import { useNavigate } from "react-router-dom";

export const UseUpdate = async (location, values) => {
  const url = location?.pathname;

  

  // console.log(host, url);
  try {
    const response = await axios.put(`${host}${url}`, values);
    // console.log(response);

    // Show success toast
    toast.success("Update successful!");
    
    return response; // Return response for the caller to handle navigation
  } catch (error) {
    console.error("Error updating user:", error);

    // Show error toast
    toast.error("Failed to update. Please try again.");

    throw error; // Throw error so the caller can handle it
  }
};
