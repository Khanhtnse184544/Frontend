import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { IoLeafOutline } from "react-icons/io5";
import logoLogin from '../../assets/auth/logoLogin.png';

export default function Login({ onClose, onSwitch }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden px-[20%] pt-[1%]">
      
      <div className="relative bg-white rounded-[50px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] w-full mx-auto overflow-hidden border border-gray-100">
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
            className="text-4xl  font-extrabold text-center leading-tight mb-4"
            style={{ fontFamily: "Pally-Bold, sans-serif" }}
          >
            <span className="text-black">ECOLOGICAL CONSER</span>
         
            <span className="text-[#d68c45]">VATION OPERATION</span>
          </h1>

          {/* Subtitle */}
          <h2 
            className="mt-3 text-3xl text-center  flex items-center justify-center mb-8"
            style={{ fontFamily: "Pally-Bold, sans-serif" }}
          >
            Welcome back
            <IoLeafOutline className="ml-2 w-6 h-6 text-[#d68c45]" />
          </h2>

          {/* Form */}
          <form className="mt-8 space-y-6 flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
              <div className="w-[50%] flex justify-between items-center mb-3">
                <label 
                  className="block text-sm font-medium text-black"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Email
                </label>
              </div>
              <input
                type="email"
                placeholder="Example@email.com"
                className="w-[50%] px-4 py-2 border border-gray-200 rounded-xl bg-[#F7FBFF] focus:outline-none focus:ring-2 focus:ring-[#d68c45] focus:border-transparent transition-all text-base"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              />
            </div>
            
            <div className="w-full flex flex-col items-center">
              <div className="w-[50%] flex justify-between items-center mb-3">
                <label 
                  className="block text-sm font-medium text-black"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                placeholder="at least 8 characters"
                className="w-[50%] px-4 py-2 border border-gray-200 rounded-xl bg-[#F7FBFF] focus:outline-none focus:ring-2 focus:ring-[#d68c45] focus:border-transparent transition-all text-base"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              />
            </div>

            <div className="w-[50%] flex justify-between text-sm">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onSwitch("register");
                }}
                className="text-[#1E4AE9] hover:text-[#1E4AE9] hover:underline transition-colors font-medium"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                Don't have an account? Register
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onSwitch("forgot");
                }}
                className="text-[#1E4AE9] hover:text-[#1E4AE9] hover:underline transition-colors font-medium"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-[50%] py-2 bg-[#1E2C34] text-white rounded-xl font-semibold hover:bg-[#2E424E] transition-colors shadow-md text-lg"
              style={{ fontFamily: "Pally-Regular, sans-serif" }}
            >
              Sign in
            </button>
          </form>

          {/* Social Buttons */}
          <div className="mt-8 space-y-4 flex flex-col items-center">
            <button className="w-[40%] flex items-center justify-center gap-4 py-2 bg-gray-100 border border-gray-200 rounded-xl hover:bg-gray-200 transition-colors">
              <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
                <FaFacebookF className="text-white w-4 h-4" />
              </div>
              <span 
                className="text-black font-medium text-base"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                Sign in with Facebook
              </span>
            </button>
            <button className="w-[40%] flex items-center justify-center gap-4 py-2 bg-gray-100 border border-gray-200 rounded-xl hover:bg-gray-200 transition-colors">
              <FcGoogle className="w-7 h-7" />
              <span 
                className="text-black font-medium text-base"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                Sign in with Gmail
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
