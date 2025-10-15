import React from "react";
import logo from '../assets/homepage/logo.png';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] py-7 lg:py-[3vh] 2xl:py-[3vh] justify-center" style={{ fontFamily: 'Pally-Regular, sans-serif' }}>
      <div className="max-w-6xl lg:max-w-[83vw] 2xl:max-w-[83vw] h-auto mx-auto px-10 lg:px-[4vw] 2xl:px-[5vw] ">
        {/* Main Content - Logo Column + Grouped Columns */}
        <div className="flex flex-col items-center px-20 lg:px-[6vw] 2xl:px-[5vw]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 lg:gap-[2vw] 2xl:gap-[2.5vw] mb-2 lg:mb-[2vh] 2xl:mb-[1.5vh]">
          {/* Left Column - Logo Only */}
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="Footer Logo"
              className="w-[165px] h-[165px] lg:w-[12vw] lg:h-[12vw] 2xl:w-[13vw] 2xl:h-[12vw]"
            />
          </div>

          {/* Right Side - Grouped Columns */}
          <div className="md:col-span-3 flex flex-col justify-center mb-3 lg:mb-[2vh] 2xl:mb-[1.5vh]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-[2vw] 2xl:gap-[2.5vw]">
              {/* Company Information */}
              <div className="space-y-2">
                
              </div>

              {/* Tools */}
              <div className="space-y-2">
                
              </div>

              {/* Connect */}
              <div className="space-y-2">
                <h4 className="text-white text-lg lg:text-lg 2xl:text-xl font-bold">
                  Connect
                </h4>
                <div className="space-y-1">
                  <p className="text-white text-xs lg:text-xs 2xl:text-md ">
                    Address: FPT University
                  </p>
                  <p className="text-white text-xs lg:text-xs 2xl:text-md ">
                    Email: hello@eco.vn
                  </p>
                  <p className="text-white text-xs lg:text-xs 2xl:text-md ">
                    Website: www.eco.vn
                  </p>
                  <p className="text-white text-xs lg:text-xs 2xl:text-md ">
                    Tel: 012 345 6789
                  </p>
                  <p className="text-white text-xs lg:text-xs 2xl:text-md ">
                    Headquarters: Ho Chi Minh City, Vietnam
                  </p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
        </div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className="flex flex-col items-center">
          <div className="w-[100%] border-t border-white pt-4 lg:pt-[2vh] 2xl:pt-[2.5vh] flex items-center">
            <div className="flex-1"></div>
            <p className="text-white text-xs lg:text-xs 2xl:text-md text-center flex-1">
              ©2025 E.C.O Company. All rights reserved.
            </p>
            <div className="flex items-center space-x-5 lg:space-x-[1.2vw] 2xl:space-x-[1.1vw] flex-1 justify-end pe-10">
              <SocialLinks 
                iconSize="w-3 h-3 lg:w-[0.8vw] lg:h-[0.8vw] 2xl:w-[0.8vw] 2xl:h-[0.8vw]"
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
