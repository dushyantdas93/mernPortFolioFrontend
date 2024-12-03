import axios from "axios";
import toast from "react-hot-toast";
import { host } from "../utils/constant.js";


// import {  useNavigate } from "react-router-dom";
const backend_url = host

export const UseGet = async (url)=>{
    // const navigate = useNavigate()
 
    try {
              const res = await axios.get(
                  `${backend_url}/admin/${url}`
              );
              if (res && res.data.success) {
                //   toast.success(res.data.message);
            
               
                return res
              } else {
                  toast.error(res.data.message);
              }
        
          } catch (error) {
              toast.error("something went wrong")
return [];
          }

       
        // Perform login logic or API call here
}