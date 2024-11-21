import React from 'react'

const Arrowbtn = ({text,className,onClick}) => {
  return (
    <div
      className={` absolute ${className} border px-5 rounded-lg bg-gray-300 text-gray-700 py-1 font-semibold`} onClick={onClick}
    >
      {text}
    </div>
  );
}

export default Arrowbtn