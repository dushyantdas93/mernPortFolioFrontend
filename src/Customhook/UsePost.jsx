import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";

// import {  useNavigate } from "react-router-dom";
const backend_url = "http://localhost:8080/api/v1/"

export const UsePost = async(url,values)=>{
    // const navigate = useNavigate()
    const {auth,setAuth}=useAuth();
 
    try {
              const res = await axios.post(
                  `${backend_url}${url}`,
                  values
              );
              if (res && res.data.success) {
                //   toast.success(res.data.message);
                  console.log(res,"response from the logun")
                // setAuth({user: res.data.user, token: res.data.token })
                // localStorage.setItem("auth",JSON.stringify(res.data))   
                
              } else {
                  toast.error(res.data.message);
              }
        
          } catch (error) {
              toast.error("something went wrong")
          }

       
        // Perform login logic or API call here
}