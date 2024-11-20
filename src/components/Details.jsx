import React from "react";
import price from "/images/single-work.svg";
import { MdOutlineReadMore } from "react-icons/md";

const Details = () => {
  return (
    <div className=" w-screen  lg:w-4/6 h-screen  mx-auto  flex lg:px-6 justify-center items-center relative">
      <button className="border p-2 rounded-full absolute  top-2 lg:top-10 right-2 lg:-right-10 font-semibold text-xl lg:text-3xl">
        x
      </button>
      <div className="w-80 lg:w-5/6   rounded-3xl border border-gray-400 py-6 lg:p-0">
        <img src={price} className="w-full mx-auto p-2 lg:p-8 rounded-3xl" />
        <div className="p-2 lg:px-8 flex flex-col gap-5 lg:pb-6">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Guest App Walkthrough Screens
          </h1>
          <p className="text-s lg:text-lg h-30">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            hendrerit nibh in massa semper rutrum. In rhoncus eleifend mi id
            tempus. Donec consectetur, libero at pretium euismod, nisl felis
            lobortis urna, id tristique nisl lectus eget ligula.
          </p>
          <button className="bg-red-500 px-4 py-1 rounded-full font-semibold lg:text-xl lg:px-6 lg:py-2 text-white w-32 mx-auto">
            Hire me{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
