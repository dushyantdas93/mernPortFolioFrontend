import React, { useEffect } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const Navbar = ({ menu, setMenu }) => {
  const navigate = useNavigate()
  const [auth,setAuth] = useAuth()

  useEffect(()=>{
    console.log("from navbar: ",auth);
  },[auth])
  return (
    <div className="lg:hidden bg-gray-200 w-full flex items-center px-6 text-xl font-bold justify-between border border-gray-300-b py-3 fixed top-0 z-10">
      <h1 className=" text-2xl font-bold " onClick={() => {auth?.token ?  navigate("/admin") : navigate("/login")  }}>
        {" "}
        {!auth?.token ? "Portfolio" : auth?.user?.name}
      </h1>
      {menu ? (
        <IoClose
          className="font-bold"
          onClick={() => {
            setMenu(!menu);
          }}
        />
      ) : (
        <HiOutlineMenuAlt4
          className="font-bold"
          onClick={() => {
            setMenu(!menu);
          }}
        />
      )}
    </div>
  );
};

export default Navbar;
