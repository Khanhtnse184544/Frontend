import React from "react";
import logo from "../assets/homepage/logo.png";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] py-7 xl:py-[3vh] 2xl:pb-[3.5vh] justify-center">
      <div className="max-w-6xl xl:max-w-[83vw] 2xl:max-w-[83vw] h-auto mx-auto px-10 xl:px-[4vw] 2xl:px-[5vw] ">
        {/* Main Content - Logo Column + Grouped Columns */}
        <div className="flex flex-col items-center px-20 lg:px-[6vw] 2xl:px-[5vw]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 xl:gap-[7vw] 2xl:gap-[7vw] ">
            {/* Left Column - Logo Only */}
            <div className="flex justify-center items-center">
              <img
                src={logo}
                alt="Footer Logo"
                className="w-[165px] h-[165px] xl:w-[12vw] xl:h-[12vw] 2xl:w-[13vw] 2xl:h-[12vw]"
              />
            </div>

            {/* Right Side - Grouped Columns */}
            <div className="md:col-span-2 flex flex-col justify-center mb-3 xl:mb-[2vh] 2xl:mb-[1vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-[7vw] 2xl:gap-[7vw]">
                {/* Tools */}
                <div className="space-y-2"></div>

                {/* Connect */}
                <div className="space-y-2">
                  <h4 className="text-white text-lg xl:text-lg 2xl:text-2xl font-bold">
                    LIÊN HỆ
                  </h4>
                  <div className="space-y-1">
                    <p className="text-white text-[0.6rem] xl:text-[0.6rem] 2xl:text-[0.8rem] ">
                      Địa chỉ: Số 14, Đường M5 (Dự án khu dân cư và Công viên
                      Phước Thiện), KP.28, Phường Long Bình, Thành phố Hồ Chí
                      Minh
                    </p>
                    <p className="text-white text-[0.6rem] xl:text-[0.6rem] 2xl:text-[0.8rem] ">
                      Email: treesforfuture.eco@gmail.com
                    </p>
                    <p className="text-white text-[0.6rem] xl:text-[0.6rem] 2xl:text-[0.8rem] ">
                      Website: www.eco.info.vn
                    </p>
                    <p className="text-white text-[0.6rem] xl:text-[0.6rem] 2xl:text-[0.8rem] ">
                      Điện thoại: 086 820 2708
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className="flex flex-col items-center">
          <div className="w-[100%] border-t border-white pt-4 xl:pt-[2vh] 2xl:pt-[2.5vh] flex items-center">
            <div className="flex-1"></div>
            <p className="text-white text-[0.6rem] xl:text-[0.6rem] 2xl:text-[0.8rem] text-center flex-1">
              ©2025 E.C.O SG Solutions Co., Ltd. Bản quyền thuộc về CÔNG TY TNHH
              GIẢI PHÁP XANH BỀN VỮNG E.C.O.
            </p>
            <div className="flex items-center space-x-5 xl:space-x-[1.2vw] 2xl:space-x-[1.1vw] flex-1 justify-end pe-10">
              <SocialLinks
                iconSize="w-3 h-3 xl:w-[0.8vw] xl:h-[0.8vw] 2xl:w-[0.8vw] 2xl:h-[0.8vw]"
                iconColor="text-white"
                hoverColor="hover:text-[#D68C45]"
                className="gap-5"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
