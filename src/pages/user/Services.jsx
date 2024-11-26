import React, { useState } from "react";
import client5 from "/images/service-2.svg";
import bg from "/images/dots-bg-light.svg";
import Button from "../../components/Button";
import EditDelete from "../../components/EditDelete";
import { useAuth } from "../../context/auth";

const Services = () => {
  const [auth, setAuth] = useAuth();

  const card = [
    {
      img: client5,
      heading: "UI/UX design",
      para: "Creative professional crafting intuitive, user-centered designs that enhance functionality and user experience.",
    },
    {
      img: client5,
      heading: "Web Development",
      para: "Skilled developer building responsive, interactive websites using HTML, CSS, JavaScript, and frameworks.",
    },
    {
      img: client5,
      heading: "Backend Development",
      para: "Capturing moments through a lens, transforming scenes into visually compelling, storytelling images.",
    },
    {
      img: client5,
      heading: "MERN Developer",
      para: "Capturing moments through a lens, transforming scenes into visually compelling, storytelling images.",
    },
    {
      img: client5,
      heading: "Photography",
      para: "Capturing moments through a lens, transforming scenes into visually compelling, storytelling images.",
    },
  ];

    
  return (
    <div className=" w-full lg:w-4/6  mx-auto  flex  flex-col lg:px-6 justify-around gap-10 py-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-gray-600 text-2xl lg:text-4xl py-2 lg:py-10 px-6 lg:px-0 relative">
          <img src={bg} alt="" className="absolute -left-2  lg:-left-5 " />
          Services
        </h1>

        {auth?.token ? (
          <Button
            text={"create"}
            className={""}
            url={"/admin/updateServices"}
          />
        ) : (
          ""
        )}
      </div>

      <div className="w-full  flex flex-wrap gap-4 justify-around">
        {card.map((item, idx) => {
          return (
            <div
              key={idx}
              className="size-80  lg:size-72 relative rounded-lg border-gray-300 flex flex-col items-center justify-center gap-3 shadow-xl text-center bg-blue-400 px-6 hover:-translate-y-4 hover:scale-105 transform transition-transform duration-300 ease-out"
            >

          
         
                {" "}
                {auth?.token ? (
                  <EditDelete className={"absolute top-0 -right-28"} />
                ) : (
                  ""
                )}
          

              <img src={item.img} alt="" />
              <h1 className="font-bold text-lg">{item.heading}</h1>
              <p className="">{item.para}</p>
            </div>
          );
        })}
      </div>
      <h1 className="text-center text-sm lg:text-lg py-2 lg:py-10 px-2 lg:px-0">
        Looking for a custom job? Click here to contact me! 👋
      </h1>
    </div>
  );
};

export default Services;
