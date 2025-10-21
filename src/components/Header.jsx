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
      className="w-full bg-black py-0 px-12 lg:px-14 xl:px-16 2xl:px-30 flex items-center justify-between select-none  h-[55px] lg:h-[55px] xl:h-[60px] 2xl:h-[74px]"
    >
      {/* Left: Social icons + Contact */}
      <div className="flex items-center gap-4 lg:gap-5 xl:gap-5 2xl:gap-6 pl-6 lg:pl-7 xl:pl-8 2xl:pl-12">
        <SocialLinks 
          iconSize="w-3 h-3 lg:w-3 lg:h-3 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4"
          iconColor="text-white"
          hoverColor="hover:text-[#D68C45]"
        />
        <button 
          onClick={handleContactClick}
          className="ml-4 text-sm lg:text-md xl:text-LG 2xl:text-lg text-white tracking-wide hover:text-[#D68C45] transition-colors cursor-pointer"
        >
          LIÊN HỆ
        </button>
      </div>
      {/* Center: empty */}
      <div className="flex-1"></div>
      {/* Right: Donate, Login, Bell */}
      <div className="flex items-center gap-0 pr-6 lg:pr-7 xl:pr-8 2xl:pr-12">
        <button 
          onClick={handleDonateClick}
          className={`px-8 lg:px-10 xl:px-10 2xl:px-12 py-2 bg-[#d68c45] rounded-none text-white text-md lg:text-md xl:text-md 2xl:text-lg hover:brightness-110 transition h-[55px] lg:h-[55px] xl:h-[60px] 2xl:h-[74px]`}
        >
          QUYÊN GÓP
        </button>
        {/* <button 
          onClick={handleLoginClick}
          className={`flex items-center gap-2 px-8 lg:px-10 xl:px-10 2xl:px-12 py-2 text-white text-md lg:text-md xl:text-md 2xl:text-lg h-[55px] lg:h-[55px] xl:h-[60px] 2xl:h-[74px] border-l border-[#222]` }
        >
          <FaUser className="w-4 h-4 lg:w-4 lg:h-4 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" /> ĐĂNG NHẬP
        </button>
        <div className="relative flex items-center">
          <button className="bg-[#d68c45]  rounded-none h-[55px] lg:h-[55px] xl:h-[60px] 2xl:h-[74px] w-[64px] lg:w-[68px] xl:w-[72px] 2xl:w-[84px] flex items-center justify-center">
            <FaBell className="w-5 h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-white" />
          </button>
          <span className="absolute top-1 lg:top-1.5 xl:top-1.5 2xl:top-2 right-2 lg:right-2.5 xl:right-2.5 2xl:right-3 bg-red-600 text-[10px] lg:text-[10px] xl:text-[10px] 2xl:text-[11px] rounded-full px-1 text-white ">
            0
          </span>
        </div> */}
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
