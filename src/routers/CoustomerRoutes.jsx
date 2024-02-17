import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Restaurent from "../customer/pages/Restaurant/Restaurant";
import Navbar from "../customer/components/Navbar/Navbar";

const CoustomerRoutes = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant/:city/:title/:id" element={<Restaurent />} />
      </Routes>
    </div>
  );
};

export default CoustomerRoutes;
