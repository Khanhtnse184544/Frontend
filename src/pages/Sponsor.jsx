import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import sponsorBg from '../assets/get_involved/Sponsor/img.png';
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

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
      <section className="relative w-full items-center justify-center h-[50vw] select-none ">
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
                     <div className="relative z-10 flex items-center justify-between w-full px-16">
           {/* Left Content */}
           <div className="text-white w-1/2">
                         <p className="text-3xl mb-1 -mt-40 ms-30" style={{ fontFamily: 'Pally-Bold, sans-serif' }}>
               Start your green journey
             </p>
            <h1 className="text-7xl font-bold mb-1 ms-30" style={{ fontFamily: 'Pally-Bold, sans-serif' }}>
              SPONSOR
            </h1>
            <h2 className="text-7xl font-bold mb-1 ms-90" style={{ fontFamily: 'Pally-Bold, sans-serif', color: '#D68C45' }}>
              A TREE
            </h2>
            <p className="text-3xl mb-10 ms-70" style={{ fontFamily: 'Pally-Bold, sans-serif' }}>
              Small action, big impact
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 items-center justify-center">
              <div className="w-11 h-11 bg-[#D68C45] rounded-full flex items-center justify-center">
                <FaFacebookF className="text-white text-2xl" />
              </div>
              <div className="w-11 h-11 bg-[#D68C45] rounded-full flex items-center justify-center">
                <FaTiktok className="text-white text-2xl" />
              </div>
              <div className="w-11 h-11 bg-[#D68C45] rounded-full flex items-center justify-center">
                <FaInstagram className="text-white text-2xl" />
              </div>
              <div className="w-11 h-11 bg-[#D68C45] rounded-full flex items-center justify-center">
                <FaYoutube className="text-white text-2xl" />
              </div>
            </div>
          </div>

                                          {/* Right Content - Sponsorship Box */}
           <div className=" bg-white/40 backdrop-blur-md rounded-2xl p-10 shadow-lg w-4/9 border border-white/60 mt-10 me-10">
            <div className="mb-6 text-center">
              <p className="text-xl" style={{ fontFamily: 'Pally-Regular, sans-serif' }}>
                A small tree can transform an entire ecosystem.
              </p>
              <h3 className="text-6xl font-bold text-[#D68C45]" style={{ fontFamily: 'Pally-Bold, sans-serif' }}>
                Be the change-maker
              </h3>
              <p className="text-xl" style={{ fontFamily: 'Pally-Regular, sans-serif' }}>
                Every tree you sponsor is a green lung for the future.
              </p>
            </div>

            {/* Amount Selection Box */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <p className="text-xl mb-4" style={{ fontFamily: 'Pally-Medium, sans-serif' }}>
                Select amount to sponsor
              </p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`py-3 px-4 rounded-lg border transition-all duration-300 ${
                      selectedAmount === amount
                        ? 'bg-[#D68C45] text-white border-[#D68C45]'
                        : 'bg-white text-gray-700 border-[#D68C45] hover:bg-[#D68C45] hover:text-white'
                    }`}
                    style={{ fontFamily: 'Pally-Regular, sans-serif' }}
                  >
                    {amount} VND
                  </button>
                ))}
              </div>
              
              {/* Custom Amount */}
              <div className="flex items-center border border-[#D68C45] rounded-lg p-3 bg-white">
                <span className="text-gray-700 mr-2" style={{ fontFamily: 'Pally-Regular, sans-serif' }}>
                  Other
                </span>
                <input
                  type="text"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-700"
                  placeholder="Enter amount"
                  style={{ fontFamily: 'Pally-Regular, sans-serif' }}
                />
                <span className="text-gray-700 ml-2" style={{ fontFamily: 'Pally-Regular, sans-serif' }}>
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
                    className="bg-white  text-black font-bold py-3 px-6 rounded-[20px] w-[350px] hover:bg-black hover:text-white transition-colors duration-300 shadow-lg text-xl flex items-center justify-center mx-auto"
                    style={{ fontFamily: 'Pally-Bold, sans-serif' }}
                  >
                    Sponsor Now
                  </button>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
