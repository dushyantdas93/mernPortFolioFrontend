import React, { useEffect, useState } from "react";
import client5 from "/images/blog/3.svg";
import bg from "/images/dots-bg-light.svg";
import { useAuth } from "../../context/auth";
import Button from "../../components/Button";
import EditDelete from "../../components/EditDelete";
import CreatePost from "../Admin/CreatePost";
import { UseGet } from "../../Customhook/UseGet";
import { Link } from "react-router-dom";

const LatestPost = () => {
  const [auth, setAuth] = useAuth();
  const [open,setOpen] = useState(false)



  const [card, setCard] = useState([]);
  
useEffect(() => {
  (async () => {
    const { data } = await UseGet("updatePost/get");
    console.log(data?.getAll)
    setCard(data?.getAll);
  })();

  console.log(card);
}, []);
  


  return (
    <div className=" w-full lg:w-4/6  mx-auto  flex  flex-col lg:px-6 justify-around gap-10 py-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl lg:text-4xl py-2 lg:py-10 px-6 lg:px-0 relative">
          <img src={bg} alt="" className="absolute -left-2  lg:-left-5 " />
          Latest Posts
        </h1>
        {auth?.token ? <Button onClick={()=>setOpen(true)} /> : ""}
      </div>

      <div className="w-full  flex flex-wrap gap-4 justify-around relative">
        {open ? <CreatePost setOpen={setOpen}/> : ""}
        {card?.map((item, idx) => {
          return (
            <Link key={idx} to={item?.link}>
              <div className="relative w-80 lg:w-72 rounded-lg border border-gray-300  flex flex-col items-center justify-center text-start  overflow-hidden shadow-lg">
                {auth?.token ? (
                  <EditDelete
                    url={"updatePost"} item={item}
                    className={"absolute top-4 -right-24"}
                  />
                ) : (
                  ""
                )}
                <div className="bg-red-500  absolute -top-1 rounded-lg left-1 px-3 py-2 text-white">
                  <h1>Review </h1>
                </div>
                <img
                  src={!item?.image ? item?.image : client5}
                  alt=""
                  className="size-42"
                />
                <div className=" bg-gray-200 px-2 w-full h-20 flex flex-col justify-between">
                  <h1 className="font-semibold text-lg">
                    {item.imageDescription}
                  </h1>
                  <p className="text-sm">{item.date}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LatestPost;
