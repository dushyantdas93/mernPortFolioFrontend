import React, { useEffect, useState } from "react";
import avatar from "/images/avatar-3.svg";
import client1 from "/images/client-1.svg";
import client2 from "/images/client-2.svg";
import client3 from "/images/client-3.svg";
import client4 from "/images/client-4.svg";
import client5 from "/images/client-5.svg";
import client6 from "/images/client-6.svg";
import client7 from "/images/client-7.svg";
import client8 from "/images/client-8.svg";
import bg from "/images/dots-bg-light.svg";
import Carousel from "react-responsive-carousel";
import { useAuth } from "../../context/auth";
import Button from "../../components/Button";
import EditDelete from "../../components/EditDelete";
import Arrowbtn from "../../components/Arrowbtn";
import CreateClientReview from "../Admin/CreateClientReview";
import { UseGet } from "../../Customhook/UseGet";

const Clients = () => {
  const [auth, setAuth] = useAuth();
 const [card, setCard] = useState([]);

 useEffect(() => {
   (async () => {
     const { data } = await UseGet("updateClientReview/get");
     console.log(data?.getAll);
     setCard(data?.getAll);
   })();

   console.log(card);
 }, [])
  
  
  const [slide, setslide] = useState(0);

  setTimeout(() => {
    setslide(slide === card.length - 1 ? 0 : slide + 1);
  }, 10000);

  const [open,setOpen] = useState(false)

  return (
    <div className=" w-full lg:w-4/6  mx-auto  flex  flex-col lg:px-6 justify-around gap-10 py-6 ">
      {open ? <CreateClientReview setOpen={setOpen}/> : ""}
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl lg:text-4xl py-2 lg:py-10 px-6 lg:px-0 relative">
          <img src={bg} alt="" className="absolute -left-2  lg:-left-5 " />
          Client & Reviews
        </h1>
        {auth?.token ? <Button onClick={()=>setOpen(true)} /> : ""}
      </div>

      <div className="w-full flex flex-wrap relative  items-center justify-center">
       {slide == 0 ? <Arrowbtn
          text={"<"}
          className={"left-0"}
          onClick={() => setslide(slide === 0 ? card.length - 1 : slide - 1)}
        /> : ''}
        {card?.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`${
                slide == idx ? "flex" : " hidden "
              }  w-full  flex-col gap-2  items-center px-6 py-5  relative`}
            >
              {auth?.token ? (
                <EditDelete
                  url={"updateClientReview"} item={item}
                  className={"absolute top-4 -right-32 lg:-right-96"}
                />
              ) : (
                ""
              )}
              <img
                src={!item.image ? item.image : avatar}
                className="drop-shadow-2xl"
              />
              <h1 className="font-bold text-lg">{item.title}</h1>
              <p className="">{item.description}</p>
              <div className="w-full text-center border border-gray-300 rounded-lg py-3 flex items-center h-32 lg:h-20 lg:w-2/4 mt-4 p-3  lg:p-6 shadow-xl">
                <p>{item.subdescription}</p>
              </div>
            </div>
          );
        })}
        <div className="flex absolute bottom-0   gap-2 items-center  ">
          {card.map((_, idx) => {
            return (
              <button key={idx}
                className={`${
                  slide == idx ? " bg-white h-4 w-8 " : " bg-gray-400 size-4 "
                }  rounded-full border flex items-center justify-center text-sm  `}
                onClick={() => setslide(idx)}
              ></button>
            );
          })}
        </div>
        {slide == 0 ? <Arrowbtn
          text={">"}
          className={"right-0 cursor-pointer"}
          onClick={() => setslide(slide === card.length - 1 ? 0 : slide + 1)}
        /> : ''}
      </div>

      <div className="w-full  flex items-center justify-center flex-wrap  gap-5">
        {[
          client1,
          client2,
          client3,
          client4,
          client5,
          client6,
          client7,
          client8,
        ].map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-2/5 lg:w-1/5 h-20   flex justify-center p-5 border border-gray-300 rounded-lg bg-gray-200 shadow-lg"
            >
              <img src={item} className="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
