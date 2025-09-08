import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaHeart } from "react-icons/fa";
import csrImage from '../assets/get_involved/become_a_sponsor/csr.png';
import handImage from '../assets/get_involved/become_a_sponsor/hand.png';

export default function BecomeSponsor() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [formData, setFormData] = useState({
    contact: "",
    subject: "",
    message: ""
  });

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);
  const toggleCard = () => setIsCardFlipped(!isCardFlipped);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    closeContact();
  };

  return (
    <>
      <Header />
      
      {/* Hero Section with Background Color */}
      <section className="relative w-full items-center justify-center h-[50vw] select-none" style={{ backgroundColor: '#C2BDB7' }}>
        <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
          <Navbar />
        </div>
        
        <div className="flex items-center justify-center h-full relative">
          <img
            src={csrImage}
            alt="CSR Image"
            className="h-[700px] w-auto object-contain transform absolute right-40 -top-20"
          />
          
          {/* Text overlay */}
          <div className="absolute w-[600px] bottom-40 right-10 z-20">
            <p className="text-[#D68C45] font-semibold text-3xl leading-tight text-center mb-1" style={{ fontFamily: 'Pally-Medium, sans-serif' }}>
              "TOGETHER WITH n+ PARTNERS ACROSS VARIOUS GREEN INITIATIVES.
            </p>
            <p className="text-black font-medium text-xl leading-tight text-center" style={{ fontFamily: 'Pally-Regular, sans-serif' }}>
              Their success is our strongest motivation to keep growing every day."
            </p>
          </div>
          
          {/* Partner with E.C.O Card - Positioned in center-left */}
          <div className="absolute  left-20 top-3/7 transform -translate-y-1/2 z-10">
            <div 
              className={`relative w-[570px] h-[600px] transition-transform duration-700 cursor-pointer`}
              onClick={toggleCard}
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
                             {/* Front of card - Partner with E.C.O */}
               <div 
                 className={`absolute w-full h-full transition-all duration-1500 ${isCardFlipped ? 'opacity-0' : 'opacity-100'}`}
                 style={{ 
                   backfaceVisibility: 'hidden',
                   transform: isCardFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                 }}
               >
                <div className="bg-white rounded-3xl px-19 pt-4 pb-20 shadow-lg w-full h-full flex flex-col justify-between">
                  {/* Partnership Icon */}
                  <div className=" flex items-center justify-center mt-8 mb-4 overflow-hidden">
                    <img 
                      src={handImage} 
                      alt="Partnership Handshake" 
                      className="w-35 h-35 object-contain"
                    />
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-4xl font-bold text-[#D68C45] mb-4" style={{ fontFamily: 'Pally-Bold, sans-serif' }}>
                    <span className="underline decoration-5">Partner</span> with E.C.O
                  </h2>
                  
                  {/* Description */}
                  <p className="text-lg leading-relaxed mb-6 flex-grow" style={{ fontFamily: 'Pally-Medium, sans-serif' }}>
                    E.C.O is the ideal solution for businesses seeking transparent, impactful, and easily communicable CSR/ESG (Corporate Social Responsibility/Environmental, Social, and Governance) activities. We offer a unique platform that combines technology, emotion, and real environmental impact.
                  </p>
                  
                  {/* Get In Touch Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openContact();
                    }}
                    className="bg-black text-white font-bold py-3 px-6 rounded-[20px] w-[350px] hover:bg-white hover:text-black transition-colors duration-300 shadow-lg text-xl flex items-center justify-center mx-auto"
                    style={{ fontFamily: 'Pally-Bold, sans-serif' }}
                  >
                    Get In Touch
                  </button>
                </div>
              </div>

                              {/* Back of card - Why Choose E.C.O */}
                <div 
                  className={`absolute w-full h-full transition-all duration-1500 ${isCardFlipped ? 'opacity-100' : 'opacity-0'}`}
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: isCardFlipped ? 'rotateY(0deg)' : 'rotateY(-180deg)'
                  }}
                >
                <div className="bg-white rounded-3xl p-20 shadow-lg w-full h-full flex flex-col justify-between">
                  {/* Title */}
                  <h2 className="text-5xl font-bold text-[#D68C45] mb-4 text-center" style={{ fontFamily: 'Pally-Bold, sans-serif' }}>
                    Why Choose E.C.O
                  </h2>
                  
                  {/* Content */}
                  <div className="space-y-3  flex-grow" style={{ fontFamily: 'Pally-Medium, sans-serif' }}>
                    <p className="text-lg  leading-relaxed">
                      E.C.O helps businesses undertake "actual environmental actions," meeting global ESG trends.
                    </p>
                    <p className="text-lg  leading-relaxed">
                      Tree planting and conservation activities are clearly recorded with specific images and coordinates.
                    </p>
                    <p className="text-lg  leading-relaxed">
                      Through the C.H.A.M app, businesses can connect with an environmentally conscious user base, especially Gen Z.
                    </p>
                    <p className="text-lg  leading-relaxed">
                      Businesses can sponsor, users have a personalized experience, and National Parks receive additional conservation support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

              {/* Contact Us Popup */}
        {isContactOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-[30px] p-15 max-w-3xl w-full h-[550px] mx-4 relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeContact}
              className="absolute top-5 right-8 text-[#D68C45] text-4xl "
            >
              ×
            </button>

            {/* Title */}
            <h2 className="text-4xl font-bold text-[#D68C45] mb-6" style={{ fontFamily: 'Pally-Bold, sans-serif' }}>
              Contact us
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Phone or Email Field */}
              <div>
                <label className="block text-gray-500 text-2xl font-semibold mb-2" style={{ fontFamily: 'Pally-Regular, sans-serif' }}>
                  Your Phone or Email
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Your Contact"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-[#D68C45] outline-none bg-transparent"
                  style={{ fontFamily: 'Pally-Regular, sans-serif' }}
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-gray-500 text-2xl font-semibold mb-2" style={{ fontFamily: 'Pally-Regular, sans-serif' }}>
                  What about
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-[#D68C45] outline-none bg-transparent appearance-none"
                  style={{ fontFamily: 'Pally-Regular, sans-serif' }}
                >
                  <option value="">--- ---</option>
                  <option value="company">For Company</option>
                  <option value="school">For School</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-500 text-2xl font-semibold mb-2" style={{ fontFamily: 'Pally-Regular, sans-serif' }}>
                  Note
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="2"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-[#D68C45] outline-none bg-transparent resize-none"
                  style={{ fontFamily: 'Pally-Regular, sans-serif' }}
                />
              </div>

              {/* Send Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#D68C45] text-white font-bold py-3 px-6 rounded-[20px] w-[350px] hover:bg-black hover:text-white transition-colors duration-300 shadow-lg text-xl flex justify-center"
                  style={{ fontFamily: 'Pally-Bold, sans-serif' }}
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
