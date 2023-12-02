import React from "react";
import Home from "./Home";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/service" element={<Services/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route path="/*" element={<Navigate to="/"/>}/>
      </Routes>
      <Footer/>
    </>
  );
}
