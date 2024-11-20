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
import Private from "./Route/Private.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import UpdateClientReview from "../../UpdateClientReview.jsx";
import UpdatePost from "./pages/Admin/UpdatePost.jsx";



const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/admin" element={<Private />} >
      <Route path="" element={<Admin />} /> 
      
      <Route path="updateProfile" element={<UpdateProfile />} />
      <Route path="updateAboutMe" element={<UpdateAboutMe />} />
      <Route path="updateServices" element={<UpdateServices />} />
      <Route path="updateCompletion" element={<UpdateCompletion />} />
      <Route path="updatePost" element={<UpdatePost />} />
      <Route path="updateClientReview" element={<UpdateClientReview />} />

      <Route path="updateWork" element={<UpdateWork />} />
      <Route
        path="updatePricingPlane"
        element={<UpdatePricingPlane />}
      />
      <Route path="messages" element={<Messages />} />
      </Route>
     

      

      {/* <Route path="login" element={<AboutMe/>}/> */}

      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/*" element={<PageNotFound/>} />
    </Routes>
  );
};

export default App;
