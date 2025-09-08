import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLeafOutline } from "react-icons/io5";
import logoLogin from '../../assets/auth/logoLogin.png';

export default function ForgotPassword({ onClose, onSwitch }) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    setIsLoading(true);
    
    try {
      // TODO: Implement actual OTP sending logic here
      // For now, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to change password page
      onSwitch("change-password");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden px-[20%] pt-[1%]">
      <div className="relative bg-white rounded-[50px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] w-full mx-auto overflow-hidden border border-gray-100 py-28">
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
            Forgot Password
            <IoLeafOutline className="ml-2 w-6 h-6 text-[#d68c45]" />
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6 flex flex-col items-center">
                         <div className="w-full flex flex-col items-center">
               <div className="w-[50%] flex justify-between items-center mb-3">
                 <label 
                   className="block text-sm font-medium text-black"
                   style={{ fontFamily: "Pally-Regular, sans-serif" }}
                 >
                  Email
                 </label>
               </div>
               <div className="w-[50%] relative">
                 <input
                   type="email"
                   placeholder="Email@gmail.com"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className="w-full px-4 py-2 pr-20 border border-gray-200 rounded-xl bg-[#F7FBFF] focus:outline-none focus:ring-2 focus:ring-[#d68c45] focus:border-transparent transition-all text-base"
                   style={{ fontFamily: "Pally-Regular, sans-serif" }}
                   required
                 />
                 
               </div>
             </div>
            
            

            <div className="w-[50%] flex justify-between text-sm">
            <button
                onClick={(e) => {
                  e.preventDefault();
                  onSwitch("forgot");
                }}
                className="text-[#1E4AE9] hover:text-[#1E4AE9] hover:underline transition-colors font-medium"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                Back to Login
              </button>
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
              
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-[50%] py-2 rounded-xl font-semibold transition-colors shadow-md text-lg ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-[#1E2C34] hover:bg-[#2E424E]'
              } text-white`}
              style={{ fontFamily: "Pally-Regular, sans-serif" }}
            >
              {isLoading ? "Sending..." : "Send OTP"}
            </button>
          </form>

          
        </div>
      </div>
    </div>
  );
}
