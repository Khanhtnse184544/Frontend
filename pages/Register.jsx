import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import plantIcon from "/public/img/logoLogin.png";

export default function Register({ onClose, onSwitch }) {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60">
      <div className="relative bg-white rounded-[50px] shadow-[0_4px_10px_rgba(0,0,0,0.25)] w-full max-w-md mx-4 overflow-hidden">
        {/* Decorative lines */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-8 -left-20 w-[300px] h-[3px] bg-green-800 -rotate-30" />
          <span className="absolute top-12 -right-24 w-[250px] h-[3px] bg-orange-400 rotate-25" />
          <span className="absolute bottom-8 -left-24 w-[250px] h-[3px] bg-black rotate-15" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <AiOutlineClose size={24} />
        </button>

        <div className="px-8 pt-8 pb-10 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <img src="./img/logoLogin.png" alt="Logo" className="w-10 h-10" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold">
            ECOLOGICAL <span className="text-orange-500">CONSERVATION</span>{" "}
            OPERATION
          </h1>

          {/* Subtitle */}
          <h2 className="mt-4 text-xl font-medium flex items-center justify-center gap-2">
            Register
            <img
              src="/img/mdi_leaf.jpg"
              alt="leaf"
              className="w-5 h-5 object-contain"
            />
          </h2>

          {/* Form */}
          <form className="mt-8 space-y-4">
            <input
              type="email"
              placeholder="Example@email.com"
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
                Login
              </button>
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition"
            >
              Register
            </button>
          </form>

          {/* Social Sign-in */}
          <div className="flex flex-col gap-3 mt-6">
            <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-xl bg-blue-50 hover:bg-gray-100 transition">
              <FaFacebookF className="text-blue-600 w-5 h-5" />
              Sign in with Facebook
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
              <FcGoogle className="w-5 h-5" />
              Sign in with Gmail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
