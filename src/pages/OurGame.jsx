import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaFacebookF, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import heroImage from "../assets/C.H.A.M/our_game/hero.png";
import gameBackground from "../assets/C.H.A.M/our_game/bg.png";
import gameInterface from "../assets/C.H.A.M/our_game/game.png";

export default function OurGame() {
  return (
    <>
      <style>
        {`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      <Header />

      {/* Main Content Section */}
      <section className="relative w-full bg-white">
        <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
          <Navbar />
        </div>

        {/* Hero Section */}
        <section className="relative w-full h-screen -mt-[102px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="C.H.A.M Game Hero Background"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="container mx-auto px-6">
              <div className="flex justify-end items-center pe-10">
                <div className="text-center space-y-3">
                  {/* C.H.A.M GAME Text with Gradient */}
                  <h1
                    className="text-6xl font-bold"
                    style={{
                      background:
                        "linear-gradient(135deg, #ffffff 0%, #60DEF2 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontFamily: "Pally-Bold, sans-serif",
                      textShadow: "0 4px 8px rgba(96, 222, 242, 0.3)",
                    }}
                  >
                    C.H.A.M GAME
                  </h1>

                  {/* Download Button */}
                  <button
                    className="text-white text-2xl font-bold px-11 py-1.5 rounded-[15px] transition-all duration-300  hover:shadow-xl transform hover:scale-105"
                    style={{
                      fontFamily: "Pally-Bold, sans-serif",
                      background:
                        "linear-gradient(135deg, #60DEF2 0%, #4BC0D9 50%, #60DEF2 100%)",
                      backgroundSize: "200% 200%",
                      animation: "gradientShift 3s ease-in-out infinite",
                    }}
                  >
                    Download now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        
                          {/* Game Interface Section */}
                  <section className="relative pt-20 pb-10">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={gameBackground}
                        alt="Forest Background with Rain Effect"
                        className="w-full h-full object-cover"
                      />
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/40"></div>
                      {/* Rain effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-200/10 to-transparent"></div>
                    </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6">
            <div className="flex flex-col items-center">
              {/* Game Interface Image */}
              <div>
                <img
                  src={gameInterface}
                  alt="C.H.A.M Game Interface"
                  className="max-w-4xl w-full rounded-2xl shadow-2xl border-5 border-white"
                />
              </div>

                             {/* Description */}
               <div className="max-w-4xl  rounded-2xl p-6 ">
                 <h3
                   className="text-3xl font-bold text-white  "
                   style={{ fontFamily: "Pally-Bold, sans-serif" }}
                 >
                   Real-Time Weather Feature
                 </h3>
                 <p
                   className="text-white text-lg leading-relaxed"
                   style={{ fontFamily: "Pally-Regular, sans-serif" }}
                 >
                   C.H.A.M connects directly with real-time weather at Cát Tiên
                   National Park, allowing virtual trees to grow based on actual
                   weather conditions. When it rains, the trees are automatically
                   watered, and during dry spells, players must take extra care.
                   This feature provides a realistic experience, helping players
                   understand how weather impacts tree growth while raising
                   awareness about climate change.
                 </p>
               </div>

               {/* Joining the Journey Section */}
               <div className="px-20 w-full mt-30">
                 <div className="flex justify-between items-center">
                   {/* Text with Gradient */}
                   <div>
                     <h2 
                       className="text-5xl font-bold"
                       style={{
                         background: "linear-gradient(135deg, #ffffff 0%, #60DEF2 100%)",
                         WebkitBackgroundClip: "text",
                         WebkitTextFillColor: "transparent",
                         backgroundClip: "text",
                         fontFamily: "Pally-Bold, sans-serif"
                       }}
                     >
                       Joining the Journey
                     </h2>
                   </div>

                   {/* Social Media Icons */}
                   <div className="flex space-x-15">
                     {/* Facebook */}
                     <div className="  flex items-center justify-center hover:scale-110 transition-all duration-300 " >
                       <FaFacebookF className="text-white text-3xl" />
                     </div>

                     {/* TikTok */}
                     <div className="  flex items-center justify-center hover:scale-110 transition-all duration-300 " >
                       <FaTiktok className="text-white text-3xl" />
                     </div>

                     

                     {/* YouTube */}
                     <div className="  flex items-center justify-center hover:scale-110 transition-all duration-300 " >
                       <FaYoutube className="text-white text-3xl" />
                     </div>
                   </div>
                 </div>
               </div>

              
             </div>
           </div>
         </section>
      </section>

      <Footer />
    </>
  );
}
