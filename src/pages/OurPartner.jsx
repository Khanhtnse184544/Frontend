import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
  const [formData, setFormData] = useState({
    contact: '',
    subject: '',
    message: ''
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    closeContact();
  };

  return (
    <>
      <Header />
      <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
        <Navbar />
      </div>
    <div className="bg-[#EEEEEE]">
      {/* Hero Section with Banner */}
      <section className="relative w-full h-[600px] overflow-hidden -mt-[118px] group cursor-pointer">
        <img
          src={partnerBanner}
          alt="Our Partners Banner"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Default overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          <div className="text-center text-white">
            <h1
              className="text-7xl text-center text-[#FE9A3B] font-bold mb-4"
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
              className="text-md mb-3 max-w-4xl text-center"
              style={{ fontFamily: "Pally-Regular, sans-serif" }}
            >
              Partnering with E.C.O means more than CSR - it's an opportunity to
              build authentic connections with a green-minded community, amplify
              brand values, and lead the way in transparent and innovative
              sustainability communication.
            </p>

            {/* Main heading */}
            <h1
              className="text-7xl text-center text-[#FE9A3B] font-bold mb-3"
              style={{ fontFamily: "Pally-Bold, sans-serif" }}
            >
              WHY PARTNER WITH E.C.O
            </h1>

            {/* Bottom text */}
            <p
              className="text-md text-center max-w-4xl mb-10"
              style={{ fontFamily: "Pally-Regular, sans-serif" }}
            >
              E.C.O is a social enterprise combining technology, education, and
              green action through our gamified app C.H.A.M, we transform every
              digital gesture into real-world environmental impact - a planted
              tree, a restored forest, an inspired generation.
            </p>
            <button
              onClick={openContact}
              className="bg-[#D68C45]  text-white font-bold py-3 px-6 rounded-[15px] w-[200px] h-[50px] hover:bg-[#E5E2E2] hover:text-[#D68C45] hover:border-3 hover:border-[#D68C45] transition-colors duration-300 shadow-lg text-lg flex items-center justify-center mx-auto"
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
                  className="text-7xl font-bold "
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  Ways To <span className="text-[#D68C45]">Collaborate</span>
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    We welcom collaboration from:{" "}
                  </h3>

                  <p
                    className=" leading-relaxed text-lg"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    CSR-focused Corporations: Fund real tree-planting campaigns
                    with full transparency and digital visibility.
                  </p>
                </div>

                <div>
                  <p
                    className=" leading-relaxed text-lg"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    Schools & Educational Institutions: Co-create environmental
                    workshops, student engagement programs, and green field
                    trips.
                  </p>
                </div>

                <div>
                  <p
                    className=" leading-relaxed text-lg"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    NGOs & Environmental Funds: Use our platform to amplify
                    conservation missions with innovative storytelling and
                    gamification.
                  </p>
                </div>

                <div>
                  <p
                    className=" leading-relaxed text-lg"
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
                    className="w-80  h-auto object-cover rounded-2xl shadow-xl"
                  />
                </div>

                {/* Middle Image - Positioned right and slightly down */}
                <div className="absolute top-50 -right-5 z-20">
                  <img
                    src={collab2}
                    alt="Rolling hills and golden fields"
                    className="w-80 h-auto object-cover rounded-2xl shadow-xl"
                  />
                </div>

                {/* Bottom Image - Positioned left and further down */}
                <div className="absolute -bottom-40 -left-3 z-10">
                  <img
                    src={collab3}
                    alt="Serene lake with trees"
                    className="w-72 h-48 object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Why Choose E.C.O */}
            <div className="lg:col-span-2 space-y-6 ps-10 pt-30">
              <div>
                <h3
                  className="text-4xl font-bold text-[#D68C45]  mb-2"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  Let's Build Green Impact Together
                </h3>
                <h2
                  className="text-4xl font-bold -mb-3"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  Why Choose E.C.O?
                </h2>
              </div>

              <div className="space-y-3 ">
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
          className="text-6xl font-bold text-black mb-4"
          style={{ fontFamily: "Pally-Bold, sans-serif" }}
        >
          PARTNER WITH E.C.O - Where Forests Grow – Together
        </h1>
        
      </div>
      

       {/* Our Impact Section with Homepage Images */}
       <section className=" pb-10 bg-[#EEEEEE]">
         <div className="px-30 mx-auto px-8">
           {/* Section Title */}
           <div className="text-center mb-16">
             <h2 className="text-6xl font-bold text-black mb-4" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
               Ecosystem
             </h2>
             
             
           </div>

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
       {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[30px] p-15 max-w-3xl w-full h-[550px] mx-4 relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeContact}
              className="absolute top-5 right-8 text-[#D68C45] text-4xl"
            >
              ×
            </button>

            {/* Title */}
            <h2
              className="text-4xl font-bold text-[#D68C45] mb-6"
              style={{ fontFamily: "Pally-Bold, sans-serif" }}
            >
              Contact us
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Phone or Email Field */}
              <div>
                <label
                  className="block text-gray-500 text-2xl font-semibold mb-2"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Your Phone or Email
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Your Contact"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-[#D68C45] outline-none bg-transparent"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  className="block text-gray-500 text-2xl font-semibold mb-2"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  What about
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-[#D68C45] outline-none bg-transparent appearance-none"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  <option value="">--- ---</option>
                  <option value="school-education">
                    For company
                  </option>
                  <option value="extracurricular">
                    For school
                  </option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label
                  className="block text-gray-500 text-2xl font-semibold mb-2"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Note
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="2"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-[#D68C45] outline-none bg-transparent resize-none"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                />
              </div>

              {/* Send Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#D68C45] text-white font-bold py-3 px-6 rounded-[20px] w-[350px] hover:bg-black hover:text-white transition-colors duration-300 shadow-lg text-xl flex justify-center"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

       <Footer />
    </>
  );
}
