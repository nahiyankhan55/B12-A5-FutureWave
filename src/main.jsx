import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RoutesProvider from "./RoutesProvider/RoutesProvider.jsx";
import AppContextProvider from "./context/AppContextProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <RoutesProvider></RoutesProvider>
      <ToastContainer></ToastContainer>
    </AppContextProvider>
  </StrictMode>
);
