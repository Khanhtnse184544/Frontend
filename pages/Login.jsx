import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import plantIcon from "/public/img/logoLogin.png"; // chỉnh lại path nếu cần

export default function Login({ onClose, onSwitch }) {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60">
      <div className="relative bg-white rounded-[50px] shadow-[0_4px_10px_rgba(0,0,0,0.25)] w-full max-w-md mx-4 overflow-hidden">
        {/* Decorative lines */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-8 -left-20 w-[300px] h-[3px] bg-green-800 -rotate-30" />
          <span className="absolute top-12 -right-24 w-[250px] h-[3px] bg-orange-400 rotate-25" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <AiOutlineClose size={24} />
        </button>

        {/* Content */}
        <div className="px-8 pt-8 pb-10">
          {/* Logo/icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <img src={plantIcon} alt="Logo" className="w-10 h-10" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 leading-tight">
            ECOLOGICAL
            <br />
            CONSERVATION OPERATION
          </h1>

          {/* Subtitle */}
          <h2 className="mt-2 text-base text-center text-gray-600 flex items-center justify-center">
            Welcome back
            <img src="./img/mdi_leaf.jpg" alt="leaf" className="ml-2 w-5 h-5" />
          </h2>

          {/* Form */}
          <form className="mt-8 space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-800"
            />
            <input
              type="password"
              placeholder="Password (at least 8 characters)"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-800"
            />

            <div className="flex justify-between text-sm text-blue-600">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onSwitch();
                }}
                className="hover:underline"
              >
                Register
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onSwitch("forgot");
                }}
                className="hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Sign in
            </button>
          </form>

          {/* Separator */}
          <div className="flex items-center my-6 text-gray-400">
            <hr className="flex-grow border-t" />
            <span className="px-3 text-sm">Or sign in with</span>
            <hr className="flex-grow border-t" />
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-xl hover:bg-gray-100 transition">
              <FaFacebookF className="text-blue-600 w-5 h-5" />
              <span className="text-gray-700">Sign in with Facebook</span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-xl hover:bg-gray-100 transition">
              <FcGoogle className="w-5 h-5" />
              <span className="text-gray-700">Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
