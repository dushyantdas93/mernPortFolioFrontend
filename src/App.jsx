import React from "react";



import {Route, Routes} from "react-router-dom"
import User from "./pages/user/User";
import Profile from "./pages/Admin/Profile";
import Login from "./pages/Login";
import Reset from "./pages/Admin/Reset";
import Admin from "./pages/Admin/Admin.jsx";
import UpdateProfile from "./pages/Admin/UpdateProfile.jsx";
import UpdateAboutMe from "./pages/Admin/UpdateAboutMe.jsx";
import UpdateServices from "./pages/Admin/UpdateSevices.jsx";
import UpdateCompletion from "./pages/Admin/UpdateCompletion.jsx";
import UpdateWork from "./pages/Admin/UpdateWork.jsx";
import UpdatePricingPlane from "./pages/Admin/UpdatePricingPlane.jsx";
import Messages from "./pages/Admin/Messages.jsx";


const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/updateProfile" element={<UpdateProfile />} />
      <Route path="/admin/updateAboutMe" element={<UpdateAboutMe />} />
      <Route path="/admin/updateServices" element={<UpdateServices />} />
      <Route path="/admin/updateCompletion" element={<UpdateCompletion />} />
      <Route path="/admin/updateWork" element={<UpdateWork />} />
      <Route
        path="/admin/updatePricingPlane"
        element={<UpdatePricingPlane />}
      />
      <Route path="/admin/messages" element={<Messages />} />

      <Route path="/login" element={<Login />} />
      {/* <Route path="login" element={<AboutMe/>}/> */}

      <Route path="/reset" element={<Reset />} />
    </Routes>
  );
};

export default App;
