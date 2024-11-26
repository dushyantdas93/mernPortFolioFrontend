import axios from "axios";
import toast from "react-hot-toast";

// import {  useNavigate } from "react-router-dom";
const backend_url = "http://localhost:8080/api/v1/"

export const UseGet = async(url,values)=>{
    // const navigate = useNavigate()
 
    try {
              const res = await axios.get(
                  `${backend_url}${url}`,
                  values
              );
              if (res && res.data.success) {
                  toast.success(res.data.message);
                // setAuth({ ...auth, user: res.data.user, token: res.data.token })
               
                
              } else {
                  toast.error(res.data.message);
              }
        
          } catch (error) {
              toast.error("something went wrong")
          }

       
        // Perform login logic or API call here
}