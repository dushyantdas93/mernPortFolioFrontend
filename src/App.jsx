import React from "react";



import {Route, Routes} from "react-router-dom"
import User from "./pages/user/User";
import Profile from "./pages/Admin/Profile";
import Login from "./pages/Login";
import Reset from "./pages/Admin/Reset";
import Admin from "./pages/Admin/Admin.jsx";

import UpdateAboutMe from "./pages/Admin/UpdateAboutMe.jsx";
import UpdateServices from "./pages/Admin/UpdateSevices.jsx";
import UpdateCompletion from "./pages/Admin/UpdateCompletion.jsx";
import UpdateWork from "./pages/Admin/UpdateWork.jsx";
import UpdatePricingPlane from "./pages/Admin/UpdatePricingPlane.jsx";
import Messages from "./pages/Admin/Messages.jsx";
import Private from "./Route/Private.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

import UpdatePost from "./pages/Admin/UpdatePost.jsx";
import UpdateClientReview from "./pages/Admin/UpdateClientReview.jsx";
import CreateProfile from "./pages/Admin/CreateProfile.jsx";




const App = () => {
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/*" element={<PageNotFound/>} />
      <Route path="/" element={<User />} />

      <Route path="/admin" element={<Private />} >
               <Route path="" element={<Admin />} /> 
               <Route path="updateProfile/:id" element={<CreateProfile />} />
      
               <Route path="updateAboutMe/:aboutId" element={<UpdateAboutMe />} />
               <Route path="updateServices/:serviceId" element={<UpdateServices />} />
               <Route path="updateCompletion/:completionId" element={<UpdateCompletion />} />
               <Route path="updatePost/:postId" element={<UpdatePost />} />
               <Route path="updateClientReview/:ClientId" element={<UpdateClientReview />} />

               <Route path="updateWork/:workId" element={<UpdateWork />} />
               <Route path="updatePricingPlan/:pricingId" element={<UpdatePricingPlane />}
      />
      <Route path="messages" element={<Messages />} />
      </Route>
     

      

      {/* <Route path="login" element={<AboutMe/>}/> */}

    </Routes>
  );
};

export default App;
