import React from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const CloseModal = ({setOpen,onClick}) => { 

  return (
    <div className="absolute top-4 right-4 " onClick={onClick}>
      <IoCloseCircleSharp
        className="size-10 text-white"
        onClick={() => {
          setOpen(false)
          console.log("click in this button")
        
        }}
      />
    </div>
  );
}

export default CloseModal