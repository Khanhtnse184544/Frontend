// src/components/Header.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaBell,
} from "react-icons/fa";
import ContactUsPopup from "./ContactUsPopup";
import SocialLinks from "./SocialLinks";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Check if current page is sponsor or login
  const isSponsorPage = location.pathname === "/sponsor";
  const isLoginPage = location.pathname === "/login";

  const handleDonateClick = () => {
    navigate("/sponsor");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  const handleContactClose = () => {
    setIsContactOpen(false);
  };

  const handleContactSubmit = (formData) => {
    // Handle form submission here
    console.log('Contact form submitted from header:', formData);
    // You can add API call here
  };

  return (
    <header
      className="w-full bg-black py-0 px-16 flex items-center justify-between select-none font-sans h-[55px]"
      style={{ fontFamily: "Pally-Regular, sans-serif" }}
    >
      {/* Left: Social icons + Contact */}
      <div className="flex items-center gap-5 pl-8">
        <SocialLinks 
          iconSize="w-4 h-4"
          iconColor="text-white"
          hoverColor="hover:text-[#D68C45]"
        />
        <button 
          onClick={handleContactClick}
          className="ml-4 text-md text-white tracking-wide hover:text-[#D68C45] transition-colors cursor-pointer"
        >
          CONTACT US
        </button>
      </div>
      {/* Center: empty */}
      <div className="flex-1"></div>
      {/* Right: Donate, Login, Bell */}
      <div className="flex items-center gap-0 pr-8">
        <button 
          onClick={handleDonateClick}
          className={`px-10 py-2 bg-[#d68c45] rounded-none text-white text-md hover:brightness-110 transition h-[55px]`}
        >
          DONATE
        </button>
        <button 
          onClick={handleLoginClick}
          className={`flex items-center gap-2 px-10 py-2 text-white text-md h-[55px] border-l border-[#222]` }
        >
          <FaUser className="w-4 h-4" /> LOGIN
        </button>
        <div className="relative flex items-center">
          <button className="bg-[#d68c45]  rounded-none h-[55px] w-[70px] flex items-center justify-center">
            <FaBell className="w-5 h-5 text-white" />
          </button>
          <span className="absolute top-1 right-2 bg-red-600 text-[10px] rounded-full px-1 text-white ">
            0
          </span>
        </div>
      </div>

      {/* Contact Us Popup */}
      <ContactUsPopup 
        isOpen={isContactOpen} 
        onClose={handleContactClose} 
        onSubmit={handleContactSubmit} 
      />
    </header>
  );
}
