// src/components/Header.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaTiktok,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaUser,
  FaBell,
} from "react-icons/fa";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if current page is sponsor or login
  const isSponsorPage = location.pathname === "/sponsor";
  const isLoginPage = location.pathname === "/login";

  const handleDonateClick = () => {
    navigate("/sponsor");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <header
      className="w-full bg-black py-0 px-16 flex items-center justify-between select-none font-sans h-[65px]"
      style={{ fontFamily: "Pally-Regular, sans-serif" }}
    >
      {/* Left: Social icons + Contact */}
      <div className="flex items-center gap-5 pl-8">
        <FaFacebookF className="w-5 h-5 text-white" />
        <FaTiktok className="w-5 h-5 text-white" />
        <FaInstagram className="w-5 h-5 text-white" />
        <FaYoutube className="w-5 h-5 text-white" />
        <span className="ml-4 text-lg text-white tracking-wide">
          CONTACT US
        </span>
      </div>
      {/* Center: empty */}
      <div className="flex-1"></div>
      {/* Right: Donate, Login, Bell */}
      <div className="flex items-center gap-0 pr-8">
        <button 
          onClick={handleDonateClick}
          className={`px-10 py-2 bg-[#d68c45] rounded-none text-white text-lg hover:brightness-110 transition h-[65px]`}
        >
          DONATE
        </button>
        <button 
          onClick={handleLoginClick}
          className={`flex items-center gap-2 px-10 py-2 text-white text-lg h-[65px] border-l border-[#222]` }
        >
          <FaUser className="w-5 h-5" /> LOGIN
        </button>
        <div className="relative flex items-center">
          <button className="bg-[#d68c45]  rounded-none h-[65px] w-[70px] flex items-center justify-center">
            <FaBell className="w-6 h-6 text-white" />
          </button>
          <span className="absolute top-1 right-2 bg-red-600 text-[10px] rounded-full px-1 text-white ">
            0
          </span>
        </div>
      </div>
    </header>
  );
}
