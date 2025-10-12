import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUsPopup from "../components/ContactUsPopup";
import partnerBanner from "../assets/get_involved/our_partner/banner.png";
import collab1 from "../assets/get_involved/our_partner/collab1.png";
import collab2 from "../assets/get_involved/our_partner/collab2.png";
import collab3 from "../assets/get_involved/our_partner/collab3.png";
import cattienImage from "../assets/get_involved/our_partner/img.png";
import h1Image from "../assets/homepage/h1.jpg";
import h2Image from "../assets/homepage/h2.jpg";
import h3Image from "../assets/homepage/h3.jpg";
import h4Image from "../assets/homepage/h4.jpg";

export default function OurPartner() {
  const navigate = useNavigate();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleSemiDeciduousClick = () => {
    navigate('/semi-deciduous-forest');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const handleBambooForestClick = () => {
    navigate('/bamboo-forest');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const handleWetlandClick = () => {
    navigate('/wetland');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const handleMixedHardwoodClick = () => {
    navigate('/mixed-hardwood');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const openContact = () => {
    setIsContactOpen(true);
  };

  const closeContact = () => {
    setIsContactOpen(false);
  };

  const handleContactSubmit = (formData) => {
    // Handle form submission here
    console.log('Contact form submitted:', formData);
    // You can add API call here
  };

  return (
    <>
      <Header />
      <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
        <Navbar />
      </div>
    <div className="bg-[#EEEEEE]">
      {/* Hero Section with Banner */}
      <section className="relative w-full h-[600px] overflow-hidden -mt-[102px] group cursor-pointer">
        <img
          src={partnerBanner}
          alt="Our Partners Banner"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Default overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          <div className="text-center text-white">
            <h1
              className="text-[4.2rem] text-center text-[#FE9A3B] font-bold mb-4"
              style={{ fontFamily: "Pally-Bold, sans-serif" }}
            >
              WHY PARTNER WITH E.C.O
            </h1>
          </div>
        </div>

        {/* Hover overlay with dark background and white box */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white  px-8 pt-18 text-center">
            {/* Top text */}
            <p
              className="text-[0.9rem]  max-w-3xl text-center"
              style={{ fontFamily: "Pally-Regular, sans-serif" }}
            >
              Partnering with E.C.O means more than CSR - it's an opportunity to
              build authentic connections with a green-minded community, amplify
              brand values, and lead the way in transparent and innovative
              sustainability communication.
            </p>

            {/* Main heading */}
            <h1
              className="text-[4.2rem] text-center text-[#FE9A3B] font-bold  "
              style={{ fontFamily: "Pally-Bold, sans-serif" }}
            >
              WHY PARTNER WITH E.C.O
            </h1>

            {/* Bottom text */}
            <p
              className="text-[0.9rem] text-center max-w-3xl mb-10"
              style={{ fontFamily: "Pally-Regular, sans-serif" }}
            >
              E.C.O is a social enterprise combining technology, education, and
              green action through our gamified app C.H.A.M, we transform every
              digital gesture into real-world environmental impact - a planted
              tree, a restored forest, an inspired generation.
            </p>
            <button
              onClick={openContact}
              className="bg-[#D68C45]  text-white font-bold   rounded-[15px] w-[190px] h-[47px] hover:bg-[#E5E2E2] hover:text-[#D68C45] hover:border-3 hover:border-[#D68C45] transition-colors duration-300 shadow-lg text-md flex items-center justify-center mx-auto"
              style={{ fontFamily: "Pally-Bold, sans-serif" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Ways To Collaborate Section */}
      <section className="ps-30 pe-20 py-40 bg-[#EEEEEE]">
        <div className=" mx-auto ">
          <div className="grid lg:grid-cols-7 gap-10 items-start">
            {/* Left Column - Ways To Collaborate */}
            <div className="lg:col-span-3 space-y-2">
              <div>
                <h2
                  className="text-6xl font-bold "
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  Ways To <span className="text-[#D68C45]">Collaborate</span>
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    We welcom collaboration from:{" "}
                  </h3>

                  <p
                    className=" leading-relaxed text-md"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    CSR-focused Corporations: Fund real tree-planting campaigns
                    with full transparency and digital visibility.
                  </p>
                </div>

                <div>
                  <p
                    className=" leading-relaxed text-md"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    Schools & Educational Institutions: Co-create environmental
                    workshops, student engagement programs, and green field
                    trips.
                  </p>
                </div>

                <div>
                  <p
                    className=" leading-relaxed text-md"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    NGOs & Environmental Funds: Use our platform to amplify
                    conservation missions with innovative storytelling and
                    gamification.
                  </p>
                </div>

                <div>
                  <p
                    className=" leading-relaxed text-md"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    KOLs & Content Creators: Join us in spreading environmental
                    awareness to Gen Z through fun and inspiring digital
                    content.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Column - Image Collage */}
            <div className="lg:col-span-2 flex justify-center items-center">
              <div className="relative w-full max-w-md h-100">
                {/* Top Image - Positioned left */}
                <div className=" top-0 -left-10 z-30">
                  <img
                    src={collab1}
                    alt="Green mountains and valleys"
                    className="w-78  h-auto object-cover rounded-2xl shadow-xl"
                  />
                </div>

                {/* Middle Image - Positioned right and slightly down */}
                <div className="absolute top-40 -right-5 z-20">
                  <img
                    src={collab2}
                    alt="Rolling hills and golden fields"
                    className="w-73 h-auto object-cover rounded-2xl shadow-xl"
                  />
                </div>

                {/* Bottom Image - Positioned left and further down */}
                <div className="absolute -bottom-25 -left-3 z-10">
                  <img
                    src={collab3}
                    alt="Serene lake with trees"
                    className="w-68 h-43 object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Why Choose E.C.O */}
            <div className="lg:col-span-2 space-y-6 ps-10 pt-30">
              <div>
                <h3
                  className="text-3xl font-bold text-[#D68C45]  mb-2"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  Let's Build Green Impact Together
                </h3>
                <h2
                  className="text-3xl font-bold -mb-3"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  Why Choose E.C.O?
                </h2>
              </div>

              <div className="space-y-3 text-sm ">
                <p
                  className=" leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  We don't just plant trees—we reconnect people with nature
                  through technology, transparency, and heartfelt storytelling.
                </p>
                <p
                  className=" leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Every tree planted with us has a real location, a real image,
                  real care, and a real story to tell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Title Section */}
      <div className="text-center mt-10">
        <h1
          className="text-5xl font-bold text-black mb-8"
          style={{ fontFamily: "Pally-Bold, sans-serif" }}
        >
          PARTNER WITH E.C.O - Where Forests Grow – Together
        </h1>
        
      </div>
      

       {/* Our Impact Section with Homepage Images */}
       <section className=" pb-10 bg-[#EEEEEE]">
         <div className="px-30 mx-auto px-8">
           {/* Section Title */}
           

           {/* Image Grid */}
           <div className="grid lg:grid-cols-2 gap-8 mb-16">
             {/* Top Row - 2 Images */}
             <div className="space-y-8">
               {/* Image 1 */}
               <div className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer" onClick={handleMixedHardwoodClick}>
                 <img
                   src={h1Image}
                   alt="Environmental Impact 1"
                   className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="text-center text-white p-6">
                     <h2 className="text-5xl font-bold mb-2" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                       MIXED HARDWOOD - BAMBOO FOREST
                     </h2>
                     
                   </div>
                 </div>
               </div>

               {/* Image 2 */}
               <div className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer" onClick={handleWetlandClick}>
                 <img
                   src={h2Image}
                   alt="Environmental Impact 2"
                   className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="text-center text-white p-6">
                     
                     <h2 className="text-5xl font-bold mb-2" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                       WETLAND AND SEMI - WETLAND VEGETATION
                     </h2>
                   </div>
                 </div>
               </div>
             </div>

             {/* Bottom Row - 2 Images */}
             <div className="space-y-8">
               {/* Image 3 */}
               <div className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer" onClick={handleBambooForestClick}>
                 <img
                   src={h3Image}
                   alt="Environmental Impact 3"
                   className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="text-center text-white p-6">
                   <h2 className="text-5xl font-bold mb-2" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                       MONOSPECIFIC BAMBOO FOREST
                     </h2>
                     
                   </div>
                 </div>
               </div>

                               {/* Image 4 */}
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer" onClick={handleSemiDeciduousClick}>
                  <img
                    src={h4Image}
                    alt="Semi-Deciduous Evergreen Forest"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <h2 className="text-5xl font-bold mb-2" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                        SEMI-DECIDUOUS EVERGREEN FOREST
                      </h2>
                      
                    </div>
                  </div>
                </div>
             </div>
           </div>

           
         </div>
       </section>
       </div>

      {/* Contact Form Popup */}
      <ContactUsPopup 
        isOpen={isContactOpen} 
        onClose={closeContact} 
        onSubmit={handleContactSubmit} 
      />

       <Footer />
    </>
  );
}
