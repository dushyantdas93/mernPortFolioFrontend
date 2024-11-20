import React from "react";
import map from "/images/map-light.png";
import bg from "/images/dots-bg-light.svg";

const GetInTouch = () => {
  return (
    <div className=" w-full lg:w-4/6  mx-auto  flex  flex-col lg:px-6 justify-around gap-10 pb-14">
      <h1 className="font-bold text-2xl lg:text-4xl py-2 lg:py-10 px-6 lg:px-0 relative">
        <img src={bg} alt="" className="absolute -left-2  lg:-left-5 " />
        Get In touch
      </h1>
      <div className="px-6 lg:p-0 flex flex-col lg:flex-row">
        <div className="relative w-full  lg:w-1/3 h-16 lg:h-40">
          <img
            src={map}
            alt=""
            className="h-42  hidden  lg:block absolute top-0 "
          />
          <h1 className="font-bold text-xl">Let's talk about everything!</h1>
          <p className="">Don't like forms? Send me an email. 👋</p>
        </div>
        <div className="w-full  lg:w-2/3 ">
          <form action="" className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              name="fullname"
              className="w-full h-10 px-2 text-center rounded-full border border-gray-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Email address"
              name="email"
              className="w-full h-10 px-2 text-center rounded-full border border-gray-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="w-full h-16 px-2 text-center rounded-full border border-gray-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Message"
              name="message"
              className="w-full h-36 px-2 text-center rounded-3xl border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-500 px-4 py-1 rounded-full font-semibold lg:text-xl lg:px-6 lg:py-2 text-white "
            >
              Send Message{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
