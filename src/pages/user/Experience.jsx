import React, { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import bg from "/images/dots-bg-light.svg";
import Button from "../../components/Button";
import EditDelete from "../../components/EditDelete";
import { useAuth } from "../../context/auth";
import CreateCompletion from "../Admin/CreateCompletion";
import { UseGet } from "../../Customhook/UseGet";

const Experience = () => {
  const [auth, setAuth] = useAuth();

  const [card, setCard] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    (async () => {
      const { data } = await UseGet("updateCompletion/get");
      console.log(data?.getAll);
      setCard(data?.getAll);
    })();

    // console.log(card)
  }, []);

  return (
    <div className=" w-full lg:w-4/6  mx-auto  flex  flex-col lg:px-6 justify-around gap-10 py-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl lg:text-4xl py-2 lg:py-10 px-6 lg:px-0 relative">
          <img src={bg} alt="" className="absolute -left-2  lg:-left-5 " />
          Experience
        </h1>
        {auth?.token ? <Button onClick={() => setOpen(true)} /> : ""}
      </div>
      <div className="w-full  flex flex-col lg:flex-row gap-4 justify-around px-5 relative">
        {open ? <CreateCompletion className={""} setOpen={setOpen} /> : ""}
        <div className="w-full lg:w-1/2 border border-gray-300 rounded-lg px-5 shadow-xl relative">
          {card
            ?.filter((item) => item.category !== "Job")
            .map((item, idx) => {
              return (
                <div key={idx} className="w-full p-2 relative ">
                  <div className=" w-full flex  items-center gap-6 relative  justify-between">
                    <FaGraduationCap size={24} />
                   
                    <h1 className="flex gap-10">
                      {item?.isPresent ? "Present" : item?.yearOfCompletion}{" "}
                      
                    </h1>
                    <h1> {item?.percentage}%</h1>
                    {auth?.token ? (
                      <EditDelete url={"updateCompletion"} item={item} />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="border-l-2 border-gray-300 ml-2  w-full px-8 py-6">
                    <h1 className="text-lg font-semibold">{item?.name}</h1>
                    <p>{item?.description}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="w-full lg:w-1/2 border border-gray-300 rounded-lg px-5 shadow-xl">
          {card
            ?.filter((item) => item.category == "Job")
            .map((item, idx) => {
              return (
                <div key={idx} className="w-full p-2">
                  <div className=" w-full flex  items-center gap-6 justify-between ">
                    <FaBagShopping />
                    <h1>
                      {item?.isPresent ? "Present" : item?.yearOfCompletion}
                    </h1>
                    {auth?.token ? (
                      <EditDelete url={"updateCompletion"} item={item} />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="border-l-2 border-gray-300 ml-2  w-full px-8 py-6">
                    <h1 className="text-lg font-semibold">{item?.name}</h1>
                    <p>{item?.description}</p>
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
