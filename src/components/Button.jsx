import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({text="Create",url,className,onClick}) => {
  const navigate = useNavigate()
  // console.log(url)
  return (
    <div>
        <button onClick={onClick} className={`${className}  px-2 py-1 border rounded-lg  font-semibold`} >{text}</button>
    </div>
  )
}

export default Button