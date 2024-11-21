import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({text="Create",url,className}) => {
  const navigate = useNavigate()
  // console.log(url)
  return (
    <div>
        <button className={`${className} px-2 py-1 border rounded-lg  font-semibold`} onClick={()=>navigate(url)}>{text}</button>
    </div>
  )
}

export default Button