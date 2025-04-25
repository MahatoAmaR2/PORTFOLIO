import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import About from "../pages/ABout";
const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </>
  );
};

export default Allroutes;
