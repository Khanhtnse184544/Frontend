// src/components/Header.js
import React, { useState } from "react";
import ForgotPasswordModal from "./Forgotpassword";

import {
  FaTiktok,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaUser,
  FaBell,
} from "react-icons/fa";
import LoginModal from "./Login";
import RegisterModal from "./Register";

export default function Header() {
  const [modalType, setModalType] = useState(null); // null | 'login' | 'register'

  return (
    <header className="w-full z-50">
      {/* Green Top Header */}
      <div className="bg-[#173017] text-white py-2 text-center">
        <h2 className="text-base md:text-xl font-semibold">
          ECOLOGICAL CONSERVATION OPERATION
        </h2>
      </div>

      {/* Black Bottom Bar */}
      <div className="bg-[#030503] py-3">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 overflow-x-auto">
          {/* Social Media */}
          <div className="flex items-center gap-4 flex-wrap text-white">
            <FaFacebookF className="w-5 h-5" />
            <FaTiktok className="w-5 h-5" />
            <FaInstagram className="w-5 h-5" />
            <FaYoutube className="w-5 h-5" />
            <span className="ml-4 text-sm md:text-lg font-medium">
              CONTACT US
            </span>
          </div>

          {/* Right Group: Donate, Login, Bell */}
          <div className="flex items-center gap-4 text-white">
            <button className="bg-yellow-500 px-5 py-2 rounded text-white font-bold hover:brightness-110 transition">
              DONATE
            </button>

            {/* Mở modal Login */}
            <div
              onClick={() => setModalType("login")}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80"
            >
              <FaUser className="w-5 h-5" />
              <span className="text-sm md:text-base font-medium">LOGIN</span>
            </div>

            <div className="relative">
              <FaBell className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-[10px] rounded-full px-1">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hiển thị modal Login / Register */}
      {modalType === "login" && (
        <LoginModal
          onClose={() => setModalType(null)}
          onSwitch={(next) => setModalType(next)}
        />
      )}
      {modalType === "register" && (
        <RegisterModal
          onClose={() => setModalType(null)}
          onSwitch={(next) => setModalType(next)}
        />
      )}
      {modalType === "forgot" && (
        <ForgotPasswordModal
          onClose={() => setModalType(null)}
          onSwitch={(next) => setModalType(next)}
        />
      )}
    </header>
  );
}
