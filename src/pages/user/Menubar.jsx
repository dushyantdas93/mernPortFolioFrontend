import React from "react";
import { Link } from "react-scroll";
import { IoIosHome } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { SlBriefcase } from "react-icons/sl";
import { PiNotePencilBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Menubar = ({ menu, setMenu }) => {
  // Handles closing the menu on click (for mobile views)
  const navigate = useNavigate()
  const [auth,setAuth] = useAuth()
  console.log(auth)
  const handleLinkClick = () => {
    if (menu) {
      setMenu(false); // Closes the menu if it's open
    }
  };

  return (
    <div
      className={`${
        menu ? "h-2/5" : "h-0"
      } w-full border border-gray-300 overflow-y-auto  lg:h-full lg:w-1/6 bg-gray-200 lg:border border-gray-300-r z-10 overflow-hidden lg:flex flex-col px-6 lg:py-10 gap-2 lg:gap-6 capitalize mt-14 lg:m-0 fixed top-0 `}
      id="sidebar"
    >
      <div
        className="hidden lg:block text-gray-600 text-4xl font-bold px-10  "
       
      >
        <h1 onClick={() => {!auth ?  navigate("/login") : navigate("/admin")  }}>{ !auth ? "Portfolio" : "dushyant" }</h1>
      </div>
      <div className="lg:flex flex-col p-6 lg:py-10 gap-10 capitalize ">
        {[
          { heading: "Home", section: "home", icon: IoIosHome },
          { heading: "About", section: "about", icon: FaUserGraduate },
          { heading: "Services", section: "services", icon: SlBriefcase },
          {
            heading: "Experience",
            section: "experience",
            icon: FaGraduationCap,
          },
          { heading: "Works", section: "works", icon: FaLayerGroup },
          { heading: "Pricing", section: "pricing", icon: FaLayerGroup },
          { heading: "Client", section: "client", icon: FaLayerGroup },
          { heading: "Latest post", section: "blog", icon: PiNotePencilBold },
          {
            heading: "Contact",
            section: "contact",
            icon: IoChatbubblesSharp,
          },
        ].map((item, idx) => {
          return (
          
            <Link
              key={idx}
              to={item.section} // Link to the section
              smooth={true} // Enable smooth scrolling
              duration={500} // Duration of the scroll
              offset={-70} // Offset for fixed header (optional)
              className="text-gray-700  lg:text-lg font-bold active:text-red-300 hover:text-red-600 flex items-center  gap-3 cursor-pointer py-1 lg:py-0"
              onClick={handleLinkClick} // Close the menu on click
            >
              <item.icon className="size-5 lg:size-4 text-red-500" />
              {item.heading}
            </Link>
            
          
            
          );
        })}
        
{auth ? <><Link
        onClick={()=>navigate("/admin/messages")}
              
             // Link to the section
              smooth={true} // Enable smooth scrolling
              duration={500} // Duration of the scroll
              offset={-70} // Offset for fixed header (optional)
              className="text-gray-700  lg:text-lg font-bold active:text-red-300 hover:text-red-600 flex items-center  gap-3 cursor-pointer py-1 lg:py-0"
           
            >
              <IoChatbubblesSharp className="size-5 lg:size-4 text-red-500" />
             message
            </Link>
            <Link
        to="/" 
              
             // Link to the section
              smooth={true} // Enable smooth scrolling
              duration={500} // Duration of the scroll
              offset={-70} // Offset for fixed header (optional)
              className="text-gray-700  lg:text-lg font-bold active:text-red-300 hover:text-red-600 flex items-center  gap-3 cursor-pointer py-1 lg:py-0"
           
            >
            
              {!auth ? " " : <h1 onClick={()=>{setAuth(null)
        const res = localStorage.removeItem("auth")
      }}>logout</h1>}
            </Link></> : ""}

      </div>
    </div>
  );
};

export default Menubar;
