import React, { useEffect, useState } from "react";
import favicon from "/images/dushyant.jpg";
import bg from "/images/dots-bg-light.svg";
import Button from "../../components/Button";
import EditDelete from "../../components/EditDelete";
import { useAuth } from "../../context/auth";
import CreateAboutMe from "../Admin/CreateAboutMe";
import { UseGet } from "../../Customhook/UseGet";

const AboutMe = () => {
  const [auth, setAuth] = useAuth();
  const [open,setOpen] = useState(false)

  useEffect(()=>{
  
  },[auth])
  const getColor = (percent) => {
    if (percent >= 0 && percent <= 20) {
      return "bg-red-500"; // Low percent, red color
    } else if (percent > 20 && percent <= 50) {
      return "bg-yellow-500"; // Medium percent, yellow color
    } else if (percent > 30 && percent <= 80) {
      return "bg-green-500"; // Higher percent, green color
    } else if (percent > 80 && percent <= 100) {
      return "bg-blue-500"; // Almost full, blue color
    }
    return "bg-gray-300"; // Default color for out-of-range values
  };

  
  // Array of skill percentages
  
  
  const [card,setCard] = useState([])


  useEffect(() => {
    (async () => {
      const { data } = await UseGet("updateAboutMe/get");
      console.log(data?.getAll)
      setCard(data?.getAll );

      
    })();
    
     console.log(card[0]?.resume)
  }, []);

 
  
  
 

  return (
    <div className=" w-full lg:w-4/6  mx-auto  flex  flex-col lg:px-6 justify-around gap-10 text-gray-600 ">
      <div className="flex   justify-between items-center  ">
        <h1 className="font-bold text-2xl lg:text-4xl py-2 lg:py-10 px-6 lg:px-0 flex relative text-gray-600">
          <img src={bg} alt="" className="absolute -left-5  " /> About Me
        </h1>
        {auth?.token ? <Button onClick={() => setOpen(true)} /> : " "}
      </div>
      <div className="">
        {open ? <CreateAboutMe setOpen={setOpen} /> : " "}

        <div className="flex flex-col lg:flex-row items-center justify-around w-full h-full gap-10 ">
          <img
            src={favicon}
            alt=""
            className="size-32 drop-shadow-2xl rounded-full"
          />
          <div className="w-[90%] lg:w-[70%] border border-gray-300 flex flex-col lg:flex-row rounded-lg px-6 h-auto lg:gap-5 shadow- ralative">
            {auth?.token ? (
              <EditDelete
                url={"updateAboutMe"} item={card[0]}
                className={"absolute top-2 left-64 lg:left-0"}
              />
            ) : (
              ""
            )}

            <div className="w-full lg:w-1/2 py-6 flex flex-col gap-5 ">
              <p className="">{card[0]?.description}</p>
              {/* <button  className="bg-red-500  px-2 w-40 py-1 rounded-full font-semibold lg:text-lg text-white">
                Download CV
              </button> */}

<button
  onClick={() => {
    window.open(
      card[0]?.resume,
      "_blank"
    );
  }}
  className="bg-red-500 px-2 w-40 py-1 rounded-full font-semibold lg:text-lg text-white"
>
  Download CV
</button>


            </div>
            <div className="w-full lg:w-1/2  flex flex-col h-[90] justify-between gap-4 pb-6  lg:justify-around ">
              {[
                { name: "Development", percent: card[0]?.webPercentage },
                { name: "Design", percent: card[0]?.designPercentage },
                { name: "Animation", percent: card[0]?.animationPercentage },
              ]?.map((skill, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex justify-between items-center flex-col gap-1"
                  >
                    <div className="w-full flex justify-between ">
                      <h1 className="capitalize">{skill.name}</h1>
                      <p>{skill.percent}%</p>
                    </div>
                    <div className="w-full h-3 border border-gray-300  rounded-lg">
                      <div
                        className={`h-full ${getColor(skill.percent)}`}
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap text-center items-center justify-around w-full lg:p-10 gap-4">
          {[
            { title: "Projects complete", count: card[0]?.completedProjects },
            { title: "Projects ongoing", count: card[0]?.ongoingProjects },
            // { title: "Projects complete", count: card[0]?.animationPercentage },
            { title: "Projects Remaning", count: card[0]?.remeningProjects },
          ].map((item, idx) => {
            return (
              <div key={idx} className="">
                <h1 className="text-2xl lg:text-4xl font-bold">{item.count}</h1>
                <p className="text-lg font-semibold text-gray-500 w-46">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
