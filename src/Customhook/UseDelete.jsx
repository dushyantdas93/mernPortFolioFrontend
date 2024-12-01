import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {host} from "../utils/constant"


export const useDelete = async (itemId, url) => {



   
 


  try {
    const res = await axios.delete(`${host}/${url}/${itemId}`);
    if (res && res.data.success) {
        toast.success(res.data.message);
  
     
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


