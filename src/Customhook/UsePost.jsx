import axios from "axios";
import toast from "react-hot-toast";
import { host } from "../utils/constant";


// import {  useNavigate } from "react-router-dom";
const backend_url = host

export const UsePost = async(url,values)=>{
    // const navigate = useNavigate()
 
    try {
              const res = await axios.post(
                  `${backend_url}${url}`,
                  values
              );
              if (res && res.data.success) {
                  toast.success(res.data.message);
               
               return res
                
              } else {
                  toast.error(res.data.message);
              }
        
          } catch (error) {
              toast.error("something went wrong")
          }

    
      
}