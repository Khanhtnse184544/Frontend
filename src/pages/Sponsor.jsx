import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import sponsorBg from '../assets/get_involved/Sponsor/img.png';

export default function Sponsor() {
  const [selectedAmount, setSelectedAmount] = useState("20.000");
  const [customAmount, setCustomAmount] = useState("");

  const amounts = [
    "10.000",
    "20.000", 
    "50.000",
    "100.000",
    "200.000",
    "500.000"
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative w-full items-center justify-center h-[50vw] lg:h-[90vh] 2xl:h-[90vh] select-none ">
        <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
          <Navbar />
        </div>
        
        <img
          src={sponsorBg}
          alt="Background"
          className="absolute inset-0 w-full h-full"
        />
        
        <div>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 flex items-center justify-between w-full px-16 lg:px-[4vw] 2xl:px-[5vw] 2xl:pt-15 xl:pt-7 pt-10">
           {/* Left Content */}
           <div className="text-white w-1/2">
            <p className="text-xl lg:text-xl 2xl:text-3xl mb-1 -mt-20 ms-15" >
               Cùng gieo mầm xanh
             </p>
           <h1 className="text-5xl lg:text-5xl 2xl:text-7xl font-bold mb-1 ms-15" >
              SPONSOR
            </h1>
            <h2 className="text-5xl lg:text-5xl 2xl:text-7xl font-bold mb-1 ms-86 text-[#D68C45] 2xl:ms-102" >
              A TREE
            </h2>
            <p className="text-xl lg:text-xl 2xl:text-3xl mb-10 ms-57" >
            Hành động nhỏ - Thay đổi lớn.

            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center justify-center">
              <SocialLinks 
                iconSize="w-4 h-4 lg:w-[1.2vw] lg:h-[1.2vw] 2xl:w-[1.1vw] 2xl:h-[1.1vw]"
                iconColor="text-white"
                hoverColor="hover:scale-110"
                className="gap-4"
                customWrapper={(children) => (
                  <div className="w-9 h-9 lg:w-[2.2vw] lg:h-[2.2vw] 2xl:w-[2.3vw] 2xl:h-[2.3vw] bg-[#D68C45] rounded-full flex items-center justify-center hover:bg-[#B87A3A] transition-colors duration-300">
                    {children}
                  </div>
                )}
              />
            </div>
          </div>

           {/* Right Content - Sponsorship Box */}
           <div className=" bg-white/40 backdrop-blur-md rounded-2xl 2xl:rounded-3xl px-10 lg:px-[2.2vw] 2xl:px-[2.5vw] py-7 lg:py-[3vh] 2xl:py-[2.5vh] shadow-lg w-4/9 lg:w-[45vw] 2xl:w-[41vw] border border-white/60 mt-10 lg:mt-[4vh] me-10 lg:me-[4vw]">
            <div className="mb-6 text-center">
              
              <h3 className="text-3xl lg:text-3xl 2xl:text-4xl font-bold text-[#D68C45]" >
              Cùng hành động, tạo khác biệt.

              </h3>
              <p className="text-md lg:text-md 2xl:text-xl" >
              Mỗi cây được trồng là một hi vọng được nuôi dưỡng.


              </p>
            </div>

            {/* Amount Selection Box */}
            <div className="bg-white rounded-xl p-1.5vw lg:p-[1.6vw] 2xl:p-[1.8vw] shadow-lg mb-6">
              <p className="text-lg lg:text-lg 2xl:text-xl mb-4" >
              Chọn mức gieo mầm

              </p>
              <div className="grid grid-cols-3 gap-3 lg:gap-[1vw] 2xl:gap-[1.2vw] mb-4">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`py-2.5 lg:py-[1vh] 2xl:py-[1vh] px-3.5 lg:px-[0.8vw] 2xl:px-[0.8vw] rounded-lg text-sm lg:text-sm 2xl:text-lg border transition-all duration-300 ${
                      selectedAmount === amount
                        ? 'bg-[#D68C45] text-white border-[#D68C45]'
                        : 'bg-white text-gray-700 border-[#D68C45] hover:bg-[#D68C45] hover:text-white'
                    }`}
                    
                  >
                    {amount} VND
                  </button>
                ))}
              </div>
              
              {/* Custom Amount */}
              <div className="flex items-center border border-[#D68C45] rounded-lg p-2.5 lg:p-[0.8vw] 2xl:p-[0.9vw] bg-white">
                <span className="text-gray-700 mr-2" >
                  Khác
                </span>
                <input
                  type="text"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-700 text-sm lg:text-base 2xl:text-lg"
                  placeholder="Nhập giá trị"
                  
                />
                <span className="text-gray-700 ml-2" >
                  VND
                </span>
              </div>
            </div>

            {/* Sponsor Now Button */}
            <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openContact();
                    }}
                    className="bg-white  text-black font-bold py-2 lg:py-[1vh] 2xl:py-[1.1vh] rounded-[15px] 2xl:rounded-[20px] w-[310px] lg:w-[22vw] 2xl:w-[18vw] hover:bg-black hover:text-white transition-colors duration-300 shadow-lg text-xl lg:text-xl 2xl:text-2xl flex items-center justify-center mx-auto"
                    
                  >
                    Gieo Mầm Ngay
                  </button>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
