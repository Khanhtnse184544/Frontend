import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/C.H.A.M/our_project/hero.png";
import projectImage1 from "../assets/C.H.A.M/our_project/1.png";
import greenImpactImage from "../assets/C.H.A.M/our_project/green_impact.png";
import gamifiedImage from "../assets/C.H.A.M/our_project/gamified.png";
import joinImage from "../assets/C.H.A.M/our_project/join.png";

export default function OurProject() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/our-game');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
  };

  return (
    <>
      <Header />

      {/* Main Content Section */}
      <section className="relative w-full bg-white">
        <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
          <Navbar />
        </div>

        {/* Hero Section */}
        <section className="relative w-full h-screen -mt-[102px] transition-all duration-700 hover:scale-[1.02] hover:brightness-110">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Forest Landscape"
              className="w-full h-[90%] object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-opacity-20"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex items-center h-full">
            <div className="container mx-auto px-6">
              <div className="flex justify-start ">
                <div className="bg-white-10 rounded-[30px] py-11 ps-13 pe-20 max-w-6xl text-left backdrop-blur-xs flex flex-col justify-center border-1 border-white transition-all duration-500">
                  <h1
                    className="text-white text-xl font-bold mb-4"
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    Chạm – Hiểu – Ấp ủ – Mầm
                  </h1>
                  <h2
                    className="text-[#D68C45] text-8xl font-bold mb-4 "
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    C.H.A.M
                  </h2>
                  <p
                    className="text-white text-xl font-bold"
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    A digital platform bridging virtual actions and real-world
                    impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Content Section */}
        <section className="px-20 pb-8 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-5 gap-10 items-center">
              {/* Left Column - Image */}
              <div className="col-span-2">
                <img
                  src={projectImage1}
                  alt="Boy planting tree with C.H.A.M project"
                  className="h-[99%] w-auto rounded-2xl shadow-lg"
                />
              </div>

              {/* Right Column - Content */}
              <div className="col-span-3 space-y-1 ps-10">
                <h3
                  className="text-xl font-bold text-black leading-tight"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  With C.H.A.M – one tree, one small action, one big change
                </h3>

                <div className="flex items-center gap-3">
                  <h2
                    className="text-5xl font-bold text-[#D68C45]"
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    OUR PROJECT
                  </h2>
                </div>

                <p
                  className="text-xl leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  <span className="font-bold">C.H.A.M</span> is a pioneering
                  initiative blending{" "}
                  <span className="font-bold">
                    technology, environmental conservation, and digital
                    engagement,
                  </span>{" "}
                  operated by the social enterprise{" "}
                  <span className="font-bold">
                    E.C.O (Ecological Conservation Operation).
                  </span>
                </p>

                <p
                  className="text-xl leading-relaxed"
                  style={{ fontFamily: "Pally-Regular, sans-serif" }}
                >
                  What <span className="font-bold">makes C.H.A.M unique</span>{" "}
                  is that every virtual tree planted in the app results in a
                  real tree being planted in Cat Tien National Park – one of
                  Vietnam's most valuable nature reserves. This is about real
                  trees, real land, and real life, supported by user engagement
                  and CSR sponsorships.
                </p>

                <div className="flex justify-end pe-15 mt-8">
                  <button 
                    onClick={handleExploreClick}
                    className="bg-white border-3 border-[#D68C45] text-[#D68C45] text-xl px-18 py-3 rounded-[20px] font-bold hover:bg-[#D68C45] hover:text-white transition-all duration-300"
                  >
                    EXPLORE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

           

        {/* Additional Project Details */}
        <section className="pt-20">
          <div className="container mx-auto px-6">
            <div className="mx-15 text-center">
              <h2
                className="text-3xl font-bold text-[#D68C45]"
                style={{ fontFamily: "Pally-Bold, sans-serif" }}
              >
                With C.H.A.M
              </h2>
              <h2
                className="text-3xl font-bold text-[#D68C45] mb-3"
                style={{ fontFamily: "Pally-Bold, sans-serif" }}
              >
                One tree, one small action, one big change.
              </h2>

              <p
                className="text-xl leading-relaxed mb-8"
                style={{ fontFamily: "Pally-Regular, sans-serif" }}
              >
                C.H.A.M is a pioneering initiative by E.C.O that blends
                technology, conservation, and digital engagement. Every virtual
                tree planted in the app leads to a real tree planted in Cát Tiên
                National Park, creating real-world impact through user
                participation and CSR partnerships.
              </p>

              
            </div>
          </div>
        </section>
      </section>
           {/* Green Impact Section */}
           <section>
          <div className="container mx-auto -mt-20 px-6">
            <div className="grid grid-cols-5 gap-10 items-center">
              {/* Left Column - Image */}
              <div className="col-span-2 -ms-25">
                <img
                  src={greenImpactImage}
                  alt="Trees growing on floating landmass"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Right Column - Content */}
              <div className="col-span-3 space-y-6 pe-15">
                <h2
                  className="text-3xl font-bold text-[#D68C45]"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  Green Impact – CSR & Environmental Education
                </h2>

                <div className="space-y-6">
                  <p
                    className="text-xl text-black leading-relaxed"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    C.H.A.M partners directly with Cát Tiên National Park to run sustainable reforestation programs, planting native trees chosen for ecological balance and maintained by forestry experts.
                  </p>

                  <p
                    className="text-xl text-black leading-relaxed"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    Beyond planting, C.H.A.M offers eco-tours and school workshops to build youth awareness and action.
                  </p>

                  <p
                    className="text-xl text-black leading-relaxed"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    Corporate sponsors can join CSR campaigns, benefiting from transparent reporting and authentic storytelling to enhance both environmental impact and brand value.
                  </p>
                </div>
              </div>
                        </div>
          </div>
        </section>

        {/* Gamified Experience Section */}
        <section className="pb-20 -mt-20 relative">
          

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid grid-cols-5 gap-10 items-center">
              {/* Left Column - Content */}
              <div className="col-span-3 space-y-6 ps-15">
                <h2
                  className="text-3xl font-bold text-[#D68C45]"
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  Gamified Experience - Where Fun Meets Responsibility
                </h2>

                <div className="space-y-6">
                  <p
                    className="text-xl text-black leading-relaxed"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    C.H.A.M is a commitment to nature through play. Players grow digital trees, complete missions, join communities, and build virtual forests.
                  </p>

                  <p
                    className="text-xl text-black leading-relaxed"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    The app combines gamification, AI, and real-time weather data to deliver engaging, personalized experiences that encourage sustainable habits.
                  </p>

                  <p
                    className="text-xl text-black leading-relaxed"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    With a freemium model, core features stay free while premium upgrades—like rare trees, forest themes, eco-tour tickets, and special tools—are available through in-app purchases.
                  </p>
                </div>
              </div>

              {/* Right Column - Visual Space */}
              <div className="col-span-2 -me-25">
              <img
                  src={gamifiedImage}
                  alt="Trees growing on floating landmass"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            
                      </div>
          </section>

        {/* Join the Movement Section */}
        <section className="p-42 relative -mt-40">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={joinImage}
              alt="Lush forest landscape background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6">
            <div className="flex justify-center items-start min-h-[60vh]">
              <div className="  px-12 -mt-20 max-w-4xl text-center ">
                <h3
                  className="text-3xl font-bold text-[#D68C45] "
                  style={{ fontFamily: "Pally-Bold, sans-serif" }}
                >
                  Join the Movement
                </h3>

                <div className="">
                  <h2
                    className="text-xl font-bold text-black"
                    style={{ fontFamily: "Pally-Bold, sans-serif" }}
                  >
                    C.H.A.M is not just a game. It's a movement.
                  </h2>

                  <p
                    className="text-xl text-black leading-relaxed"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    A virtual gesture – a real-world tree.
                  </p>

                  <p
                    className="text-xl text-black leading-relaxed"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    A small care action – a lasting environmental impact.
                  </p>

                  <p
                    className="text-xl text-black leading-relaxed"
                    style={{ fontFamily: "Pally-Regular, sans-serif" }}
                  >
                    Join the green movement with C.H.A.M – where technology grows forests.
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
