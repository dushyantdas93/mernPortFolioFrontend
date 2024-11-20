import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import bg from "/images/dots-bg-light.svg";

const Experience = () => {
  return (
    <div className=" w-full lg:w-4/6  mx-auto  flex  flex-col lg:px-6 justify-around gap-10 py-6">
      <h1 className="font-bold text-2xl lg:text-4xl py-2 lg:py-10 px-6 lg:px-0 relative">
        <img src={bg} alt="" className="absolute -left-2  lg:-left-5 " />
        Experience
      </h1>
      <div className="w-full  flex flex-col lg:flex-row gap-4 justify-around px-5">
        <div className="w-full lg:w-1/2 border border-gray-300 rounded-lg px-5 shadow-xl">
          {[
            {
              year: "2025",
              degree: "BTECH (CSE)",
              description: "",
              present: true,
            },
            {
              year: "2024",
              degree: "Course of computer concept    ",
              description: "",
              present: false,
            },
            {
              year: "2021",
              degree: "CGBSE 12TH",
              description: "",
              present: false,
            },
            {
              year: "2019",
              degree: "CGBSE 10TH",
              description: "",
              present: false,
            },
          ].map((item, idx) => {
            return (
              <div key={idx} className="w-full p-2">
                <div className=" w-full flex  items-center gap-6">
                  <FaGraduationCap size={24} />
                  <h1>
                    {item.year} {item.present ? "- present" : ""}{" "}
                  </h1>
                </div>
                <div className="border-l-2 border-gray-300 ml-2  w-full px-8 py-6">
                  <h1 className="text-lg font-semibold">{item.degree}</h1>
                  <p>
                    Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                    admodum perfecto.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full lg:w-1/2 border border-gray-300 rounded-lg px-5 shadow-xl">
          {[1, ].map((item, idx) => {
            return (
              <div key={idx} className="w-full p-2">
                <div className=" w-full flex  items-center gap-6">
                  <FaBagShopping />
                  <h1>2019 - Present</h1>
                </div>
                <div className="border-l-2 border-gray-300 ml-2  w-full px-8 py-6">
                  <h1 className="text-lg font-semibold">Academic Degree</h1>
                  <p>
                    Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                    admodum perfecto.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
