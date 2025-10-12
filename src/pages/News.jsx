import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/news/1.png";
import img2 from "../assets/news/2.png";
import newAppImage from "../assets/news/new_app.png";
import plantingTreeImage from "../assets/news/planting_tree.png";
import act1Image from "../assets/news/act1.png";
import act2Image from "../assets/news/act2.png";
import missionImage from "../assets/news/mission.png";

export default function News() {
  return (
    <>
      <Header />

      {/* Main Content Section */}
      <section className="relative w-full bg-white">
        <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
          <Navbar />
        </div>

        {/* NEWS! Heading */}
        <div className="container mx-auto px-20 pt-10">
          <div className="text-center mb-16">
            <h1
              className="text-5xl font-bold text-[#D68C45] "
              style={{ fontFamily: "Pally-Bold, sans-serif" }}
            >
              NEWS!
            </h1>
          </div>
        </div>

        {/* Three Content Blocks */}
        <div className="container mx-auto px-15 pb-16">
          <div className="grid grid-cols-7 ">
            {/* Left Block - App Update Now Live */}
            <div className="bg-white rounded-lg p-6 col-span-2 ">
              <div className="mb-4">
                <img
                  src={img1}
                  alt="App Update"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3
                className="text-3xl  text-black mb-3"
                style={{ fontFamily: "Pally-Medium, sans-serif" }}
              >
                Comming soon
              </h3>
              <p
                className="text-md text-black leading-relaxed"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                The latest C.H.A.M version is live, adding real-time weather
                sync and improved impact tracking for all virtual trees.
              </p>
            </div>

            {/* Middle Block - Growing Together */}
            <div className="bg-white text-center flex flex-col justify-center items-center rounded-lg p-6 col-span-3">
              <h3
                className="text-5xl font-bold text-black mb-6"
                style={{ fontFamily: "Pally-Bold, sans-serif" }}
              >
                Growing Together
              </h3>
              <div className="space-y-1 mb-6">
                <p
                  className="text-3xl text-black"
                  style={{ fontFamily: "Pally-Medium, sans-serif" }}
                >
                  Every tree has a story.
                </p>
                <p
                  className="text-3xl text-black"
                  style={{ fontFamily: "Pally-Medium, sans-serif" }}
                >
                  Every action has a ripple.
                </p>
                <p
                  className="text-3xl text-black"
                  style={{ fontFamily: "Pally-Medium, sans-serif" }}
                >
                  Discover the people and progress behind E.C.O.
                </p>
              </div>
              <p
                className="text-2xl text-black"
                style={{ fontFamily: "Pally-Medium, sans-serif" }}
              >
                Follow our team
              </p>
            </div>

            {/* Right Block - New Rewards Unlocked */}
            <div className="bg-white rounded-lg p-6 col-span-2">
              <div className="mb-4">
                <img
                  src={img2}
                  alt="New Rewards"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3
                className="text-3xl text-black mb-3"
                style={{ fontFamily: "Pally-Medium, sans-serif" }}
              >
                Comming soon 
              </h3>
              <p
                className="text-md text-black leading-relaxed"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                Exclusive tree species and special green badges are now
                available for top C.H.A.M players this month.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      <Footer />
    </>
  );
}
