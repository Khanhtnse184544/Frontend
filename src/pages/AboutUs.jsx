import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/about_us/1.png";
import img2 from "../assets/about_us/2.png";
import img3 from "../assets/about_us/3.png";
import img4 from "../assets/about_us/4.png";
import img5 from "../assets/about_us/5.png";
import ourStory from "../assets/about_us/our_story.png";
import img6 from "../assets/about_us/6.png";
import logo from "../assets/homepage/logo.png";
import ourMission1 from "../assets/about_us/our_mission1.png";
import ourMission2 from "../assets/about_us/our_mission2.png";

export default function AboutUs() {
  return (
    <>
      <Header />
      <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
        <Navbar />
      </div>

      {/* Main Content - ABOUT US Section */}
      <section className="pb-20 pt-10 bg-white  flex flex-1  justify-center items-center">
        <div className="w-full ">
          <div className="text-center space-y-8">
            {/* Title */}
            <h1
              className="text-5xl font-extrabold  mb-3"
              style={{ fontFamily: "Pally-Bold, sans-serif" }}
            >
              ABOUT US
            </h1>

            {/* Subtitle */}
            <h2
              className="text-6xl font-bold text-[#d68c45] mb-6"
              style={{ fontFamily: "Pally-Bold, sans-serif" }}
            >
              ECOLOGICAL <span className="text-black">CONSERVATION</span>{" "}
              OPERATION
            </h2>

            {/* Five Images Row - Centered with different sizes */}
            <div className="flex justify-center items-center gap-8 mb-6 mx-16">
              {/* Image 1 - Smallest */}
              <div className=" w-[222px] h-[222px] flex items-center justify-center">
                <img
                  src={img1}
                  alt="Plant growing from book"
                  className="  object-cover rounded-lg"
                />
              </div>

              {/* Image 2 - Small */}
              <div className="w-[333px] h-[333px] flex items-center justify-center">
                <img
                  src={img2}
                  alt="Plant with circuit patterns"
                  className="  object-cover rounded-lg"
                />
              </div>

              {/* Image 3 - Center, largest */}
              <div className="w-[444px] h-[444px] flex items-center justify-center">
                <img
                  src={img3}
                  alt="Plant with light and circuits"
                  className=" object-cover rounded-lg"
                />
              </div>

              {/* Image 4 - Small */}
              <div className="w-[333px] h-[333px] flex items-center justify-center">
                <img
                  src={img4}
                  alt="Laptop with moss and butterflies"
                  className="  object-cover rounded-lg"
                />
              </div>

              {/* Image 5 - Smallest */}
              <div className=" w-[222px] h-[222px] flex items-center justify-center">
                <img
                  src={img5}
                  alt="Hands holding seedlings"
                  className="  object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Horizontal Line */}
            <div className="w-full h-px bg-gray-300 mb-6"></div>

            {/* Descriptive Text */}
            <div className=" text-center">
              <p
                className="text-xl text-gray-800 leading-relaxed"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                Connecting people and nature through technology and emotion.
              </p>
              <p
                className="text-xl text-gray-800 leading-relaxed"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                Every digital action leads to a real tree, a real impact.
              </p>

              {/* Social Media Icons */}
              <div className="flex justify-center items-center gap-6 mt-16">
                {/* Facebook Icon */}
                <a href="#" className="transition-transform hover:scale-110">
                  <svg className="w-5 h-5" fill="#d68c45" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* TikTok Icon */}
                <a href="#" className="transition-transform hover:scale-110">
                  <svg className="w-5 h-5" fill="#d68c45" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>

                {/* Instagram Icon */}
                <a href="#" className="transition-transform hover:scale-110">
                  <svg className="w-5 h-5" fill="#d68c45" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube Icon */}
                <a href="#" className="transition-transform hover:scale-110">
                  <svg className="w-5 h-5" fill="#d68c45" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional About Us Section */}
      <section
        className="py-20 bg-cover bg-center relative h-full mx-16 rounded-lg mb-16"
        style={{
          backgroundImage: `url(${ourStory})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0"></div>

        <div className="relative h-full flex justify-center items-center">
          <div className="w-[60%] mx-auto px-8">
            <div className="flex justify-start items-center">
              <div className=" bg-white/80 rounded-lg p-8 shadow-md">
                <div className="relative">
                  <h3
                    className="text-4xl font-bold text-gray-800 mb-2"
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    Our Story
                  </h3>
                  <p
                    className="text-lg text-gray-700 leading-tight mb-0"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    E.C.O (Ecological Conservation Operation) is a social
                    enterprise founded by a group of Vietnamese youth with a
                    shared love for nature and technology. We aim to restore
                    native forests and inspire the community through gamified
                    solutions.
                  </p>
                  <p
                    className="text-lg text-gray-700 leading-tight mb-0"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    Our flagship initiative — C.H.A.M — turns every digital
                    action into real-world tree planting, making environmental
                    contribution fun, transparent, and scalable.
                  </p>
                  <p
                    className="text-lg text-gray-700 leading-tight"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    Born out of a deep concern for deforestation and climate
                    change, our journey started with a simple question: How can
                    we protect the earth while engaging the next generation?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section with Image 6 */}
      <section
        className="py-20 bg-cover bg-center relative h-[400px] mx-16 rounded-lg"
        style={{
          backgroundImage: `url(${img6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative h-full flex justify-center items-center">
          <div className="text-center">
            <h2
              className="text-6xl font-bold mb-4"
              style={{
                fontFamily: "Pally-Bold, sans-serif",
                background:
                  "linear-gradient(90deg, white 0%, #d68c45 50%, white 100%)",
                backgroundSize: "200% 100%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradientMove 3s ease-in-out infinite",
              }}
            >
              GROW TREES - GROW IMPACT
            </h2>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <div className="flex justify-between items-center gap-12">
              {/* Left side - Text content */}
              <div className="w-2/3">
                <h3
                  className="text-4xl font-bold text-[#d68c45] mb-3"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  How we work
                </h3>
                <div className="space-y-0">
                  <p
                    className="text-lg text-gray-700 leading-relaxed"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    We bridge digital engagement with real environmental action.
                  </p>
                  <p
                    className="text-lg text-gray-700 leading-relaxed"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    Through our mobile platform C.H.A.M, users plant virtual
                    trees while learning about ecosystems and sustainability.
                    Every in-app interaction helps fund actual tree planting in
                    Vietnamese national parks such as Cát Tiên.
                  </p>
                  <p
                    className="text-lg text-gray-700 leading-relaxed"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    We partner with CSR-driven companies, NGOs, and local
                    communities to ensure transparent, long-term reforestation
                    and community benefits.
                  </p>
                </div>
              </div>

              {/* Right side - Illustration */}
              <div className="flex justify-center items-center w-1/3">
                <div className="relative w-64 h-64">
                  <img src={logo} alt="Our Mission" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          {/* Title with lines */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-px bg-black"></div>
              <h2
                className="text-4xl font-bold text-[#d68c45]"
                style={{ fontFamily: "Pally-Bold, sans-serif" }}
              >
                Our Mission
              </h2>
              <div className="w-16 h-px bg-black"></div>
            </div>
          </div>

          {/* First Section - Text Left, Image Right */}
          <div className="flex items-center gap-12 mb-16">
            {/* Left - Text */}
            <div className="w-2/5">
              <p
                className="text-lg text-gray-800 leading-relaxed"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                At E.C.O – Ecological Conservation Operation, we reconnect
                people with nature through technology, emotion, and collective
                action. Our gamified platforms turn simple virtual tasks into
                real-world tree planting and ecological impact.
              </p>
            </div>

            {/* Right - Image */}
            <div className="w-3/5">
              <div className="relative">
                <img
                  src={ourMission1}
                  alt="Digital nature connection"
                  className="w-full h-60 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Second Section - Image Left, Text Right */}
          <div className="flex items-center gap-12">
            {/* Left - Image */}
            <div className="w-2/3">
              <div className="relative">
                <img
                  src={ourMission2}
                  alt="Environmental impact"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right - Text */}
            <div className="w-1/3">
              <div className="space-y-2">
                <p
                  className="text-lg text-gray-800 leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  We partner with national parks, schools, and CSR-driven
                  businesses to create a transparent, collaborative ecosystem
                  for sustainability. Every action in the app supports real
                  conservation efforts.
                </p>
                <p
                  className="text-lg text-gray-800 leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  More than planting forests, we nurture awareness - embedding
                  green habits through play and education. At E.C.O, small
                  digital steps grow into meaningful environmental change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
