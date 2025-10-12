import React from "react";
import logo from '../assets/homepage/logo.png';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] py-7 justify-center" style={{ fontFamily: 'Pally-Regular, sans-serif' }}>
      <div className="max-w-6xl h-auto mx-auto px-10 ">
        {/* Main Content - Logo Column + Grouped Columns */}
        <div className="flex flex-col items-center px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-2">
          {/* Left Column - Logo Only */}
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="Footer Logo"
              className="w-[165px] h-[165px]"
            />
          </div>

          {/* Right Side - Grouped Columns */}
          <div className="md:col-span-3 flex flex-col justify-center mb-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Company Information */}
              <div className="space-y-2">
                
              </div>

              {/* Tools */}
              <div className="space-y-2">
                
              </div>

              {/* Connect */}
              <div className="space-y-2">
                <h4 className="text-white text-lg font-bold">
                  Connect
                </h4>
                <div className="space-y-1">
                  <p className="text-white text-xs ">
                    Address: FPT University
                  </p>
                  <p className="text-white text-xs ">
                    Email: hello@eco.vn
                  </p>
                  <p className="text-white text-xs ">
                    Website: www.eco.vn
                  </p>
                  <p className="text-white text-xs ">
                    Tel: 012 345 6789
                  </p>
                  <p className="text-white text-xs ">
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
          <div className="w-[100%] border-t border-white pt-4 flex items-center">
            <div className="flex-1"></div>
            <p className="text-white text-xs text-center flex-1">
              ©2025 E.C.O Company. All rights reserved.
            </p>
            <div className="flex items-center space-x-5 flex-1 justify-end pe-10">
              <SocialLinks 
                iconSize="w-2.5 h-2.5"
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
