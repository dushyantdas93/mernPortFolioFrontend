import React, { useEffect, useState } from "react";
// import Hireme from "./Hireme";
// import AboutMe from "./AboutMe";
// import Services from "./Services";
// import Experience from "./Experience";
// import Recentwork from "./Recentwork";
// import PricingPlans from "./PricingPlans";
// import LatestPost from "./LatestPost";
// import GetInTouch from "./GetInTouch";
// import Clients from "./Clients";
// import Navbar from "../Navbar";
import { Link } from "react-scroll";

import { FaArrowUpLong } from "react-icons/fa6";
import Hireme from "../user/Hireme";
import AboutMe from "../user/AboutMe";
import Services from "../user/Services";
import Experience from "../user/Experience";
import Recentwork from "../user/Recentwork";
import PricingPlans from "../user/PricingPlans";
import Clients from "../user/Clients";
import LatestPost from "../user/LatestPost";
import GetInTouch from "../user/GetInTouch";
import Navbar from "../Navbar";
import Menubar from "../user/Menubar";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [menu, setMenu] = useState(false); // Handle menu state for mobile
  const {auth} = useAuth()
  const navigate = useNavigate()
  useEffect(()=>{
    if(auth?.token){
navigate("/admin")
    }
  },[auth?.token])

  return (
    <div>
      <Navbar menu={menu} setMenu={setMenu} />
      <Menubar menu={menu} setMenu={setMenu} />
      <Link
        // Link to the section
        to="home"
        smooth={true} // Enable smooth scrolling
        duration={500} // Duration of the scroll
        offset={-70} // Offset for fixed header (optional)
        className="fixed bottom-4 lg:bottom-10 right-4 lg:right-10 rounded-full size-10 lg:size-16 flex items-center justify-center bg-gray-200 border border-gray-300 "
        // onClick={handleLinkClick} // Close the menu on click
      >
        <FaArrowUpLong className="h-10 " />
      </Link>
      <div
        className="h-full w-full  lg:h-full lg:w-5/6 lg:ml-[15%] overflow-y-scroll items-center justify-center "
        id="main"
      >
        <section id="home">
          <Hireme />
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <section id="services">
          <Services />
        </section>
        <section id="experience">
          <Experience />
        </section>

        <section id="works">
          <Recentwork />
        </section>

        <section id="pricing">
          <PricingPlans />
        </section>

        <section id="client">
          <Clients />
        </section>

        <section id="blog">
          <LatestPost />
        </section>

        {/* <section id="contact">
          <GetInTouch />
        </section> */}
      </div>
    </div>
  );
};

export default Admin;
