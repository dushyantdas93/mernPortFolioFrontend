import React from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const ClosePage = ({onClick}) => { 
  const navigate = useNavigate()
  return (
    <div className='absolute top-4 left-20  ' onClick={onClick}>
<IoCloseCircleSharp onClick={()=>{

  navigate(-1)
  }}/>
    </div>
  )
}

export default ClosePage