import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Button from "./Button";

const Crousel = () => {
  const arr1 = [
    "https://t3.ftcdn.net/jpg/05/35/47/38/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCiIZU2_B-cwF3LgRbkk9p0oEe4BZg8l9fxw&s",
    "https://images.pexels.com/photos/1869322/pexels-photo-1869322.jpeg?cs=srgb&dl=pexels-brett-sayles-1869322.jpg&fm=jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9vFh93Vn1dtnxnuMZ22SWL8sja_8oV9pZQ&s",
    "https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-cute-wallpapers-cats-wallpapers-hd-4k-wallpapers-desktop-wallpapers-hd-image_2562853.jpg",
  ];

  const [slide, setslide] = useState(0);
  console.log(slide);

  setTimeout(() => {
    setslide(slide === arr1.length - 1 ? 0 : slide + 1);
  }, 10000);

  return (
    <>
      <div className="w-full   flex justify-center items-center relative">
        <div
          className={`bg-gray-400 text-center py-2 capitalize fixed top-0 w-full 
             px-6`}
        >
          <h1 className="text-4xl font-semibold text-red-800">Carousel</h1>
        </div>

        <Button
          text={"pre"}
          className={""}
          onClick={() => setslide(slide === 0 ? arr1.length - 1 : slide - 1)}
        />

        {arr1.map((item, idx) => (
          <img
            src={item}
            alt=""
            className={`${
              slide == idx ? "inline" : " hidden "
            } rounded-xl h-5/6`}
          />
        ))}
        <div className="flex  absolute bottom-24 gap-2 items-center">
          {arr1.map((_, idx) => {
            return (
              <button
                className={`${
                  slide == idx ? " bg-white h-4 w-8 " : " bg-gray-400 size-4 "
                }  rounded-full border flex items-center justify-center text-sm absolute `}
                onClick={() => setslide(idx)}
              ></button>
            );
          })}
          <Button
            text={"Nest"}
            className={" cursor-pointer"}
            onClick={() => setslide(slide === arr1.length - 1 ? 0 : slide + 1)}
          />
        </div>

      </div>
    </>
  );
};

export default Crousel;
