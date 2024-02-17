import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Navigate, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate()
    const navigateToProfile = ()=>[]
    const handelOpenMenu = () => []

  return (
    <nav className="px-5 z-50 py-[0.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="flex items-center space-x-4">
        <div
          className="lg:mr-10 cursor-pointer flex items-center space-x-4"
          onClick={() => navigate("/")}
        >
          <li className="logo font-semibold text-gray-300 text-2xl">
            Rajbog Food
          </li>
        </div>
      </div>
      <div className="flex items-center space-x-2 ">
        <IconButton>
          <SearchIcon sx={{ fontSize: "1.5rem" }} />
        </IconButton>
        {true ? (
          <span onClick={true?handelOpenMenu:navigateToProfile} className="font-semibold cursor-pointer">Omkrushana</span>
        ) : (
          <IconButton>
            <PersonIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        )}

        <IconButton>
          <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
        </IconButton>
      </div>


    </nav>
  );
};

export default Navbar;
