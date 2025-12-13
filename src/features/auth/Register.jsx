import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLeafOutline } from "react-icons/io5";
import logo from '../../assets/homepage/logo_xanh.png';

export default function Register({ onClose, onSwitch }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden p-4 md:px-[10%] lg:px-[15%] pt-[1%]">
      <div className="relative bg-white rounded-[30px] md:rounded-[50px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] w-full max-w-2xl mx-auto overflow-hidden border border-gray-100">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 -left-20 w-[300px] h-[3px] bg-green-600 transform -rotate-45 origin-left" />
          <div className="absolute top-0 -right-20 w-[250px] h-[3px] bg-orange-500 transform rotate-45 origin-right" />
          <div className="absolute bottom-0 -left-16 w-[280px] h-[3px] bg-green-700 transform rotate-30 origin-left" />
          <div className="absolute bottom-0 -right-16 w-[240px] h-[3px] bg-orange-600 transform -rotate-30 origin-right" />
        </div>

        <div className="px-6 md:px-12 pt-8 pb-10 relative z-10">
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="rounded-2xl">
              <img src={logo} alt="Logo" className="w-20 h-20 md:w-25 md:h-25 object-contain" />
            </div>
          </div>

          <h2 className="mt-3 text-2xl md:text-3xl text-center flex items-center justify-center mb-6 md:mb-8 font-semibold text-gray-800">
            Tạo tài khoản
            <IoLeafOutline className="ml-2 w-5 h-5 md:w-6 md:h-6 text-[#d68c45]" />
          </h2>

          <form className="mt-4 md:mt-8 space-y-2 flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
              <div className="w-full md:w-[70%] flex justify-between items-center mb-2 md:mb-3">
                <label className="block text-sm font-medium text-black">
                  Email
                </label>
              </div>
              <input
                type="email"
                placeholder="Ví dụ: example@email.com"
                className="w-full md:w-[70%] px-4 py-3 md:py-2 border border-gray-200 rounded-xl bg-[#F7FBFF] focus:outline-none focus:ring-2 focus:ring-[#d68c45] focus:border-transparent transition-all text-base"
              />
            </div>
            
            <div className="w-full flex flex-col items-center">
              <div className="w-full md:w-[70%] flex justify-between items-center mb-2 md:mb-3">
                <label className="block text-sm font-medium text-black">
                  Mật khẩu
                </label>
              </div>
              <input
                type="password"
                placeholder="ít nhất 8 ký tự"
                className="w-full md:w-[70%] px-4 py-3 md:py-2 border border-gray-200 rounded-xl bg-[#F7FBFF] focus:outline-none focus:ring-2 focus:ring-[#d68c45] focus:border-transparent transition-all text-base"
              />
            </div>

            <div className="w-full flex flex-col items-center">
              <div className="w-full md:w-[70%] flex justify-between items-center mb-2 md:mb-3">
                <label className="block text-sm font-medium text-black">
                  Xác nhận mật khẩu
                </label>
              </div>
              <input
                type="password"
                placeholder="ít nhất 8 ký tự"
                className="w-full md:w-[70%] px-4 py-3 md:py-2 border border-gray-200 rounded-xl bg-[#F7FBFF] focus:outline-none focus:ring-2 focus:ring-[#d68c45] focus:border-transparent transition-all text-base"
              />
            </div>

            <div className="w-full md:w-[70%] flex justify-end text-sm">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onSwitch("login");
                }}
                className="text-[#1E4AE9] hover:text-[#1E4AE9] hover:underline transition-colors font-medium mb-3 mt-1"
              >
                Đã có tài khoản? Đăng nhập
              </button>
            </div>

            <button
              type="submit"
              className="w-full md:w-[70%] py-3 md:py-2 bg-[#1E2C34] text-white rounded-xl font-semibold hover:bg-[#2E424E] transition-colors shadow-md text-lg"
            >
              Đăng ký
            </button>
          </form>

          <div className="mt-6 md:mt-8 space-y-3 md:space-y-4 flex flex-col items-center">
            <button className="w-full md:w-[50%] flex items-center justify-center gap-4 py-3 md:py-2 bg-gray-100 border border-gray-200 rounded-xl hover:bg-gray-200 transition-colors">
              <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <FaFacebookF className="text-white w-4 h-4" />
              </div>
              <span className="text-black font-medium text-sm md:text-base whitespace-nowrap">
                Đăng ký với Facebook
              </span>
            </button>
            <button className="w-full md:w-[50%] flex items-center justify-center gap-4 py-3 md:py-2 bg-gray-100 border border-gray-200 rounded-xl hover:bg-gray-200 transition-colors">
              <FcGoogle className="w-7 h-7 flex-shrink-0" />
              <span className="text-black font-medium text-sm md:text-base whitespace-nowrap">
                Đăng ký với Gmail
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}