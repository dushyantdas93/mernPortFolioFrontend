import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = ({ images, setIsSlider }) => {
  const [imageIndex, setImageIndex] = useState(null);
  useEffect(() => {
    setIsSlider(imageIndex);
  }, [imageIndex]);
  const changeSlider = (direction) => {
    if (direction == "left") {
      //imageIndex%images.length --> circular iteration
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1); //< [0,1,2,3,4,5] >
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };
  return (
    <div>
      <div className="w-full h-[350px] flex gap-[20px] " id="slider">
        {imageIndex !== null && (
          <div
            className="w-screen h-screen absolute flex top-0 right-0 bg-black justify-around items-center"
            id="fullslider"
          >
            <div
              className="flex-1 text-white  text-8xl font-bold"
              id="arrow"
              onClick={() => changeSlider("left")}
            >
              <IoIosArrowBack />
            </div>

            <div className="flex-10" id="imgcontainer">
              <img
                src={images[imageIndex]}
                className="h-full w-full object-container bg-white"
              />
            </div>

            <div
              className="flex-1 text-white flex text-8xl font-bold justify-end"
              id="arrow"
              onClick={() => changeSlider("right")}
            >
              <IoIosArrowForward />
            </div>
            <div
              className="text-white absolute top-0 right-0 text-4xl font-bold cursor-pointer p-[50px]"
              id="close"
              onClick={() => setImageIndex(null)}
            >
              x
            </div>
          </div>
        )}

        <div className="w-[75%]" id="bigimage">
          <img
            src={images[0]}
            className="h-full w-full cursor-pointer object-cover rounded-sm"
            onClick={() => setImageIndex(0)}
          />
        </div>

        <div
          className="w-[20%] flex flex-col justify-center gap-5 py-auto"
          id="smallimage"
        >
          {images.slice(0).map((image, index) => (
            <img
              src={image}
              className="h-[100px] w-full object-fill rounded-lg "
              key={index}
              onClick={() => setImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
