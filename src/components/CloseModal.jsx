import React from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const CloseModal = ({setOpen,onClick}) => { 
  const navigate = useNavigate()
  return (
    <div className='absolute top-4 left-20  ' onClick={onClick}>
<IoCloseCircleSharp onClick={()=>{
  setOpen(false)
 
  }}/>
    </div>
  )
}

export default CloseModal