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
                App Update Now Live
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
                New Rewards Unlocked
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

      {/* New Information Banner */}
      <section className="w-[90%] mx-auto rounded-xl bg-black py-20">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-9xl font-bold text-white"
            style={{ fontFamily: "Pally-Bold, sans-serif" }}
          >
            New Information
          </h2>
        </div>
      </section>

      {/* Follow Our JOURNEY Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-5 gap-10">
            {/* Left Block - E.C.O Launches New App Interface */}
            <div className="flex flex-col items-start col-span-2">
              {/* Main Heading */}
              <div className="text-center mb-16">
                <h2
                  className="text-8xl font-bold text-black text-left"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  Follow Our <span className="text-9xl">JOURNEY</span>
                </h2>
              </div>
              <img
                src={newAppImage}
                alt="New App Interface"
                className="w-full h-auto rounded-lg mb-6 -mt-10"
              />
              <h3
                className="text-4xl font-bold text-[#D68C45] mb-2"
                style={{ fontFamily: "Pally-Bold, sans-serif" }}
              >
                E.C.O Launches New App Interface
              </h3>
              <p
                className="text-lg text-black mb-6"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                E.C.O has officially unveiled the new interface design for the
                C.H.A.M app, focusing on an optimized user experience and an
                eco-friendly look and feel. With a clearer layout and softer
                color palette, the updated version makes it easier to care for
                virtual trees, track their growth, and manage your personal tree
                collection. Most notably, this version now integrates features.
              </p>
              <a
                href="#"
                className="text-[#d68c45] text-2xl  underline hover:text-[#e09c55] transition-colors "
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                Read more
              </a>
            </div>

            {/* Right Block - REAL TREE PLANTING EVENT AT CÁT TIÊN NATIONAL PARK */}
            <div className="flex flex-col items-start col-span-3">
              <img
                src={plantingTreeImage}
                alt="Tree Planting Event"
                className="w-full h-auto rounded-lg mb-6"
              />
              <h3
                className="text-4xl font-bold text-[#D68C45] mb-2"
                style={{ fontFamily: "Pally-Bold, sans-serif" }}
              >
                Real Tree Planting Event at Cát Tiên National Park
              </h3>
              <p
                className="text-lg text-black mb-6"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                Next month, E.C.O will collaborate with the management board of
                Cát Tiên National Park to organize an inspiring small-scale real
                tree planting event exclusively for the C.H.A.M community. This
                is not just an opportunity to plant seedlings in person, but
                also a chance to directly experience the power of collective
                green actions. Participants will be able to visit the areas
                where virtual tree-planting efforts have been turned into
                living, thriving forests, seeing firsthand how technology can
                create real-world results.
              </p>
              <a
                href="#"
                className="text-[#d68c45] text-2xl  underline hover:text-[#e09c55] transition-colors"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                Read more
              </a>
            </div>
          </div>

          {/* Pagination Section */}
          <div className="flex justify-end items-center mt-8 space-x-4 px-10">
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full bg-[#D68C45] text-white font-bold text-lg flex items-center justify-center hover:bg-[#e09c55] transition-colors">
                1
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-bold text-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
                2
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-bold text-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
                3
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-bold text-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
                4
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-bold text-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
                5
              </button>
            </div>
            
          </div>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-7 gap-8">
            <div className="col-span-5 grid grid-cols-7 gap-8">
              {" "}
              {/* Left Column - VIRTUAL TREES, REAL IMPACT */}
              <div className="flex flex-col col-span-4">
                <h3
                  className="text-4xl font-bold text-[#D68C45] mb-4"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  VIRTUAL TREES, REAL IMPACT
                </h3>
                <p
                  className="text-2xl text-black leading-relaxed pe-5"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  The C.H.A.M project offers a unique experience: you plant
                  virtual trees in the game, and real trees will be planted in
                  national parks. Every virtual seed represents a meaningful
                  step toward change, backed by transparent verification and the
                  opportunity to take part in real-world forest conservation
                  efforts.
                </p>
              </div>
              {/* Middle Column - REAL-TIME CLIMATE CONNECTION */}
              <div className="flex flex-col col-span-3">
                <div className="mb-4">
                  <img
                    src={act1Image}
                    alt="Real-time Climate Connection"
                    className="w-[90%] h-[90%] object-cover rounded-lg"
                  />
                </div>
                <h3
                  className="text-3xl font-bold text-[#D68C45] mb-3"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  REAL-TIME CLIMATE CONNECTION
                </h3>
                <p
                  className="text-lg text-black leading-relaxed mb-4"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  In the C.H.A.M game Real-Time Climate Connection, enhancing
                  authentic experiences.
                </p>
                <a
                  href="#"
                  className="text-[#d68c45] text-2xl  underline hover:text-[#e09c55] transition-colors "
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Read more
                </a>
              </div>
              <div className="container mx-auto px-6 col-span-7">
                <div className="relative ">
                  <img
                    src={act2Image}
                    alt="Forest Landscape with Smartphone"
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute inset-0  bg-opacity-20 rounded-lg"></div>
                </div>
              </div>
            </div>
            {/* Right Column - JOIN OUR GREEN JOURNEY */}
            <div className="flex flex-col col-span-2">
              <h3
                className="text-3xl font-bold text-[#D68C45] mb-4"
                style={{ fontFamily: "Pally-Bold, sans-serif" }}
              >
                JOIN OUR GREEN JOURNEY
              </h3>
              <p
                className="text-lg text-black leading-relaxed mb-4"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                Let's embark on a unique journey with E.C.O, where every tap on
                your phone becomes a green step forward. Our app is more than
                just a simple game — it is a platform for real, meaningful
                change: planting real trees, restoring real forests, and
                building a community of people who share the same mission of
                protecting the planet.
                <br></br>
                <br></br>
                By downloading the app, you can take part in virtual tree
                planting, earn green points, redeem eco-friendly vouchers, and
                even join field trips to national parks to witness the
                real-world results of your contributions. Together, we transform
                small digital actions into measurable, impactful outcomes that
                nurture our environment. This is your chance to turn hope into
                action, and action into flourishing green forests that will grow
                for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E.C.O: OUR GREEN MISSION Section */}
      <section className="p-15 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-3 col-span-2">
              <h2
                className="text-5xl font-bold text-[#D68C45]"
                style={{ fontFamily: "Pally-Bold, sans-serif" }}
              >
                E.C.O: OUR GREEN MISSION
              </h2>

              <div className="space-y-6">
                <p
                  className="text-lg text-black leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  The green journey begins with a simple yet deeply meaningful
                  mission: to connect people with nature through the power of
                  technology and heartfelt emotion. E.C.O believes that every
                  action — no matter how small or digital — can make a tangible,
                  positive, and lasting difference in the real world. Our work
                  goes beyond virtual solutions; we collaborate directly with to
                  plant real trees, restore biodiversity, and educate local
                  communities on the value of preserving natural resources.
                </p>

                <p
                  className="text-lg text-black leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  Through user-friendly and engaging educational platforms,
                  E.C.O strives to spread the message of environmental
                  stewardship to as many people as possible. We aim to inspire
                  collective action, empowering everyone to protect and nurture
                  our shared planet. Our goal is to become a leading social
                  enterprise, championing a sustainable, green lifestyle that
                  unites communities, businesses, and nonprofit organizations
                  around a common mission: building a safe, thriving, and
                  resilient future for generations to come.
                </p>
              </div>
            </div>

            {/* Right Column - Mission Image */}
            <div className="flex col-span-1 pt-10">
              <div className="relative">
                <img
                  src={missionImage}
                  alt="Young green plant growing in sunset"
                  className="w-full  h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
