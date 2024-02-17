import React from "react";
import { Route, Routes } from "react-router-dom";
import CoustomerRoutes from "./CoustomerRoutes";

const Routers = () => {
  return (
    <Routes>
      <Route path="/*" element={<CoustomerRoutes />} />
    </Routes>
  );
};

export default Routers;
