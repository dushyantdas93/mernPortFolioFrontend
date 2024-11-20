import React, { useEffect, useState } from 'react'

import { useNavigate, Outlet } from "react-router-dom"
import axios from "axios"
// import Spinner from '../Spinner.jsx'
import { useAuth } from '../context/auth.jsx'
import Spinner from './Spinner.jsx'

const Private = () => {
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth()
    const navigate = useNavigate()
    console.log(auth)
    
    useEffect(() => {
        const authChech = () => {
            // const res = await axios.get(
            //   "http://localhost:8080/api/v1/auth/dashboard");
              const res = localStorage.getItem("auth")
             
        
            if (res) {
                setOk(true)
            } else {
                setOk(false)
            }
        }
        if(auth?.token) authChech()
    },[auth?.token])
  return ok ? <Outlet/> : <Spinner />
}

export default Private