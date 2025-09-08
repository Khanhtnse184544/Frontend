import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import h4Image from "../assets/homepage/h4.jpg";

export default function SemiDeciduousForest() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/our-partner');
  };

  return (
    <>
      <Header />
      <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
        <Navbar />
      </div>
      
      {/* Semi-Deciduous Evergreen Forest Section */}
      <section className="relative w-full h-full overflow-hidden -mt-[118px] pb-15">
        
                 {/* Background Image */}
         <img
           src={h4Image}
           alt="Semi-Deciduous Evergreen Forest"
           className="absolute inset-0 w-full h-full object-cover blur-sm"
         />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gray/20"></div>
        
                 {/* Content */}
         <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
           <div className="max-w-7xl mx-auto px-8">
           
            
                                                  {/* Main Content Grid */}
             <div className="relative grid lg:grid-cols-5 gap-10 items-center bg-transparent backdrop-blur-xs rounded-3xl px-20 pb-20 pt-10 shadow-2xl border-2 border-white w-full max-w-7xl mx-auto min-h-[600px]">
              
               {/* Title Section */}
               <div className="lg:col-span-5 text-center ">
                 <h1 className="text-5xl font-bold text-white text-center" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                   SEMI-DECIDUOUS EVERGREEN FOREST
                 </h1>
               </div>
              
                               {/* Left Panel - Forest Image */}
               <div className="flex justify-center lg:col-span-2">
                 <div className="relative">
                   <img
                     src={h4Image}
                     alt="Semi-Deciduous Evergreen Forest"
                     className="w-100 h-130 object-cover rounded-2xl border-2 border-white shadow-2xl"
                   />
                 </div>
               </div>
              
              {/* Right Panel - Information Box */}
              <div className="lg:col-span-3">
                <div className="space-y-6 text-white">
                  {/* Location */}
                  <div>
                    <p className="text-xl " style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                      Location: <span className="text-xl " style={{ fontFamily: "Pally-Regular, sans-serif" }}>Northeastern Nam Cát Tiên and along the Đồng Nai River</span>
                    </p>
                  </div>
                  
                  {/* Main Heading */}
                  <div>
                    <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                      Nature's smart adaptation to wet and dry seasons
                    </h2>
                  </div>
                  
                  {/* Key Features */}
                  <div>
                    <h3 className="text-3xl font-bold" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                      Key Features:
                    </h3>
                    <p className="text-xl leading-relaxed" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                      This is the dominant ecosystem, comprising over 75% of the region's plant species. The trees shed leaves during the dry season to minimize water loss and re-green in the rainy season. Representative species include: Lagerstroemia calyculata, Tetrameles nudiflora, Anogeissus acuminata, with massive buttress roots on shallow rocky soils.
                    </p>
                  </div>
                  
                  {/* Ecological Value */}
                  <div>
                    <h3 className="text-3xl font-bold" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                      Ecological value:
                    </h3>
                    <p className="text-xl leading-relaxed" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                      Acts as the "green lungs" of the park, maintaining biodiversity and climate regulation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
