import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
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
      <section className="pb-20 pt-8 bg-white  flex flex-1  justify-center items-center">
        <div className="w-full ">
          <div className="text-center ">
            {/* Title */}
            <h1
              className="text-[2.7rem] font-extrabold mb-[-0.5rem]"
              style={{ fontFamily: "Pally-Bold, sans-serif" }}
            >
              ABOUT US
            </h1>

            {/* Subtitle */}
            <h2
              className="text-[3.5rem] font-bold text-[#d68c45]"
              style={{ fontFamily: "Pally-Bold, sans-serif" }}
            >
              ECOLOGICAL <span className="text-black">CONSERVATION</span>{" "}
              OPERATION
            </h2>

            {/* Five Images Row - Centered with different sizes */}
            <div className="flex justify-center items-center gap-8 mb-6 mx-16">
              {/* Image 1 - Smallest */}
              <div className=" w-[210px] h-[210px] flex items-center justify-center">
                <img
                  src={img1}
                  alt="Plant growing from book"
                  className="  object-cover rounded-lg"
                />
              </div>

              {/* Image 2 - Small */}
              <div className="w-[315px] h-[315px] flex items-center justify-center">
                <img
                  src={img2}
                  alt="Plant with circuit patterns"
                  className="  object-cover rounded-lg"
                />
              </div>

              {/* Image 3 - Center, largest */}
              <div className="w-[420px] h-[420px] flex items-center justify-center">
                <img
                  src={img3}
                  alt="Plant with light and circuits"
                  className=" object-cover rounded-lg"
                />
              </div>

              {/* Image 4 - Small */}
              <div className="w-[315px] h-[315px] flex items-center justify-center">
                <img
                  src={img4}
                  alt="Laptop with moss and butterflies"
                  className="  object-cover rounded-lg"
                />
              </div>

              {/* Image 5 - Smallest */}
              <div className=" w-[210px] h-[210px] flex items-center justify-center">
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
                className="text-md text-gray-800 leading-relaxed"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                Connecting people and nature through technology and emotion.
              </p>
              <p
                className="text-md text-gray-800 leading-relaxed"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                Every digital action leads to a real tree, a real impact.
              </p>

              {/* Social Media Icons */}
              <div className="flex justify-center items-center mt-16">
                <SocialLinks 
                  iconSize="w-4 h-4"
                  iconColor="text-[#D68C45]"
                  hoverColor="hover:scale-110"
                  className="gap-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional About Us Section */}
      <section
        className="py-20 bg-cover bg-center relative h-full mx-16 rounded-xl mb-16"
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
                    className="text-3xl font-bold text-gray-800 mb-2"
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    Our Story
                  </h3>
                  <p
                    className="text-md text-gray-700 leading-tight mb-0"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    E.C.O (Ecological Conservation Operation) is a social
                    enterprise founded by a group of Vietnamese youth with a
                    shared love for nature and technology. We aim to restore
                    native forests and inspire the community through gamified
                    solutions.
                  </p>
                  <p
                    className="text-md text-gray-700 leading-tight mb-0"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    Our flagship initiative — C.H.A.M — turns every digital
                    action into real-world tree planting, making environmental
                    contribution fun, transparent, and scalable.
                  </p>
                  <p
                    className="text-md text-gray-700 leading-tight"
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
        className="py-20 bg-cover bg-center relative h-[350px] mx-16 rounded-xl"
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
              className="text-[3.5rem] font-bold mb-4"
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
        <div className="max-w-5xl mx-auto px-8">
          <div className="bg-white rounded-xl shadow-lg p-12">
            <div className="flex justify-between items-center gap-10">
              {/* Left side - Text content */}
              <div className="w-2/3">
                <h3
                  className="text-3xl font-bold text-[#d68c45] mb-3"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  How we work
                </h3>
                <div className="space-y-0">
                  <p
                    className="text-md text-gray-700 leading-relaxed"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    We bridge digital engagement with real environmental action.
                  </p>
                  <p
                    className="text-md text-gray-700 leading-relaxed"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    Through our mobile platform C.H.A.M, users plant virtual
                    trees while learning about ecosystems and sustainability.
                    Every in-app interaction helps fund actual tree planting.
                  </p>
                  <p
                    className="text-md text-gray-700 leading-relaxed"
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
        <div className="max-w-6xl mx-auto px-15">
          {/* Title with lines */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
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
          <div className="flex items-center gap-10 mb-16">
            {/* Left - Text */}
            <div className="w-2/5">
              <p
                className="text-md text-gray-800 leading-relaxed"
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
                  className="w-full h-55 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Second Section - Image Left, Text Right */}
          <div className="flex items-center gap-10">
            {/* Left - Image */}
            <div className="w-2/3">
              <div className="relative">
                <img
                  src={ourMission2}
                  alt="Environmental impact"
                  className="w-full h-70 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right - Text */}
            <div className="w-1/3">
              <div className="space-y-2">
                <p
                  className="text-md text-gray-800 leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  We partner with national parks, schools, and CSR-driven
                  businesses to create a transparent, collaborative ecosystem
                  for sustainability. Every action in the app supports real
                  conservation efforts.
                </p>
                <p
                  className="text-md text-gray-800 leading-relaxed"
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
