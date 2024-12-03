import React from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const ClosePage = ({onClick}) => { 
  const navigate = useNavigate()
  return (
    <div className='absolute top-4 right-4 ' onClick={onClick}>
<IoCloseCircleSharp className='size-10 text-black lg:text-white' onClick={()=>{

  navigate(-1)
  }}/>
    </div>
  )
}

export default ClosePage