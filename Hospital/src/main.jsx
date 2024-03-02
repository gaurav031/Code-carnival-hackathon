import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx"
import Contact from "./Components/Contact/Conatct.jsx"
import Doctor from "./Components/DoctorSigin/Doctor.jsx";
import DocRender from "./DocRender/DocRender.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
       <Route path='' element={<Home />} />
        <Route path="doctor" element={<Doctor />} />
      
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path="render" element={<DocRender />} />

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
