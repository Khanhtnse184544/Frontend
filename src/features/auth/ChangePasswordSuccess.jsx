import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLeafOutline } from "react-icons/io5";
import logoLogin from "../../assets/auth/logoLogin.png";

export default function ChangePasswordSuccess({ onClose, onSwitch }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden px-[20%] pt-[1%]">
      <div className="relative bg-white rounded-[50px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] w-full mx-auto overflow-hidden border border-gray-100 py-30">
        {/* Decorative diagonal lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 -left-20 w-[300px] h-[3px] bg-green-600 transform -rotate-45 origin-left" />
          <div className="absolute top-0 -right-20 w-[250px] h-[3px] bg-orange-500 transform rotate-45 origin-right" />
          <div className="absolute bottom-0 -left-16 w-[280px] h-[3px] bg-green-700 transform rotate-30 origin-left" />
          <div className="absolute bottom-0 -right-16 w-[240px] h-[3px] bg-orange-600 transform -rotate-30 origin-right" />
        </div>

        {/* Content */}
        <div className="px-8 pt-8 pb-10 relative z-10">
          {/* Logo/icon */}
          <div className="flex justify-center mb-8">
            <div className=" rounded-2xl">
              <img src={logoLogin} alt="Logo" className="w-25 h-25" />
            </div>
          </div>

          {/* Title */}
          <h1
            className="text-4xl font-extrabold text-center leading-tight mb-4"
            style={{ fontFamily: "Pally-Bold, sans-serif" }}
          >
            <span className="text-black">ECOLOGICAL CONSER</span>

            <span className="text-[#d68c45]">VATION OPERATION</span>
          </h1>

          {/* Subtitle */}
          <h2
            className="mt-3 text-3xl text-center flex items-center justify-center mb-8"
            style={{ fontFamily: "Pally-Bold, sans-serif" }}
          >
            Change Password
            <IoLeafOutline className="ml-2 w-6 h-6 text-[#d68c45]" />
          </h2>

          {/* Form */}
          <form className="mt-8 space-y-6 flex flex-col items-center">
            <p className="text-center text-[#d68c45] text-lg  font-semibold">Password changed successfully, please go back to login.</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                onSwitch("login");
              }}
              className="w-[50%] py-2 bg-[#1E2C34] text-white rounded-xl font-semibold hover:bg-[#2E424E] transition-colors shadow-md text-lg"
              style={{ fontFamily: "Pally-Regular, sans-serif" }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
