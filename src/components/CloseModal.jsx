import React from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const CloseModal = ({setOpen,onClick}) => { 

  return (
    <div className="absolute top-10 right-10 z-20 text lg:top-4 lg:right-4 " onClick={onClick}>
      <IoCloseCircleSharp
        className="size-10 text-black lg:text-white"
        onClick={() => {
          setOpen(false)
          console.log("click in this button")
        
        }}
      />
    </div>
  );
}

export default CloseModal