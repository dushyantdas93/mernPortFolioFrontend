import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>

  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
  </AuthProvider>
);
