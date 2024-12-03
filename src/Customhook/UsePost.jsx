import axios from "axios";
import toast from "react-hot-toast";
import { host } from "../utils/constant";
// import { useNavigate } from "react-router-dom";

export const UsePost = async (url, values) => {
  // console.log("host is ", host); // Debugging host

  try {
    const res = await axios.post(`${host}/admin/${url}`, values);

    if (res.data.success) {
      toast.success(res.data.message);
      return res; // Return response on success
    } else {
      toast.error(res.data.message);
      return null; // Explicit return for failure case
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong";
    toast.error(errorMessage); // Show detailed error
    return null; // Explicit return for error case
  }
};
