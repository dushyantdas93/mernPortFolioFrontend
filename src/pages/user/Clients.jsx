import React from "react";
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

const Clients = () => {
  const [auth,setAuth] = useAuth()
  const card = [
    {
      img: avatar,
      name: "UI/UX design",
      role: "developer as a fronf",
      para: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
    },

    // {
    //   img: client5,
    //   name: "Web Development",
    //   role: "developer as a fronf",
    //   para: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    // },
    // {
    //   img: client5,
    //   name: "Photography",
    //   role: "developer as a fronf",
    //   para: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    // },
  ];

  return (
    <div className=" w-full lg:w-4/6  mx-auto  flex  flex-col lg:px-6 justify-around gap-10 py-6  ">
     <div className="flex justify-between">
     <h1 className="font-bold text-2xl lg:text-4xl py-2 lg:py-10 px-6 lg:px-0 relative">
        <img src={bg} alt="" className="absolute -left-2  lg:-left-5 " />
        Client & Reviews
      </h1>
      {auth ? <Button url={"/admin/updateClientReview"}/> : ''}
     </div>

      <div className="w-full flex flex-wrap">
        {card.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-full flex flex-col gap-2  items-center px-6 py-5  relative"
            >
              {auth ? <EditDelete className={"absolute top-4 -right-72"}/> : ''}
              <img src={avatar} className="drop-shadow-2xl" />
              <h1 className="font-bold text-lg">{item.name}</h1>
              <p className="">{item.role}</p>
              <div className="w-full text-center border border-gray-300 rounded-lg py-3 flex items-center h-32 lg:h-20 lg:w-2/4 mt-4 p-3  lg:p-6 shadow-xl">
                <p>{item.para}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <Carousel
        // showArrows={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div>
          <img src={} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={} />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src={} />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src={} />
          <p className="legend">Legend 6</p>
        </div>
      </Carousel> */}
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
