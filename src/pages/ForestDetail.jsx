import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { forests } from "../data/forests";

export default function ForestDetail() {
  const params = useParams();
  const location = useLocation();

  // Resolve forest by slug or by pathname mapping existing routes
  const pathToSlug = {
    "/mixed-hardwood": "mixed-hardwood",
    "/wetland": "wetland",
    "/bamboo-forest": "bamboo-forest",
    "/semi-deciduous-forest": "semi-deciduous-forest",
  };

  const slug = params.slug || pathToSlug[location.pathname];
  const forest = forests.find((f) => f.slug === slug) || forests[0];

  return (
    <>
      <Header />
      <div className="sticky top-0 z-30 w-full flex justify-center items-center select-none m-0">
        <Navbar />
      </div>

      <section className="relative w-full h-full overflow-hidden -mt-[102px] pb-15">
        <img
          src={forest.image}
          alt={forest.bigTitle1}
          className="absolute inset-0 w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="relative grid lg:grid-cols-5 gap-10 items-center bg-transparent backdrop-blur-xs rounded-3xl px-20 pb-20 pt-10 shadow-2xl border-2 border-white w-full max-w-7xl mx-auto min-h-[600px]">
              <div className="lg:col-span-5 text-center ">
                <h1 className="text-5xl font-bold text-white text-center" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                  {forest.bigTitle1}
                </h1>
              </div>

              <div className="flex justify-center lg:col-span-2">
                <div className="relative">
                  <img
                    src={forest.image}
                    alt={forest.bigTitle1}
                    className="w-100 h-130 object-cover rounded-2xl border-2 border-white shadow-2xl"
                  />
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="space-y-6 text-white">
                  <div>
                    <p className="text-lg " style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                      Location: <span className="text-lg " style={{ fontFamily: "Pally-Regular, sans-serif" }}>{forest.detail?.location}</span>
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                      {forest.description}
                    </h2>
                  </div>

                  {Array.isArray(forest.detail?.sections) ? (
                    forest.detail.sections.map((section, idx) => (
                      <div key={idx}>
                        <h3 className="text-2xl font-bold" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                          {section.heading}
                        </h3>
                        {section.paragraphs.map((p, i) => (
                          <p key={i} className="text-lg leading-relaxed" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                            {p}
                          </p>
                        ))}
                        <br/>
                      </div>
                    ))
                  ) : (
                    <>
                      {forest.detail?.formation && (
                        <div>
                          <h3 className="text-2xl font-bold" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                            Sự hình thành
                          </h3>
                          <p className="text-lg leading-relaxed" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                            {forest.detail.formation}
                          </p>
                        </div>
                      )}
                      {forest.detail?.ecological_role && (
                        <div>
                          <h3 className="text-2xl font-bold" style={{ fontFamily: "Pally-Bold, sans-serif" }}>
                            Vai trò sinh thái
                          </h3>
                          <p className="text-lg leading-relaxed" style={{ fontFamily: "Pally-Regular, sans-serif" }}>
                            {forest.detail.ecological_role}
                          </p>
                        </div>
                      )}
                    </>
                  )}
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


