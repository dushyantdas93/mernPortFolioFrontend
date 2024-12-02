import React, { useEffect, useState } from "react";
import client5 from "/images/works/6.svg"; // Ensure this path is correct
import bg from "/images/dots-bg-light.svg";
import { MdOutlineReadMore } from "react-icons/md";
import { useAuth } from "../../context/auth";
import Button from "../../components/Button";
import EditDelete from "../../components/EditDelete";
import CreateWork from "../Admin/CreateWork";
import { UseGet } from "../../Customhook/UseGet";
import { Link } from "react-router-dom";

const Recentwork = () => {
  const [auth, setAuth] = useAuth();


  const [card, setCard] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await UseGet("updateWork/get");
      // console.log(data?.getAll)
      setCard(data?.getAll);
    })();

    // console.log(card)
  }, []);


 

  const [selectedCategory, setSelectedCategory] = useState(""); // State to track the selected category

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter cards based on the selected category
  const filteredCards =
    selectedCategory && selectedCategory !== "everything"
      ? card.filter(
          (item) =>
            item.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      : card; // Show all cards if "Everything" or no category is selected
const [open,setOpen] =useState(false)
  return (
    <div className="w-full lg:w-4/6 mx-auto flex flex-col lg:px-6 justify-around gap-10 py-6 relative">
      {open ? <CreateWork setOpen={setOpen} /> : " "}
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl lg:text-4xl py-2 lg:py-10 px-6 lg:px-0 relative">
          <img src={bg} alt="" className="absolute -left-2 lg:-left-5 " />
          Recent Works
        </h1>
        {auth?.token ? <Button onClick={() => setOpen(true)} /> : ""}
      </div>

      <div className="w-full px-6">
        <ul className="flex gap-5 capitalize">
          {/* Add "Everything" category */}
          <li>
            <button
              className={`capitalize font-semibold hover:text-red-500 text-sm lg:text-lg  ${
                !selectedCategory || selectedCategory === "everything"
                  ? "text-red-500"
                  : ""
              }`}
              onClick={() => handleCategoryClick("everything")} // Show all when "Everything" is clicked
            >
              Everything
            </button>
          </li>

          {/* Dynamically render category buttons */}
          {Array.from(new Set(card.map((item) => item.category))).map(
            (category, idx) => (
              <li key={idx}>
                <button
                  className={`capitalize font-semibold hover:text-red-500 text-sm lg:text-lg  ${
                    selectedCategory === category ? "text-red-500" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)} // Set selected category on click
                >
                  {category}
                </button>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="w-full flex flex-wrap gap-4 justify-around">
        {filteredCards.map((item, idx) => (
          <div
            key={idx}
            className="group rounded-lg border-gray-300 flex flex-col items-center justify-center gap-3 object-container text-center relative shadow-lg overflow-hidden"
          >
            {/* Image with blur effect on hover */}
            <div className="relative w-80  lg:w-72">
              <img
                src={item?.screenshot ? item?.screenshot : client5}
                alt={item.heading}
                className=" rounded-lg w-full h-full object-cover transform transition duration-500 ease-in-out group-hover:blur-xm"
              />
            </div>

            {/* Content to display on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out ">
              {auth?.token ? (
                <EditDelete
                  className={"absolute -top-16 -right-24"}
                  url={"updateWork"} item={item}
                />
              ) : (
                ""
              )}
              <span className="text-sm  absolute -top-1 rounded-full left-4 border bg-red-300 text-white px-4 ">
                {item.category}
              </span>
              <h3 className="font-semibold text-white text-xl mb-2">
                {item.heading}
              </h3>
              <Link to={item.link}>
                <button className="border p-2 rounded-full absolute bottom-2 left-4 font-semibold">
                  <MdOutlineReadMore className="size-5 text-white" />{" "}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* <button className="bg-red-500 px-4 py-1 rounded-full font-semibold lg:text-xl lg:px-6 lg:py-2 w-32 lg:w-40 mx-auto text-white">
        Learn More
      </button> */}
    </div>
  );
};

export default Recentwork;
