import React, { useEffect, useState } from "react";
import favicon from "/images/dushyant.jpg";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaHashnode } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";

import { FaGithub } from "react-icons/fa";

import { useAuth } from "../../context/auth";
import { Link, useNavigate } from "react-router-dom";




const Hireme = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  useEffect(() => {}, []);
 

  const icons = [
    {
      socalIcon: FaInstagram,
      link:
        auth?.user?.instragram || "https://www.instagram.com/dushyantdas93/",
    },
    {
      socalIcon: FaGithub,
      link: auth?.user?.git || "https://github.com/dushyantdas93",
    },
    {
      socalIcon: FaLinkedin,
      link:
        auth?.user?.linkedIn ||
        "https://www.linkedin.com/in/dushyant-manikpuri-b2433b259/",
    },
    {
      socalIcon: FaHashnode,
      link: "",
    },
    {
      socalIcon: FaMedium,
      link: "",
    },
  ];
  return (
    <div className=" w-full  flex  flex-col justify-center lg:justify-around  items-center    py-10  h-full lg:h-auto bg-gray-200 text-gray-600">
      <div className=" w-full lg:w-1/3 flex flex-col items-center pt-16  gap-4 lg:gap-6 ">
        <img
          src={favicon}
          alt=""
          className="size-32 drop-shadow-2xl rounded-full"
        />
        <h1 className="font-bold text-2xl lg:text-4xl text-gray-600">
          {auth?.token ? auth?.user?.name : "Dushyant Manikpuri"}
        </h1>
        <h3 className="text-md lg:text-lg ">I'm Frontend Developer</h3>
        <div className="flex items-center justify-center w-1/2 gap-4 lg:gap-6 ">
          {icons.map((Icon, index) => (
            <Link to={Icon.link} target="_blank">
              {" "}
              {Icon.link && (
                <Icon.socalIcon
                  key={index}
                  className="size-7 lg:size-9 drop-shadow-2xl "
                />
              )}
            </Link>
          ))}
        </div>
        <button
          className="bg-red-500  px-4 py-1 rounded-full font-semibold lg:text-xl lg:px-6 lg:py-2 text-white"
          onClick={() => {
            auth?.token ? navigate(`/admin/updateProfile/1 `) : navigate("/");
          }}
        >
          {!auth?.token ? " Hire me" : "Update"}
        </button>
      </div>
      {/* <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold pt-4">Scroll down</h1>
              <BsMouse size={32} />
             
      </div> */}
    </div>
  );
};

export default Hireme;
