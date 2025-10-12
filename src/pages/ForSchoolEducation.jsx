import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUsPopup from "../components/ContactUsPopup";
import schoolImage from "../assets/get_involved/for-school/img.png";

export default function ForSchoolEducation() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const handleContactSubmit = (formData) => {
    // Handle form submission here
    console.log('Contact form submitted:', formData);
    // You can add API call here
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full px-20 pb-15 bg-[#FDFDFD]">
        <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
          <Navbar />
        </div>
        <div className=" p-15">
          <div className="flex items-center gap-16 relative">
            {/* Left Side - Image Card */}
            <div className="w-3/7 ps-15">
              <div className="relative w-[407px] h-[515px] rounded-[70px] overflow-hidden shadow-2xl group cursor-pointer transition-all duration-300 hover:shadow-2xl">
                <img
                  src={schoolImage}
                  alt="Green Education Programs"
                  className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Default Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/40 backdrop-blur-xs w-full h-[60px] flex items-center justify-center px-8 py-6 shadow-lg">
                    <h3
                      className="text-white text-3xl font-bold text-center"
                      style={{ fontFamily: "Pally-Bold, sans-serif" }}
                    >
                      Explore Our Programs
                    </h3>
                  </div>
                </div>

                {/* Hover Overlay with Our Initiatives */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ps-10 pe-6">
                  <div className="text-white">
                    <h2 
                      className="text-[2.7rem] font-bold mb-3 ps-8 text-[#D68C45]"
                      style={{ fontFamily: "Pally-Bold, sans-serif" }}
                    >
                      Our Initiatives
                    </h2>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-semibold">Forest Experience Tours at National Parks:</p>
                        <p className="text-gray-200">Organize field trips, tree planting, and learning about ecosystems under the guidance of experts.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Using the C.H.A.M App in Teaching:</p>
                        <p className="text-gray-200">Integrate the C.H.A.M game as an educational tool, helping students learn about trees, climate, and conservation in an intuitive and engaging way.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Environmental Education Workshops:</p>
                        <p className="text-gray-200">Host interactive workshops at schools, utilizing lessons integrated from the C.H.A.M game.</p>
                      </div>
                      <div>
                        <p className="font-semibold">"My Tree" Volunteer Program:</p>
                        <p className="text-gray-200">Students participate in planting and tracking their real trees through the application.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Short vertical line */}
              <div className="absolute left-3/7 ms-3.5 top-1/9 w-[2px] bg-black h-22"></div>
              {/* Vertical Line with Rotated Text - Positioned between sections */}
              <div className=" absolute ms-17 left-1/4 top-5/9 ">
                

                {/* Rotated text below the line */}
                <div className="mt-4">
                  <span
                    className=" text-[0.65rem] tracking-wider rotate-90 inline-block whitespace-nowrap"
                    style={{ fontFamily: "Pally-Medium, sans-serif" }}
                  >
                    Raising Environmental Awareness for the Younger Generation
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-4/7 relative ">
              <div className="ml-16">
                <h1
                  className="text-[2.7rem] font-bold text-[#D68C45] mb-4"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  Green Education with E.C.O
                </h1>

                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  E.C.O offers unique and engaging environmental education
                  programs, combining hands-on experience with digital
                  technology, to inspire and raise environmental consciousness
                  among students.
                </p>

                <div className="mb-8">
                  <h3
                    className="text-md font-bold  mb-2"
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    We will:
                  </h3>
                  <ul className=" text-sm">
                    <li className="flex items-start">
                      <span className="text-[#D68C45] text-md mr-3">•</span>
                      <span
                        className=""
                        style={{ fontFamily: "Pally-bold, sans-serif" }}
                      >
                        Provides unique and meaningful learning experiences
                        outside the classroom.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D68C45] text-md mr-3">•</span>
                      <span
                        className=""
                        style={{ fontFamily: "Pally-bold, sans-serif" }}
                      >
                        Enhances environmental awareness and responsibility
                        among students.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D68C45] text-md mr-3">•</span>
                      <span
                        className=""
                        style={{ fontFamily: "Pally-bold, sans-serif" }}
                      >
                        Connects students with nature in a close and practical
                        way.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D68C45] text-md mr-3">•</span>
                      <span
                        className=""
                        style={{ fontFamily: "Pally-bold, sans-serif" }}
                      >
                        Suitable for school extracurricular activities and green
                        projects.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Get In Touch Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openContact();
                  }}
                  className="bg-black text-white font-bold py-2.5  rounded-[15px] w-[330px] hover:bg-white hover:text-black transition-colors duration-300 shadow-lg text-xl ms-5"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Popup */}
      <ContactUsPopup 
        isOpen={isContactOpen} 
        onClose={closeContact} 
        onSubmit={handleContactSubmit} 
      />

      <Footer />
    </>
  );
}
